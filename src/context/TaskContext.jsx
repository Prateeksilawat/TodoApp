import { createContext, useEffect, useState } from "react";

export const TaskContext = (createContext)

export const TaskProvider = ({children})=>{

    const [tasks,setTasks] = useState(()=>{
     
        const saveTasks = localStorage.getItem('tasks')
        return saveTasks ? JSON.parse(saveTasks) : []
    })

    //saving the task in local storage
    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    const addTask = (tasks)=>{
        setTasks((prev)=>[tasks, ...prev])
    }

    const value = {
        tasks,
        addTask
    }
    return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}