import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListToDoScreen from '../screens/ListToDoScreen'
import ListToDoItemScreen from '../screens/ListToDoItemScreen'
import FormScreen from '../screens/FormScreen'

const ToDoStack = createNativeStackNavigator()

const NavigatorsContainer = () => {
  return (
    <NavigationContainer>
        <ToDoStack.Navigator>
            <ToDoStack.Screen name="ListToDo" component={ListToDoScreen} />
            <ToDoStack.Screen name="ListToDoItem" component={ListToDoItemScreen} />
            <ToDoStack.Screen name="Form" component={FormScreen} />
        </ToDoStack.Navigator>
    </NavigationContainer>
  )
}

export default NavigatorsContainer