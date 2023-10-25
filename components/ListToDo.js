//import liraries
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import ListToDoItem from './ListToDoItem';
import Wrapper from './Wrapper';

// create a component
const ListToDo = ({
    toDoList,
    deleteItem,
}) => {

    const renderItem = item => {

        return (
            <Wrapper>
                <ListToDoItem item={item} deleteItem={deleteItem}/>
            </Wrapper>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={toDoList}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {

    },
});

//make this component available to the app
export default ListToDo;
