"use client"
import { Sheet, Stack, Typography, useTheme } from "@mui/joy"
import {Instagram} from '@mui/icons-material'
import {  FaUpwork } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode,SiGeeksforgeeks,SiGmail,SiCodingninjas  } from 'react-icons/si';

export default function Contacts() {
    const theme =useTheme()
 return (
    <Stack  alignItems={"center"} direction={"row"} textAlign={"center"} height={'100%'}>
    <Typography
      fontSize={{ xs: 36, sm: 52, md: 64 }}
      
     sx={{ position: "relative",
        marginLeft:"15%",
        marginRight:"10%",
        "&:not(:last-child)::after": {
          content: '""',
          position: "absolute",
          right: "-25px", // Adjust based on your spacing needs
          top:"-35px",
          transform: "translateX(-50%)",
          width: "2px",
          height: "200%", // Adjust height as needed
          backgroundColor: "#7A3E3E", // Divider color
        }
    }}
      fontFamily="Rampart One"
    >Connect Me</Typography>
    <Stack direction={"row"} gap={5}>
        <Stack gap={3}>
        <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}>   
        <a href="https://www.instagram.com/its_ayush_nigam_?igsh=dXN1dW96MHBoNDBs" target="_blank" rel="noopener noreferrer">
        <Instagram  sx={{ color: '#7A3E3E',fontSize: 50, transition: 'font-size 0.2s ease-in-out',  '&:hover':{fontSize:52}  }} />
      </a>
      </Sheet>
      <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}>  
      
      <a href="https://www.linkedin.com/in/ayush-nigam-269aa4220" target="_blank" rel="noopener noreferrer">
       <AiOutlineLinkedin size={50} color="#7A3E3E" />
       </a>
       </Sheet>
       <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}> 
       <a href="https://github.com/Ayushnigam1" target="_blank" rel="noopener noreferrer">
        <FaGithub size={50} color="#7A3E3E"/>
        </a>
        </Sheet>
        <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}> 
        <a href="mailto:ayush27nigam02@gmail.com" target="_blank" rel="noopener noreferrer">
        <SiGmail size={50} color="#7A3E3E"/>
        </a>
        </Sheet>
        </Stack>
        <Stack gap={3}>
        <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}> 
        <a href="https://www.upwork.com/freelancers/~01fb2b36856406c51c" target="_blank" rel="noopener noreferrer">
        <FaUpwork size={50} color="#7A3E3E"/>
        </a>
        </Sheet>
        <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}> 
        <a href="https://leetcode.com/u/ayush_nigam_1/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode size={50} color="#7A3E3E"/>
        </a>
        </Sheet>
        <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}> 
        <a href="https://www.geeksforgeeks.org/user/ayush27nigam02/" target="_blank" rel="noopener noreferrer">
        <SiGeeksforgeeks size={50} color="#7A3E3E"/>
        </a>
        </Sheet>
        <Sheet variant="soft" sx={{
            boxShadow:theme.shadow['xs'],
            textAlign:"center",
            transition: 'box-shadow 0.2s ease-in-out', 
            '&:hover': {
                boxShadow: theme => theme.shadow['md'], 
            },}}> 
        <a href="https://www.naukri.com/code360/profile/Ayush_01" target="_blank" rel="noopener noreferrer">
        <SiCodingninjas size={50} color="#7A3E3E"/>
        </a>
        </Sheet>
        </Stack>
         
        
    </Stack>
  </Stack>
 )
}