import { StatusBar } from 'expo-status-bar';
import Title from '../components/Title';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import { useState } from 'react';
import Input from '../components/Input';

export default function Todolist2() {
    const [newTask, setNewTask]=useState('');

    const _addTask=()=>{
        alert(`add : ${newTask}`);
        setNewTask('');
    };

    const _handleTextChange = (text) =>{
        setNewTask(text);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <Title title="🍪Todo list🍪"></Title>
            <Input
                value={newTask}
                onChangeText={_handleTextChange}
                onSubmitEditing={_addTask}
            />
            <Button
                title="enter"
                onPress={()=>{
                    _addTask();
                }}
            />
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