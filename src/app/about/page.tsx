import { Box, Stack, Step, StepIndicator, Stepper, Typography } from "@mui/joy";
import Image from "next/image";

export default function About() {
  return (
    <>
    <Stack display={'grid'}>
      {/* Title */}
      <Typography
        fontSize={{ xs: 32, sm: 52, md: 64 }}  // Reduced font size for xs
        marginTop={{ xs: 8, md: 14 }}          // Reduced margin for xs
        marginBottom={5}                       // Reduced margin for xs
        fontFamily="Rampart One"
        justifySelf={'center'}
      >
        About Me
      </Typography>
  
      {/* About Me Section */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'grid' },
          flexDirection: { xs: 'column', sm: 'column', md: 'unset' },
          gridTemplateColumns: { md: "1fr 1fr" },
          margin: { xs: "20px 5px", md: "50px 10px" },  // Reduced margin for xs
          fontFamily: "Open Sans",
          overflow: 'hidden'  // Prevent overflow
        }}
      >
        {/* Text Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            margin: { xs: "10px 10px", md: "0px 10px" },
            order: { xs: 2, sm: 2, md: 'unset' }
          }}
        >
          <Typography fontSize={16} fontFamily="Open Sans" textAlign="justify">
            Hii 👋🏻 Again, Currently, I am brushing up my problem solving skills
            by doing competitive programming and working on web development
            projects. I build new projects just to tickle my brain and love
            guiding others. Apart from studies, I also like sports where I would
            love to play Table Tennis, chess, and cricket.
          </Typography>
        </Box>
  
        {/* Image Section */}
        <Box
          sx={{
            width: { xs: "100%", sm: 500, md: 700 },  // Full width for xs
            height: { xs: 150, sm: 200, md: 300 },
            position: "relative",
            alignSelf: "center",
            justifySelf: "center",
            display: "grid",
            order: { xs: 1, sm: 1, md: 'unset' },
            marginBottom: { xs: 4, sm: 0 }  // Add some space between boxes in xs
          }}
        >
          <Image
            src="/about.png"
            alt="About"
            layout="fill"
            objectFit="contain"
          />
        </Box>
      </Box>
  
      {/* Experience Section */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'grid' },
          flexDirection: { xs: 'column', sm: 'column', md: 'unset' },
          gridTemplateColumns: { md: "1fr 1fr" },
          margin: { xs: "20px 5px", md: "50px 10px" },  // Reduced margin for xs
          fontFamily: "Open Sans",
        }}
      >
        <Box>
          <Typography fontSize={24} fontFamily="Open Sans" sx={{ textAlign: { xs: "center", md: "unset" }, margin: { xs: "20px 0px", md: "unset" } }}>
            Experience
          </Typography>
        </Box>
        <Stepper orientation="vertical" sx={{ "--Step-gap": "10px" }}>
          <Step>
            <div>
              <Typography level="title-md">
                Genpact, Software Engineer
              </Typography>
              <Typography level="body-xs">
                July 2023 - Present, Hyderabad
              </Typography>
            </div>
            <Stack spacing={4} margin={1}>
              <Typography level="body-sm" fontFamily="Open Sans">
                Contributed to multiple projects using Node.js, React.js,
                Next.js, and GraphQL. Designed and developed responsive forms
                with comprehensive validation logic, improving the overall
                customer experience by 15%
              </Typography>
            </Stack>
          </Step>
          <Step>
            <div>
              <Typography level="title-md">
                Enquero Global, SDE Intern
              </Typography>
              <Typography level="body-xs">
                March 2023 - July 2023, Hyderabad
              </Typography>
            </div>
            <Stack spacing={4} margin={1}>
              <Typography level="body-sm" fontFamily="Open Sans">
                Led and developed a full-stack web application, digitizing the
                insurance claims process, which reduced processing time by 30%
                and increased customer satisfaction by 25%.
              </Typography>
            </Stack>
          </Step>
        </Stepper>
      </Box>
  
      {/* Education Section */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'grid' },
          flexDirection: { xs: 'column', sm: 'column', md: 'unset' },
          gridTemplateColumns: { md: "1fr 1fr" },
          margin: { xs: "20px 5px", md: "50px 10px" },  // Reduced margin for xs
          fontFamily: "Open Sans",
        }}
      >
        <Box>
          <Typography fontSize={24} fontFamily="Open Sans" sx={{ textAlign: { xs: "center", md: "unset" }, margin: { xs: "20px 0px", md: "unset" } }}>
            Education
          </Typography>
        </Box>
        <Stepper orientation="vertical" sx={{ "--Step-gap": "10px" }}>
          <Step>
            <div>
              <Typography level="title-md">
                SRIT, B.Tech Computer Science
              </Typography>
              <Typography level="body-xs">
                June 2019 - June 2023, Jabalpur, Madhya Pradesh
              </Typography>
            </div>
            <Stack spacing={4} margin={1}>
              <Typography>9.25 CGPA</Typography>
            </Stack>
          </Step>
          <Step>
            <div>
              <Typography level="title-md">
                12th, Vigyan Higher Secondary School
              </Typography>
              <Typography level="body-xs">
                March 2018 - June 2019, Chhatarpur, Madhya Pradesh
              </Typography>
            </div>
            <Stack spacing={4} margin={1}>
              <Typography>87% PCM</Typography>
            </Stack>
          </Step>
        </Stepper>
      </Box>
    </Stack>
  </>
  
  );
}
