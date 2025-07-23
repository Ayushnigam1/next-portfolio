"use client"
import { Card, Chip, Container, Divider, Stack, Typography} from "@mui/joy";
import Image from 'next/image';


export default function Home() {
 
  return (
    <>
      <Container
  component="section"
  sx={{
    py: { xs: 10, sm: 12 },
    minHeight: "100vh",
    display: "flex",
    flexDirection: { xs: "column-reverse", sm: "row" }, // 💡 responsive layout
    alignItems: "center",
    justifyContent: "space-between",
    gap: 4,
  }}
>
  <Stack
   flex={1}
   sx={{
     textAlign: { xs: "center", sm: "left" },
     zIndex: 1,
     px: { xs: 2, sm: 0 },
   }}
  >
    <Typography
    
      fontSize={{ xs: 30, sm: 32, md: 44 }}
      fontFamily="Open Sans"
      fontWeight={"bold"}
    >
      Hi, I am . . .
    </Typography>
    <Typography
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
      mt={1}
    >
      Full Stack Developer with good experience in web designing and
      development, producing the Quality work.
    </Typography>
  </Stack>

  <Stack
   flex={1}
       alignItems="center"
        justifyContent="center"
    sx={{
     
      animation: "float 2s ease-in-out infinite",
      "@keyframes float": {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0px)" },
      },     
    }}
  >
    <Image src="/landing.png" alt="landing" width={300} height={300} style={{ maxWidth: "100%", height: "auto" }}  />
  </Stack>
</Container>

    </>
  );
}
