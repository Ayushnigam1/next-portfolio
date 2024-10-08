import { Box, Sheet, Typography } from "@mui/joy"
import Image from "next/image"

interface sheetProps{
    url:'string',
    name:"string"
}
function CustomSheet(props:sheetProps){
    return (
        <>
        <Sheet
      variant="outlined"
      sx={{
        backgroundColor: 'transparent',  
        fontFamily:"Open Sans",
        border: '1px solid',          
        borderColor: '#d1d1d5', 
        color: '#FFFFFF',    
        width:{xs:"100px",sm:"150px"},
        height:{xs:"70px",sm:"100px"},
        cursor:"pointer",      
        transition:"all 0.4s ease 0s",   
        marginBottom:"30px",
        filter: "grayscale(0)",
        padding:"15px",
       display:'grid',
        '&:hover': {
          border: '1px solid transparent', 
          boxShadow: '0px 8px 30px rgba(118, 85, 225, 0.15)', 
          filter:"grayscale(1)",

          '& .hover-text': {
            opacity: 1,            
            visibility: 'visible',
            transform: 'scale(1.5)',  
          },
        },
      }}
    >
          <Box
      sx={{
        width: { xs: 50, sm: 70 },   
        height: { xs: 60, sm: 90 },   
        position: 'relative', 
        alignSelf:"center",
        justifySelf:"center",  
        display:'grid'    
      }}
    >
    <Image src={props.url} alt={props.name} layout="fill"  
        objectFit="contain"  />
        <Typography  className="hover-text"
      sx={{
        opacity: 0,       
        visibility: 'hidden',  
        transition: 'transform 0.4s ease,opacity 0.4s ease, visibility 0.4s ease', 
        zIndex:100,
        position: 'absolute', 
        top:"90%",
        textAlign: 'center',
         justifySelf:'center',
        transform: 'translate(-50%, -50%) scale(0.5)',
        fontFamily:"montserrat",
       fontSize:"12px"

      }}>
        {props.name.toUpperCase()}
      </Typography>

        </Box>
    </Sheet>
        </>
    )

}
export default CustomSheet