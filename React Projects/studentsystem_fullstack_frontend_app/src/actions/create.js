import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateStudent() {
  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  const navigate= useNavigate();

  const paperStyle = {
    padding:'30px',
    width:800,
    margin:'20px auto'
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const data={name,address}
    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      console.log("New Student Information Added...!!!");
      navigate("/")
    }).catch((error)=>{
      console.log(error,'error');
    })
  }

  const handleCancel = ()=>{
    navigate('/')
  }

  return (
    <Paper elevation={3} style={paperStyle}>
    <u style={{color:'blue'}}><h1 >Add Student</h1></u>
    <form>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth sx={{mb:2}}  value={name} onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth sx={{mb:2}}  value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant="contained" onClick={handleSubmit} >SUBMIT</Button>
      <Button variant="outlined" sx={{ml:1}} onClick={handleCancel}>CANCEL</Button>
    </form>
  </Paper>
  )
}

export default CreateStudent