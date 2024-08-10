import { Project } from "@/types/Projects";
// import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { Card, CardActions, CardContent, CardCover, Chip, IconButton, Stack, Typography, useTheme } from "@mui/joy";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}
function ProjectCard(props: ProjectCardProps) {
  const { project } = props
  const theme = useTheme()
  return <Card sx={{ padding: 0, gap: 0, height: '100%', zIndex:"-1" }} key={project.url}>
    <CardContent sx={{ minHeight: 250, position: 'relative' }}>
      <CardCover>
        <img src={project.imageUrl} />
      </CardCover>
    </CardContent>
    <CardActions sx={{ padding: 2 }}>
      <Stack justifyContent={'end'} width={'100%'} fontFamily={"Open Sans"}>
        <Typography level='title-lg' textTransform={'capitalize'} fontFamily={"Open Sans"} fontSize={24}>{project.name}</Typography>
        <Typography level='body-sm' textTransform={'capitalize'} fontFamily={"Open Sans"}>{project.description}</Typography>
        <Stack width='100%' direction='row' justifyContent='space-between' alignItems='start' marginTop={1}>
          <Stack direction='row' fontFamily={"Open Sans"} gap={1}>
            {project.topics.filter(t => t !== 'showcase').map(topic =>
              <Chip key={topic}  size='sm'>{topic}</Chip>
            )}
          </Stack>
          <Link target='_blank' href={project.url}>
          {/* <IconButton><ArrowTopRightOnSquareIcon height={18} color={theme.palette.text.tertiary} /></IconButton> */}
          </Link>
        </Stack>
      </Stack>
    </CardActions>
  </Card>
}

export default ProjectCard