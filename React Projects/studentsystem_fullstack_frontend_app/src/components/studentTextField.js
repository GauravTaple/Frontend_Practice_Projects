import { Button, Container, Paper } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentTextField() {
  const [student,setStudent] = useState([]);
  const navigate = useNavigate();

  const paperStyle = {
    padding:'30px',
    width:800,
    margin:'20px auto'
  }

  const handleEdit = () =>{
    navigate('/editStudent')
  }

  const handleDelete = () =>{
    navigate('/')
  }

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAll").then(res=>res.json()).then(result=>setStudent(result))
  },[student])

  return (
    <Container>
      <h1>Students List :-</h1>
      <Paper elevation={5} style={paperStyle}>
        {student.map(item=>(
          <Paper elevation={6} style={{ margin: "20px", padding: '15px', textAlign: 'left' }}>
            Id     : {item.id}<br />
            Name   : {item.name}<br />
            Address: {item.address}
            <br />
          <div style={{marginTop:10}}>
          <Button variant='contained' onClick={handleEdit}>UPDATE</Button>
          <Button variant='outlined' onClick={handleDelete} style={{marginLeft:5}}>DELETE</Button>
          </div>
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}
