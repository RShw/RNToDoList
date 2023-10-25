//import liraries
import React from 'react';
import { Button, Text, StyleSheet } from 'react-native';

// create a component
const ListToDoItem = ({item, deleteItem}) => {
    return (
        <>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Button 
                onPress={() => deleteItem(item.id)}
                title='Delete'
            />
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
