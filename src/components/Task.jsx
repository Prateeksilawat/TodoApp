import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const Task = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleCreate = () => {
    if (task.trim()) {
      onAdd(task.trim());
      setTask("");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "50%",
          mx: "auto",
          marginTop: "20px",
        }}
      >
        <TextField
          fullWidth
          sx={{ width: "60%" }}
          label="Enter your task"
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreate();
            }
          }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "10px" }}
          size="large"
          onClick={handleCreate}
        >
          Create
        </Button>
      </Box>
    </>
  );
};

export default Task;
