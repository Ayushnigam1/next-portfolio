"use client"
import { Card, Chip, Container, Divider, Stack, Typography} from "@mui/joy";
import { skills } from "@/skills";
import { wrap } from "module";
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <Container component="section" sx={{ paddingTop: {xs:16,md:10}, paddingBottom: 10, height:"100%",display:"flex",alignItems:"center"}}>
        <Stack position="relative" flex={3}>
          <Typography display={"inline"}
            fontSize={{ xs: 30, sm: 32, md: 44 }}
            fontFamily="Open Sans"
            fontWeight={"bold"}> Hi, I am . . .</Typography>
          <Typography
            display={"inline"}
            fontSize={{ xs: 47, sm: 62, md: 74 }}
            fontFamily="Rampart One"
          >
            Ayush Nigam
          </Typography>
          <Typography level="body-md" color="neutral" fontFamily="Open Sans" fontWeight={400}>
            Full Stack Developer with good experience in web designing and
            development, producting the Quality work.
          </Typography>
        </Stack>
        <Stack display={{xs:"none",sm:"block"}} flex={2} marginLeft={2}><Image src="/landing.png" alt="landing" width={300} height={300}></Image></Stack>
      </Container>
      {/* <Container component="section">
          <Stack height={220} width={{xs:300,md:400}} flexWrap={"wrap"}>
        {
          skills.map((skill,index)=>{
            return (
            <Chip key={index} sx={{
              "--Chip-minHeight": "40px","--Chip-radius": "5px","--Chip-gap": "5px", margin:"2px",minWidth: {xs:"80px",md:"100px"},fontFamily:"Open Sans"

            }} variant="outlined">{skill.name}</Chip>
            )
          })
        }
        </Stack>
      </Container> */}
    </>
  );
}
