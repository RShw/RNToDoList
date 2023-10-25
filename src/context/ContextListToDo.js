import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const ContextListToDo = createContext()

const initialState = [
    {
      id: 0,
      title: "Labore commodo nulla dolore sunt amet laborum anim aliquip excepteur elit veniam Lorem.",
      description: "Proident aliqua pariatur quis eu esse. Id cillum pariatur nostrud aliquip officia culpa ea ipsum nisi reprehenderit. Amet incididunt dolore ad laboris deserunt excepteur labore anim deserunt consectetur. Non consequat irure enim irure.",
    },
    {
      id: 1,
      title: "Commodo nisi nulla dolor deserunt labore veniam.",
      description: "Proident magna fugiat laboris ullamco officia cillum id cupidatat excepteur irure amet. Quis pariatur ut dolor eu mollit dolore deserunt consequat adipisicing labore fugiat cillum aliquip dolore. Occaecat id in reprehenderit magna nisi qui irure laboris deserunt. Irure mollit dolore reprehenderit elit eu nostrud esse."
    },
    {
      id: 3,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
    {
      id: 4,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
    {
      id: 5,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
    {
      id: 6,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
    {
      id: 7,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
    {
      id: 8,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
    {
      id: 9,
      title: "Dolor elit dolore excepteur aliqua ad duis tempor quis est est nulla veniam deserunt pariatur.",
      description: "Elit minim proident et proident est tempor reprehenderit dolor deserunt aliquip velit dolor. Nulla esse anim voluptate velit nulla deserunt pariatur Lorem. Qui est velit dolore ad eu ut consequat."
    },
  ]

export default function ProviderListToDo({children}) {

    const [toDoList, setToDoList] = useState(initialState)

    const deleteItem = id => {
        const tempToDoList = [...toDoList]
        const filterToDoList = tempToDoList.filter(item => id !== item.id)
        setToDoList(filterToDoList)
    }
    
    const addItem = ({title, description}) => {
        const newToDo = {
            title,
            description,
            id: new Date()
        }
        setToDoList([newToDo, ...toDoList])
    }

    return (
        <ContextListToDo.Provider value={{deleteItem, addItem, toDoList}}>
            {children}
        </ContextListToDo.Provider>
    )
}