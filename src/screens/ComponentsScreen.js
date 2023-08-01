// PART 1 import libaries needed for component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// PART 2 Creates component
const ComponentsScreen = () => {
    const name = 'Shawn';

    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
    )
};

// PART 3 Create Stylesheet
const styles = StyleSheet.create( {
    textStyle: {
        fontSize: 45
    },

    subHeaderStyle: {
        fontSize: 20
    }
});

// PART 4 export component to be used elsewhere
export default ComponentsScreen;