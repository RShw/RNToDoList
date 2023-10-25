//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import ListToDoItem from './ListToDoItem';
import Wrapper from './Wrapper';
import { ContextListToDo } from '../context/ContextListToDo';
import { useNavigation } from '@react-navigation/native';

// create a component
const ListToDo = () => {

    const {toDoList} = useContext(ContextListToDo)

    const navigation = useNavigation()

    const moveToItem = (id) => {
        navigation.navigate("ListToDoItem", {
            id
        })
    }

    const renderItem = item => {

        return (
            <TouchableOpacity onPress={() => moveToItem(item.id)}>
                <Wrapper>
                    <ListToDoItem item={item}/>
                </Wrapper>
            </TouchableOpacity>
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
