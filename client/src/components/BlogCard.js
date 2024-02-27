import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import Edit from '@mui/icons-material/Edit';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function BlogCard({title,description,
  image,username,time,id,isUser }) {
    const navigate=useNavigate()
    const handleDelete=async()=>{
      try{
        const {data}=await axios.delete(`api/v1/blog/delete-blog/${id}`)
        if (data?.success){
          alert("deleted successfully")
          navigate('/my-blogs')
        }

      } catch(error){
        console.log(error)
      }

    }
    const handleEdit=()=>{
      navigate(`/blog-details/${id}`);

    };

  // return (
  //   <Card sx={{ width: '40%',margin:'auto',
  //   mt:2,padding:2,
  //   boxShadow:'5px 5px 10px #ccc',":hover:":{
  //       boxShadow:"10px 10px 20px #ccc"
        
  //   } }}>
  //     {isUser && (
  //       <Box display={'flex'}>
  //        <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}>
  //         <Edit />
  //        </IconButton>
  //        <IconButton>
  //         <DeleteIcon onClick={handleDelete}  />

  //        </IconButton>

  //       </Box>

  //     )}
  //     <CardHeader
  //       avatar={
  //         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  //           {username}
  //         </Avatar>
  //       }
        
  //       title={username}
  //       subheader={time}
  //     />
  //     <CardMedia
  //       component="img"
  //       height="194"
  //       image={image}
  //       alt="Paella dish"
  //     />
  //     <CardContent>
  //       <Typography variant="body2" color="text.secondary">
  //       Description: {description}
  //       </Typography>
  //     </CardContent>
     
    
  //   </Card>
  // );
  return (
    <Card sx={{
      width: '90%', // Adjusted width for responsiveness
      margin: 'auto',
      mt: 2,
      padding: 2,
      boxShadow: '5px 5px 10px #ccc',
      ":hover:": {
        boxShadow: "10px 10px 20px #ccc"
      },
      '@media screen and (min-width: 600px)': { // Adjusted for smaller screens
        width: '70%',
      },
      '@media screen and (min-width: 900px)': { // Adjusted for larger screens
        width: '50%',
      }
    }}>
      {isUser && (
        <Box display={'flex'}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: 'auto' }}>
            <Edit />
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={handleDelete} />
          </IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        title={username}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
      </CardContent>
    </Card>
  );
  
}