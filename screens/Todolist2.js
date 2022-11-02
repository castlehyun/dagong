import { StatusBar } from 'expo-status-bar';
import Title from '../components/Title';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

export default function Todolist2() {
    return (
        <SafeAreaView style={styles.container}>
            <Title title="todo list"></Title>
            <Text>start</Text>
            <StatusBar style='auto' />
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});