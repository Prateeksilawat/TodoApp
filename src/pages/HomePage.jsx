import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/Header";
import Task from "../components/Task";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prev) => [newTask, ...prev]);
  };
  return (
    <>
      <Header />
      <Box sx={{ width: "50%", mx: "auto", mt: 3 }}>
        {tasks.map((task, index) => (
          <Paper key={index} sx={{ p: 2, mb: 1 }}>
            <Typography>{task}</Typography>
          </Paper>
        ))}
      </Box>
      <Task onAdd={addTask} />
    </>
  );
};

export default HomePage;
