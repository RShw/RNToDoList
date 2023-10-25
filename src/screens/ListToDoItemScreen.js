import { View, Text } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { ContextListToDo } from '../context/ContextListToDo'
import { useRoute } from '@react-navigation/native'
import ListToDoItem from '../components/ListToDoItem'

export default function ListToDoItemScreen() {

    const {toDoList} = useContext(ContextListToDo)

    const [item, setItem] = useState({})
    

    const route = useRoute()

    useEffect(() => {
        const tempToDoList = [...toDoList]
        const filterArray = tempToDoList.filter(item => route?.params?.id === item.id)
        setItem(filterArray[0])
    }, [route?.params?.id, toDoList])

  return (
    <ListToDoItem item={item} isButtonDisplay={true} />
  )
}