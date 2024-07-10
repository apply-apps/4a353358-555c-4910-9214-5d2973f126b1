// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Button, View, Text } from 'react-native';

const LetterDisplay = ({ letter }) => {
    return (
        <View style={letterStyles.letterContainer}>
            <Text style={letterStyles.letterText}>{letter}</Text>
        </View>
    );
};

const App = () => {
    const [index, setIndex] = useState(0);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

    const nextLetter = () => {
        setIndex((prevIndex) => (prevIndex + 1) % letters.length);
    };

    return (
        <SafeAreaView style={appStyles.container}>
            <View style={appStyles.content}>
                <LetterDisplay letter={letters[index]} />
                <Button title="Next Letter" onPress={nextLetter} />
            </View>
        </SafeAreaView>
    );
};

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        backgroundColor: '#F9F9F9',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const letterStyles = StyleSheet.create({
    letterContainer: {
        marginBottom: 20,
        padding: 40,
        borderRadius: 10,
        backgroundColor: '#FFEB3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    letterText: {
        fontSize: 100,
        fontWeight: 'bold',
    },
});

export default App;