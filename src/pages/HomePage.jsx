import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

const HomePage = () => {
  return (
    <>
        <Header/>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'50%',mx:'auto',marginTop:'20px'}}>
            
            <TextField fullWidth sx={{width:'60%'}} label='Enter your task' variant='outlined' />
            <Button variant='contained' sx={{marginTop:'10xp'}} size="large">Create</Button>
        </Box>
    </>
  )
}

export default HomePage