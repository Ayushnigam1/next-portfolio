"use client";
import { Stack, Typography, Box } from "@mui/joy";
import Skillgrid from "../../components/Skillgrid";

export default function Skills() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        background: "linear-gradient(to bottom, #f0f0f3, #ffffff)",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        spacing={6}
        alignItems="center"
        width="100%"
        maxWidth="lg"
        px={2}
      >
        <Typography
          fontSize={{ xs: 40, sm: 52, md: 64 }}
          fontFamily="Rampart One"
          sx={{
           
            textAlign: "center",
          }}
        >
          Skills
        </Typography>

        <Skillgrid />
      </Stack>
    </Box>
  );
}
