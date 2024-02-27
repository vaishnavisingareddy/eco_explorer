import React,{useState} from 'react'
import {Box,Typography,Button, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const navigate=useNavigate()
  const [inputs,setInputs]=useState({
    name:'',
    email:'',
    password:''

  })


  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(e)
    try{
      const {data}= await axios.post('/api/v1/user/register',
      {username:inputs.name,
        email:inputs.email,
        password:inputs.password})
      if (data.success){
        alert('User Registered successfully');
        navigate('/login')

      }

    } catch(error){
      console.log(error)
    }

  }


  return (
    <>
    <form onSubmit={handleSubmit}> 
       <Box maxWidth={450} display="flex" 
       flexDirection='column'
       alignItems="center" 
       justifyContent={"center"}
       margin="auto"
       marginTop={3}
       boxShadow="10px 10px 20px #ccc"
       padding={4}
       borderRadius={5}>
        <Typography padding={3} fontFamily={'Times New Roman'} fontStyle={'normal'} fontSize={'30px'} textAlign="center" >Register</Typography>
        <TextField name='name' required type='text' margin='normal' value={inputs.name} onChange={handleChange} placeholder='Enter your Username' />
        <TextField name='email' required type='email' margin='normal' value={inputs.email} onChange={handleChange} placeholder='Enter your Email '/>
        <TextField name='password' required type='password' margin='normal' value={inputs.password} onChange={handleChange} placeholder='Enter your Password' />
        <Button
        type='submit'
        sx={{borderRadius:3,marginTop:3}}
        variant='contained'
        color='primary'>
          Submit
          </Button>
        <Button onClick={()=>navigate('/login') } style={{fontFamily:"Times New Roman" }}
        >Already register ? login </Button>

       </Box>
       </form>
    </>
  )
}

export default Register

