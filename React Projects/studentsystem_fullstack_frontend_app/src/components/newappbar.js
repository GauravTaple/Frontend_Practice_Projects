import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewAppBar() {
  const navigate= useNavigate();
  const handleClick = () =>{
    navigate('/addStudent')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Full Stack Application Using Spring Boot And React
          </Typography>
          <Button variant="contained"  onClick={handleClick} style={{ color: 'black',backgroundColor:'white' }}>Add Student</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
