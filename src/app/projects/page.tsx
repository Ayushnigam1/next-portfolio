import { getProjects } from "@/api/project";
import Projectgrid from "@/components/Projectgrid";
import { Grid, Stack, Typography } from "@mui/joy";

export default async function Projects() {
  const projects = await getProjects();
  return <Stack display={'grid'}>
    <Typography
      fontSize={{ xs: 40, sm: 52, md: 64 }}
      marginTop={{xs:16,md:14}}
      marginBottom={11}
      fontFamily="Rampart One"
      justifySelf={'center'}
    >Projects</Typography>
    <Projectgrid projects={projects}/>
  </Stack>
}