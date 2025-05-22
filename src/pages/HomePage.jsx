import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <>
        <h2>Welcome to  Todo App</h2>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'50%',mx:'auto',marginTop:'20px'}}>
            
            <TextField fullWidth sx={{width:'60%'}} label='Enter your task' variant='outlined' />
            <Button variant='contained' sx={{marginTop:'10xp'}} size="large">Create</Button>
        </Box>
    </>
  )
}

export default HomePage