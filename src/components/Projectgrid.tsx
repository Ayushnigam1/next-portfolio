"use client"

import { Project } from "@/types/Projects"
import ProjectCard from "./Card"
import { Grid } from "@mui/joy"

interface ProjectgridProps {
  projects: Project[]
}
function Projectgrid({ projects }: ProjectgridProps) {
  return <Grid container spacing={1}>
    {projects.map(project => {
      return <Grid key={project.name} xs={12} md={6}>
        <ProjectCard project={project}/>
      </Grid>
    })}
  </Grid>
}

export default Projectgrid