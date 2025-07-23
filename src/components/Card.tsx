
import { Project } from "@/types/Projects";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { Github } from "lucide-react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/joy";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "lg",
        boxShadow: "lg",
        transition: "0.3s",
        overflow: "hidden",
        height: 450, 
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "xl",
        },
      }}
    >
      <Box
        component="img"
        src={project.imageUrl}
        alt={project.name}
        sx={{
          width: "100%",
          height: 180,
          objectFit: "cover",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      />

      <CardContent sx={{ p: 3,flex: "1 1 auto" }}>
        <Typography
          level="title-lg"
          fontSize="1.25rem"
          fontWeight={600}
          mb={0.5}
          sx={{
            color: theme.palette.text.primary,
            fontFamily: "Open Sans",
            textTransform: "capitalize",
          }}
        >
          {project.name}
        </Typography>

        <Typography
          level="body-sm"
          sx={{
            color: theme.palette.text.secondary,
            fontFamily: "Open Sans",
            textTransform: "capitalize",
            minHeight: 70,
            maxHeight: 70,
            overflowY: "auto",
            scrollbarWidth: "thin",
            "&::-webkit-scrollbar": {
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "2px",
            },
          }}
        >
          {project.description}
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1}
          mt={2}
          alignItems="center"
        >
          {project.topics
            .filter((t) => t !== "showcase")
            .map((topic) => (
              <Chip
                key={topic}
                variant="soft"
                color="neutral"
                size="sm"
                sx={{ fontFamily: "Open Sans", textTransform: "capitalize" }}
              >
                {topic}
              </Chip>
            ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 3, pb: 2,  justifyContent: "space-between", flexShrink: 0  }}>
        <Stack direction="row" gap={1}>
          <Link href={project.url} target="_blank">
            <IconButton variant="outlined" color="neutral" size="sm">
              <Github size={16} />
            </IconButton>
          </Link>
          {project.homepage && (
            <Link href={project.homepage} target="_blank">
              <IconButton variant="outlined" color="neutral" size="sm">
                <ArrowTopRightOnSquareIcon height={16} />
              </IconButton>
            </Link>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
