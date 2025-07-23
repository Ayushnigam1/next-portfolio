"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Sheet,
  useTheme,
  styled,
} from "@mui/joy";
import {
  Instagram,
  LinkedIn,
  GitHub,
  Email,
} from "@mui/icons-material";
import {
  FaUpwork,
  FaGithub,
} from "react-icons/fa6";
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodingninjas,
  SiGmail,
} from "react-icons/si";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Icon = styled("div")(({ theme }) => ({
  fontSize: "32px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.2)",
  },
}));

const contactLinks = [
  { icon: <FaInstagram />, url: "https://www.instagram.com/its_ayush_nigam_?igsh=dXN1dW96MHBoNDBs", label: "Instagram" },
  { icon: <AiOutlineLinkedin />, url: "https://www.linkedin.com/in/ayush-nigam-269aa4220", label: "LinkedIn" },
  { icon: <FaGithub />, url: "https://github.com/Ayushnigam1", label: "GitHub" },
  { icon: <SiGmail />, url: "mailto:ayush27nigam02@gmail.com", label: "Email" },
  { icon: <FaUpwork />, url: "https://www.upwork.com/freelancers/~01fb2b36856406c51c", label: "Upwork" },
  { icon: <SiLeetcode />, url: "https://leetcode.com/u/ayush_nigam_1/", label: "LeetCode" },
  { icon: <SiGeeksforgeeks />, url: "https://www.geeksforgeeks.org/user/ayush27nigam02/", label: "GFG" },
  { icon: <SiCodingninjas />, url: "https://www.naukri.com/code360/profile/Ayush_01", label: "Coding Ninjas" },
];

export default function ContactPage() {
  const theme = useTheme();

  return (
    <Box  sx={{
      height: "100vh",        // full viewport height
      display: "flex",                  // center vertically
      alignItems: "center",
      justifyContent: "center",
      background: "radial-gradient(circle at center, #ffffff 60%, transparent 100%)", // fade effect
      px: 2,
    }}>
      <Container maxWidth="md"
      sx={{
        backgroundColor: "background.body",
        borderRadius: "md",
        boxShadow: "lg",
        // padding: { xs: 4, sm: 6 },
        backdropFilter: "blur(4px)",     // subtle blur look
      }}>
        {/* Title */}
        <Typography
          level="h1"
          fontFamily="Rampart One"
          fontSize={{ xs: 40, sm: 60 }}
          textAlign="center"
          mb={6}
        >
          Let’s Connect
        </Typography>

        {/* Grid of Social Icons */}
        <Grid container spacing={3} justifyContent="center">
          {contactLinks.map(({ icon, url, label }) => (
            <Grid key={label} xs={6} sm={4} md={3}>
              <Sheet
                variant="soft"
                sx={{
                  backgroundColor: "background.surface",
                  borderRadius: "lg",
                  padding: 3,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "md",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ textDecoration: "none" }}
                >
                  <Icon>{icon}</Icon>
                  <Typography
                    level="body-sm"
                    mt={1}
                    fontWeight={500}
                    sx={{ color: 'text.secondary',textDecoration:"none"}}
                  >
                    {label}
                  </Typography>
                </a>
              </Sheet>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
