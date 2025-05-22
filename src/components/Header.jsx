import { Box, Typography } from '@mui/material'
import React from 'react'

const Header = () => {

    const currentDate = new Date()
    const day  = currentDate.getDate()
    const month = currentDate.toLocaleString('default', { month: 'short' })

  return (
    <Box 
     sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        width:'80%',
        padding:2,
        // backgroundColor:'#f5f5f5',
        margin:'0 auto',
     }}>
        <Typography variant='h4'  >Task MANAGER</Typography>
        <Typography variant="body1">{`${day} ${month}`}</Typography>
    </Box>
  )
}

export default Header