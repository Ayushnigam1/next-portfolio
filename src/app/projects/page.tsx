import { getProjects } from "@/api/project";
import ProjectCard from "@/components/Card";
import Projectgrid from "@/components/Projectgrid";
import { Grid, Stack, Typography } from "@mui/joy";

export default async function Projects() {
  const projects = await getProjects();
  return <Stack>
    <Typography
      fontSize={{ xs: 40, sm: 52, md: 64 }}
      marginTop={{xs:16,md:14}}
      marginBottom={11}
      fontFamily="Rampart One"
    >Projects</Typography>
    <Projectgrid projects={projects}/>
  </Stack>
}