"use client"
import { Card, Chip, Container, Divider, Stack, Typography} from "@mui/joy";
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Container
  component="section"
  sx={{
    paddingTop: { xs: 16, md: 10 },
    paddingBottom: 10,
    height: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative", 
  }}
>
  <Stack
    position={{ xs: "absolute", sm: "relative" }}
    sx={{
      bottom: { xs: 0, sm: "unset" }, 
      left: { xs: 0, sm: "unset" },     
      flex: 3,
      zIndex: 1,                        
      padding: { xs: 2, sm: "unset" },  
    }}
  >
    <Typography
      display={"inline"}
      fontSize={{ xs: 30, sm: 32, md: 44 }}
      fontFamily="Open Sans"
      fontWeight={"bold"}
    >
      Hi, I am . . .
    </Typography>
    <Typography
      display={"inline"}
      fontSize={{ xs: 47, sm: 62, md: 74 }}
      fontFamily="Rampart One"
    >
      Ayush Nigam
    </Typography>
    <Typography
      level="body-md"
      color="neutral"
      fontFamily="Open Sans"
      fontWeight={400}
    >
      Full Stack Developer with good experience in web designing and
      development, producing the Quality work.
    </Typography>
  </Stack>

  <Stack
    display={{ xs: "block", sm: "block" }} 
    flex={2}
    marginLeft={2}
    sx={{
      position: { xs: "absolute", sm: "relative" },
      top: { xs: "50px", sm: "unset" },    
      right: { xs: 0, sm: "unset" },       
      margin: { xs: 0, sm: "unset" },     
    }}
  >
    <Image src="/landing.png" alt="landing" width={300} height={300} />
  </Stack>
</Container>

    </>
  );
}
