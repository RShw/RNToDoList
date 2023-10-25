//import liraries
import React, { useContext } from 'react';
import { Button, Text, StyleSheet } from 'react-native';
import { ContextListToDo } from '../context/ContextListToDo';
import { useNavigation } from '@react-navigation/native';

// create a component
const ListToDoItem = ({item, isButtonDisplay = false}) => {

    const {deleteItem} = useContext(ContextListToDo)

    const navigation = useNavigation()

    const moveAndDeleteItem = (id) => {
        navigation.navigate("ListToDo")
        deleteItem(id)
    }

    return (
        <>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            {isButtonDisplay ?
                <Button 
                    onPress={() => moveAndDeleteItem(item.id)}
                    title='Delete'
                />
            :
                <></>
            }
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color: "#0F0F0F",
    },
    description: {
        marginVertical: 12,
        fontSize: 18
    }
});

//make this component available to the app
export default ListToDoItem;
