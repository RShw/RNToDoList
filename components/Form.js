//import liraries
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback } from 'react-native';

// create a component
const Form = ({addItem}) => {

    const refTitle = useRef()
    const refDescription = useRef()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    useEffect(() => {
        title && description ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
    }, [title, description])
    
    const resetForm = useCallback(() => {
        setTitle("")
        setDescription("")
    }, [])

    const addTask = () => {
        if(!isButtonDisabled){
            addItem({description, title})
            resetForm()
        }
        refTitle.current.focus()
    }

    const titleFocus = useCallback(() => {
        refTitle.current.focus()
    }, [])

    const descriptionFocus = () => {
        refDescription.current.focus()
    }
    
 
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback 
                onPress={() => titleFocus()}
            >
                <Text>Title</Text>
            </TouchableWithoutFeedback>
            <TextInput 
                style={styles.textInput}
                onChangeText={setTitle}
                value={title}
                ref={refTitle}
                onSubmitEditing={descriptionFocus}
                blurOnSubmit={false}
            />
            <TouchableWithoutFeedback 
                onPress={descriptionFocus}
            >
                <Text>Description</Text>
            </TouchableWithoutFeedback>
            <TextInput 
                style={styles.textInput}
                onChangeText={setDescription}
                value={description}
                ref={refDescription}
                onSubmitEditing={addTask}
                blurOnSubmit={false}
            />
            <View style={styles.buttonContainer}>
                <Button 
                    title='Valid'
                    disabled={isButtonDisabled}
                    onPress={addTask}
                />
                <Button 
                    title='Reset'
                    onPress={resetForm}
                />
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 4
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
        marginBottom: 4
    },
});

//make this component available to the app
export default Form;
