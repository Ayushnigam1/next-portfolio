"use client";

import { Project } from "@/types/Projects";
import ProjectCard from "./Card";
import { Grid, Box } from "@mui/joy";

interface ProjectgridProps {
  projects: Project[];
}

function Projectgrid({ projects }: ProjectgridProps) {
  return (
    
      <Grid container spacing={4}  sx={{ zIndex: 2 }}>
        {projects.map((project, index) => (
          <Grid key={index} xs={12} lg={6}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    
  );
}

export default Projectgrid;
