"use client";
import { Grid, Box } from "@mui/joy";
import { skills } from "@/skills";
import CustomSheet from "@/components/CustomSheet";

export default function Skillgrid() {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 4 }}
      justifyContent="center"
      alignItems="center"
    >
      {skills.map((skill, index) => (
        <Grid
          key={index}
          xs={6}
          sm={4}
          md={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <CustomSheet url={skill.url} name={skill.name} />
        </Grid>
      ))}
    </Grid>
  );
}
