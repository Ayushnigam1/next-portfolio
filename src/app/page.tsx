"use client";
import { Box, Card, Chip, Container, Divider, Stack, Typography} from "@mui/joy";
import { Github, Download,UserPlus } from "lucide-react";
import Link from "next/link";
import { IconButton,Button } from "@mui/joy";
import { skills } from "@/skills";
import Image from 'next/image';
import { getProjects } from "@/api/project";
import ProjectCard from "@/components/Card";
import { useEffect, useState } from "react";
import { Project } from "@/types/Projects";
import { certifications } from "@/skills";
import CertificateCard from "@/components/Certification";

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
  fontSize={{ xs: 36, sm: 47, md: 74 }}
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
  <Stack
  direction="row"
  spacing={2}
  mt={3}
  justifyContent={{ xs: "center", sm: "flex-start" }}
>
  {/* GitHub Button */}
  <Link href="https://www.github.com/ayushnigam1" target="_blank">
    <IconButton variant="outlined" color="neutral" size="sm">
      <Github size={16} />
          <span style={{padding:"4px"}}>GitHub</span> 
    </IconButton>
  </Link>

  {/* Resume Button */}
  <Link
    href="https://drive.google.com/file/d/1J17Ea6Ht6t3Unkim6nPEdBfP2h-5aPVi/view?usp=drive_link"
    target="_blank"
  >
    <IconButton variant="outlined" color="neutral" size="sm">
      <Download size={16} />
      <span style={{padding:"4px"}}>Resume</span> 
    </IconButton>
  </Link>

    <Link href={"contacts"} scroll={true}>
    <Button
      variant="outlined"
      color="neutral"
      size="sm"
      startDecorator={<UserPlus size={16} />}
    >
      Connect
    </Button>
  </Link>
</Stack>


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
<Container
  component="section"
  sx={{
    py: { xs: 8, sm: 10 },
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
    textAlign: "center",
  }}
>
  <Typography
    level="h2"
    fontSize={{ xs: 28, sm: 36 }}
    fontFamily="Rampart One"
  >
    A Glimpse of Me
  </Typography>

  <Typography
    maxWidth="md"
    level="body-sm"
    fontFamily="Open Sans"
    color="neutral"
    sx={{ px: 2 }}
  >
    I enjoy solving real-world problems with full-stack development. Currently,
    I’m building web apps, refining my algorithms, and occasionally smashing the
    ping pong ball. Dive deeper into my journey below!
  </Typography>

  <Stack direction="row" spacing={2}>
    <Link href="/about">
      <Button variant="soft" color="primary" size="sm">
        Experience
      </Button>
    </Link>
    <Link href="/about">
      <Button variant="soft" color="primary" size="sm">
        Education
      </Button>
    </Link>
  </Stack>
</Container>
   <Container
      component="section"
      sx={{
        py: { xs: 6, sm: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Typography
        level="h2"
        fontSize={{ xs: 28, sm: 36 }}
        fontFamily="Rampart One"
      >
        Technologies I Know
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 1.5,
        }}
      >
        {skills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 1.5,
              py: 0.5,
              borderRadius: "lg",
              border: "1px solid",
              borderColor: "neutral.outlinedBorder",
              bgcolor: "background.surface",
              fontSize: "sm",
              fontWeight: 500,
            }}
          >
            <Image
              src={skill.url}
              alt={skill.name}
              width={20}
              height={20}
              style={{ objectFit: "contain" }}
            />
            {skill.name}
          </Box>
        ))}
      </Box>
        <Stack
    spacing={1}
    alignItems="center"
 
    
  >
    <Typography level="body-md" fontWeight="md" color="neutral">
      👀 Want a categorized view for skillset?
    </Typography>
    <Link href="/skills">
      <Button size="md" variant="soft" color="neutral">
        Explore Skill Section
      </Button>
    </Link>
  </Stack>
    </Container>

<Container maxWidth="lg" sx={{ mt: 12 }}>
  <Stack
    sx={{
      py: { xs: 6, sm: 8 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      textAlign: "center",
    }}
  >
    <Typography
      level="h2"
      fontSize={{ xs: 28, sm: 36 }}
      fontFamily="Rampart One"
    >
      Things I Develop
    </Typography>

    {/* Info Message */}
    <Stack
      spacing={1}
      sx={{
        backgroundColor: "#F5F7FA",
        borderRadius: 2,
        px: 3,
        py: 2,
        maxWidth: 600,
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Typography level="body-md" fontWeight="md" color="neutral">
        🙇‍♂️ Sorry! Project previews are not shown here directly.
      </Typography>
      <Typography level="body-sm" color="neutral">
        You can find all the work I’ve dedicated time to in the full project
        section. Click below to explore them all!
      </Typography>
    </Stack>

    {/* Button */}
    <Stack direction="row" justifyContent="center" mt={2}>
      <Link href="/projects">
        <Button size="lg" variant="soft" color="neutral">
          View All Projects
        </Button>
      </Link>
    </Stack>
  </Stack>
</Container>

<Box sx={{
      py: { xs: 6, sm: 8 },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      textAlign: "center",
    }}>
 <Typography
    level="h2"
    fontSize={{ xs: 28, sm: 36 }}
    fontFamily="Rampart One"
  >
    Certifications 
  </Typography>


  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      px: 2,
      gap: 2,
      '&::-webkit-scrollbar': { display: 'none' }, // hide scrollbar in WebKit
      scrollbarWidth: 'none', // hide scrollbar in Firefox
    }}
  >
    {certifications.map((cert, index) => (
      <CertificateCard key={index} {...cert} />
    ))}
  </Box>
</Box>

    </>
  );
}
