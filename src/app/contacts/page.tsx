"use client";
import { Sheet, Stack, Typography, styled, useTheme } from "@mui/joy";
import { Instagram } from "@mui/icons-material";
import { FaUpwork } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiGmail,
  SiCodingninjas,
} from "react-icons/si";

const Icon = styled("div")(({ theme }) => ({
  fontSize: "50px",
  transition: "font-size 0.2s ease-in-out",
  "&:hover": {
    fontSize: "52px",
  },
}));
export default function Contacts() {
  const theme = useTheme();

  return (
    <Stack
      alignItems={"center"}
      direction={"row"}
      textAlign={"center"}
      height={{ md: "100%" }}
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
        paddingTop: { xs: "50%", md: "0px" },
      }}
    >
        <Typography
          fontSize={{ xs: 36, sm: 52, md: 64 }}
          sx={{
            position: "relative",
            marginLeft: "15%",
            marginRight: "10%",
            "&:not(:last-child)::after": {
              content: '""',
              position: "absolute",
              right: { xs: "50%", md: "-25px" },
              top: { xs: "10px", md: "-35px" },
              transform: {
                xs: "rotate(90deg) scale(2)",
                md: "translateX(-50%)",
              },
              width: "1px",
              height: "200%",
              backgroundColor: "#7A3E3E",
            },
          }}
          fontFamily="Rampart One"
          
        >
          Connect Me
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={5}
          sx={{
            marginTop: { xs: "10%", md: "10px" },
            marginLeft: { xs: "20px", md: "0" },
          }}
        >
          <Stack gap={3} direction={{ xs: "row", md: "column" }}>
          <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://www.instagram.com/its_ayush_nigam_?igsh=dXN1dW96MHBoNDBs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  sx={{
                    color: "#7A3E3E",
                    fontSize: 50,
                    transition: "font-size 0.4s ease-in-out",
                    "&:hover": { fontSize: 56 },
                  }}
                />
              </a>
            </Sheet>
            <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://www.linkedin.com/in/ayush-nigam-269aa4220"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={AiOutlineLinkedin} color="#7A3E3E" />
              </a>
            </Sheet>
            <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://github.com/Ayushnigam1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaGithub} color="#7A3E3E" />
              </a>
            </Sheet>
            <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="mailto:ayush27nigam02@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={SiGmail} color="#7A3E3E" />
              </a>
            </Sheet>
          </Stack>
          <Stack gap={3} direction={{ xs: "row", md: "column" }}>
          <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://www.upwork.com/freelancers/~01fb2b36856406c51c"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={FaUpwork} color="#7A3E3E" />
              </a>
            </Sheet>
            <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://leetcode.com/u/ayush_nigam_1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={SiLeetcode} color="#7A3E3E" />
              </a>
            </Sheet>
            <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://www.geeksforgeeks.org/user/ayush27nigam02/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={SiGeeksforgeeks} color="#7A3E3E" />
              </a>
            </Sheet>
            <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)"
        },
      }}
    >
              <a
                href="https://www.naukri.com/code360/profile/Ayush_01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon as={SiCodingninjas} color="#7A3E3E" />
              </a>
            </Sheet>
          </Stack>
        </Stack>
    </Stack>
  );
}
