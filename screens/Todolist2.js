import { StatusBar } from 'expo-status-bar';
import Title from '../components/Title';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, Image } from 'react-native';
import { useState } from 'react';
import Input from '../components/Input';
import IconButton from '../components/IconButton';
import {images} from '../components/images';

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
            <IconButton type={images.uncompleted} />
            <IconButton type={images.completed} />
            <IconButton type={images.delete} />
            <IconButton type={images.edit} />
        </SafeAreaView>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFC8F0',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});