"use client"
import { Card, Chip, Container, Stack, Typography } from "@mui/joy";
import { skills } from "@/skills";
import { wrap } from "module";
export default function Home() {
  return (
    <>
      <Container component="section" sx={{ paddingTop: {xs:16,md:10}, paddingBottom: 10 }}>
        <Stack position="relative">
          <Typography
            display={"inline"}
            fontSize={{ xs: 36, sm: 52, md: 64 }}
            fontFamily="Rampart One"
          >
            Hi, I am Ayush
          </Typography>
          <Typography level="body-lg" color="neutral" fontFamily="Open Sans">
            Full Stack Developer with good experience in web designing and
            development, producting the Quality work.
          </Typography>
        </Stack>
      </Container>
      <Container component="section">
        {/* <Stack direction={"row"}>
      <Typography
            display={"inline"}
            fontSize={{ xs: 36, sm: 52, md: 64 }}
            fontFamily="Rampart One"
            marginRight={30}
          >
            Skills
          </Typography> */}
          <Stack height={220} width={{xs:300,md:400}} flexWrap={"wrap"}>
        {
          skills.map((skill,index)=>{
            return (
            <Chip key={index} sx={{
              "--Chip-minHeight": "40px","--Chip-radius": "5px","--Chip-gap": "5px", margin:"2px",minWidth: {xs:"80px",md:"100px"}

            }} variant="outlined">{skill.name}</Chip>
            )
          })
        }
        </Stack>
    {/* </Stack> */}
      </Container>
    </>
  );
}
