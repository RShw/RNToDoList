import { View, Text, Button } from 'react-native'
import React from 'react'
import ListToDo from '../components/ListToDo'
import { useNavigation } from '@react-navigation/native'

export default function ListToDoScreen() {

    const navigation = useNavigation()

    const goToForm = () => {
        navigation.navigate("Form")
    }

  return (
    <>
        <Button
            title={"Add task"}      
            onPress={goToForm}  
        />
        <ListToDo/>
    </>
  )
}