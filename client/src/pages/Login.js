import React,{useState} from 'react'
import {Box,Typography,Button, TextField} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useDispatch} from "react-redux";
import {authActions} from "../redux/store"



const Login = () => {
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
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
      const {data}= await axios.post('/api/v1/user/login',
      {
        email:inputs.email,
        password:inputs.password});
      if (data.success){
        
        localStorage.setItem('userId',  data.user._id)
        dispatch(authActions.login())
        alert('user login successfully');
        navigate('/blogs')

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
       marginTop={5}
       boxShadow="10px 10px 20px #ccc"
       padding={13}
       borderRadius={5}>
        <Typography padding={3} textAlign="center" >Login</Typography>
       
        <TextField name='email' required type='email' margin='normal' value={inputs.email} onChange={handleChange} placeholder='please enter your email '/>
        <TextField name='password' required type='password' margin='normal' value={inputs.password} onChange={handleChange} placeholder='please enter your password' />
        <Button
        type='submit'
        sx={{borderRadius:3,marginTop:3}}
        variant='contained'
        color='primary'>
          Submit
          </Button>
        <Button onClick={()=>navigate('/Register')}
        >Not a User Please Register </Button>

       </Box>
       </form>
    </>
  )
}

export default Login