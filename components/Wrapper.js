//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

// create a component
const Wrapper = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        borderColor: 'salmon',
        borderWidth: 1,
        margin: 8,
        padding: 12
    },
});

//make this component available to the app
export default Wrapper;
