import { StatusBar } from 'expo-status-bar';
import Title from '../components/Title';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import Input from '../components/Input';
import IconButton from '../components/IconButton';
import {images} from '../components/images';
import Task from '../components/Task';


export default function Todolist2() {
    const [newTask, setNewTask]=useState('');

    const [tasks,setTasks]=useState({
        1: {id: '1', text: '할 일 예시 1', completed:false},
        2: {id: '2', text: '할 일 예시 2', completed:false},
    });

    const _addTask=()=>{
        const ID = Date.now().toString();
        const newTaskObject = {
            [ID]: {id: ID, text: newTask, completed: false},
        };
        setNewTask('');
        setTasks({...tasks, ...newTaskObject})
    };

    const _handleTextChange = (text) =>{
        setNewTask(text);
    };

    const _deleteTask = (id) =>{
        const currentTasks=Object.assign({}, tasks);
        delete currentTasks[id];
        setTasks(currentTasks);
    };

    const _toggleTask = (id) => {
        const currentTasks = Object.assign({},tasks);
        currentTasks[id]['completed'] = !currentTasks[id]['completed'];
        setTasks(currentTasks);
    };

    const _updateTask = (item) => {
        const currentTasks = Object.assign({},tasks);
        currentTasks[item.id]=item;
        setTasks(currentTasks);
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <Title title="🥕Todo list🥕"></Title>
            <Input
                value={newTask}
                onChangeText={_handleTextChange}
                onSubmitEditing={_addTask}
            />
            <ScrollView>
                {Object.values(tasks)
                    .reverse()
                    .map((item) => (
                        <Task 
                            key={item.id} 
                            item={item} 
                            deleteTask={_deleteTask}
                            toggleTask={_toggleTask}
                            updateTask={_updateTask}
                        />
                    ))}
            </ScrollView>
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