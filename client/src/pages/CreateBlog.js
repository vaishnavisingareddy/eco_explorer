import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import {Box,Typography,Button, TextField, InputLabel} from '@mui/material'

const CreateBlog = () => {
  const id=localStorage.getItem('userId')
  const navigate=useNavigate()
  const [inputs,setInputs]=useState({
    title:'',
    description:'',
    image:''
    
  });
  const handleChange=(e)=>{
    setInputs(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value

    }))

  }


  const handleSubmit=async(e)=>{
    
    e.preventDefault()
    try{
    const {data} =await axios.post(`api/v1/blog/create-blog`,{
      title:inputs.title,
      description:inputs.description,
      image:inputs.image,
      user:id
    }

    )
    if (data?.success){
      alert('Blog Created')
      navigate('/my-blogs');

    }

    } catch(error){
      console.log(error)

    }
    
    
   

  }
  return (
   
    <>
    <form onSubmit={handleSubmit}>
     <Box width={'50%'} border={3} borderRadius={10}
      padding={3} 
     boxShadow={'10px 10px 20px #ccc'}
     margin="auto" display="flex" flexDirection={'column'}>
      <Typography fontFamily={'Times New Roman'} fontSize={'30px'} 
      color="black" textAlign={'center'}>Create a Post
      </Typography>
<InputLabel sx={{mb:1,mt:2,fontSize:'27px',
}}>
  Title</InputLabel>
  <TextField required value={inputs.title} 
  name='title' fontFamily={'Times New Roman'} onChange={handleChange} 
  margin='normal' variant='outlined'/>
  <InputLabel sx={{mb:1,mt:2,fontSize:'27px',
  }}>
  description</InputLabel>
  <TextField required value={inputs.description} 
  name='description' fontFamily={'Times New Roman'} onChange={handleChange} 
  margin='normal' variant='outlined'/>
  <InputLabel sx={{mb:1,mt:2,fontSize:'27px',
  }}>
  Image URL</InputLabel>
  <TextField required value={inputs.image} 
  name='image' onChange={handleChange} 
  margin='normal' variant='outlined'/>
<Button type="submit" color='primary' variant='contained' >Submit

</Button>

     </Box>
    </form>
       
    </>
  )
}

export default CreateBlog