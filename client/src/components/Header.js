// import React,{useState} from 'react'
// import {Box,AppBar,Toolbar,Button, Typography,Tabs,Tab} from '@mui/material'
// import { Link } from 'react-router-dom'
// import {useSelector,useDispatch} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import {authActions} from "../redux/store"
// import './sty.css'

// const Header = () => {
//   const isLogin=useSelector(state=>state.auth.isLogin)
//   const dispatch=useDispatch()
//   const navigate=useNavigate()
//   const [value,setValue]=useState()

//   const handleLogout=()=>{
//     try{
//       dispatch(authActions.logout())
//       alert("logout success")
//       navigate('/login')
//     } catch(error){
//       console.log(error)
//     }

//   }
  
//   return (
//     <>
//     <AppBar position='sticky'>
//         <Toolbar>
//             <Typography>
//               My Blog App
//             </Typography>
//             {isLogin && (
//                <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
//                <Tabs textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
//                  <Tab label="blogs" LinkComponent={Link} to="/blogs"/>
//                  <Tab label="my Blogs" LinkComponent={Link} to='/my-blogs'/>
//                  <Tab label="Create Blog" LinkComponent={Link} to='/create-blog'/>
//                </Tabs>
//              </Box>
//             )}


//            <div className='heade'>
//             <Box display={'flex'} marginRight="auto">
//               {!isLogin && (<>  <Button sx={{color:'white'}} LinkComponent={Link} to="/login">Login</Button>
//                 <Button sx={{color:'white'}} LinkComponent={Link} to="/register">Register</Button></>)}
              
//                {isLogin &&  <Button onClick={handleLogout} sx={{margin:1,color:'white'}} LinkComponent={Link} to="/logout">Logout</Button>}
//             </Box>
            
//             </div>

//         </Toolbar>

//     </AppBar>

//     </>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Button, Typography, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions } from "../redux/store";
import './sty.css';


const Header = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState();

  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      alert("logout success");
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <AppBar position='sticky' sx={{ backgroundColor: '#030637' }}>
        <Toolbar>
          <Typography style={{fontSize:'40px', padding:'12px'}}>
            Eco Explorer
          </Typography>
          {isLogin && (
            <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
              <Tabs textColor='inherit' value={value} onChange={(e, val) => setValue(val)}>
                <Tab label="blogs" LinkComponent={Link} to="/blogs" />
                <Tab label="my Blogs" LinkComponent={Link} to='/my-blogs' />
                <Tab label="Create Blog" LinkComponent={Link} to='/create-blog' />
              </Tabs>
            </Box>
          )}

          <div className='heade'>
            <Box display={'flex'} marginRight="auto">
           
              {/* {!isLogin && ( */}
                {/* <> */}
                  {/* <Button sx={{ color: 'white' }} LinkComponent={Link} to="/login">Login</Button> */}
                  {/* <Button variant="contained" sx={{ color: 'white', marginRight:'10px' }} LinkComponent={Link} to="/login">Login</Button> */}
                  {/* <Button variant="contained" sx={{ color: 'white' ,marginLeft:'20px'}} LinkComponent={Link} to="/register">Register</Button> */}

                  {/* <Button sx={{ color: 'white' }} LinkComponent={Link} to="/register">Register</Button> */}
                {/* </> */}
              {/* )} */}
              {/* <h1>hey</h1> */}

              {isLogin && <Button onClick={handleLogout} sx={{ margin: 1, color: 'white' }} LinkComponent={Link} to="/">Logout</Button>}
            </Box>
          </div>

        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
