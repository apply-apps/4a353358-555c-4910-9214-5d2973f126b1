// Filename: index.js
// Combined code from all files

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

const LetterDisplay = ({ letter }) => {
    return (
        <View style={styles.letterContainer}>
            <Text style={styles.letterText}>{letter}</Text>
        </View>
    );
};

export default function App() {
    const [index, setIndex] = useState(0);
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        fetchLetters();
    }, []);

    const fetchLetters = async () => {
        const response = await fetch('https://api.jsonbin.io/b/615b0ecaa90ae43f3bf4cfae');
        const data = await response.json();
        setLetters(data.letters);
    };

    const nextLetter = () => {
        setIndex((prevIndex) => (prevIndex+1) % (letters.length || 1));
    };

    return (
        <SafeAreaView style={styles.container}>
            {
                letters.length === 0 ? (
                    <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                    <View style={styles.content}>
                        <LetterDisplay letter={letters[index]} />
                        <Button title="Next Letter" onPress={nextLetter} />
                    </View>
                )
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        padding: 20,
        backgroundColor: '#F5FCFF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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