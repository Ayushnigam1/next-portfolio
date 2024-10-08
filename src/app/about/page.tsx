import { Box, Stack, Step, StepIndicator, Stepper, Typography } from "@mui/joy";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Stack display={'grid'}>
      <Typography
      fontSize={{ xs: 40, sm: 52, md: 64 }}
      marginTop={{xs:16,md:14}}
      marginBottom={11}
      fontFamily="Rampart One"
      justifySelf={'center'}
    >About Me </Typography>
      <Box sx={{  display: { xs: 'flex', sm: 'flex', md: 'grid' }, flexDirection: { xs: 'column', sm: 'column', md: 'unset' }, gridTemplateColumns: {md:"1fr 1fr"}, margin:"50px 10px",fontFamily:"Open Sans"}}>
      <Box sx={{ display:"flex",alignItems:"center", margin:{xs:"10px 20px",md:"unset"}, order: { xs: 2, sm: 2, md: 'unset' }}}>
                <Typography level="title-sm" fontSize={16} fontFamily={"Open Sans"} textAlign={'justify'} sx={{margin:"10px"}}> 
                   Hii 👋🏻 Again, Currently, I am brushing up my problem solving skills by doing competitive programming and working on web development project.
                    I build new projects just to tickle my brain and love guiding others. Apart from studies I also like sports where I'd love to play Table Tennis, chess and cricket.
                </Typography>
            </Box>
        <Box
          sx={{
            width: { xs: 450, sm: 500, md: 700 },
            height: { xs: 150, sm: 200, md: 300 },
            position: "relative",
            alignSelf: "center",
            justifySelf: "center",
            display: "grid",
            order: { xs: 1, sm: 1, md: 'unset' },
          }}
        >
          <Image
            src="/about.png"
            alt="LinkedIn"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        </Box>
        <Box sx={{  display: { xs: 'flex', sm: 'flex', md: 'grid' }, flexDirection: { xs: 'column', sm: 'column', md: 'unset' }, gridTemplateColumns: {md:"1fr 1fr"}, margin:"50px 10px",fontFamily:"Open Sans"}}>
            <Box>
                <Typography level="title-lg" fontSize={24} fontFamily={"Open Sans"} sx={{ textAlign:{xs:"center",md:"unset"}, margin:{xs:"20px 0px",md:"unset" } }}> Experience</Typography>
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
                <Typography  level="body-sm" fontFamily={"Open Sans"}>
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
                <Typography  level="body-sm" fontFamily={"Open Sans"}>
                  Led and developed a full-stack web application, digitizing the
                  insurance claims process, which reduced processing time by 30%
                  and increased customer satisfaction by 25%.
                </Typography>
              </Stack>
            </Step>
          </Stepper>
        </Box>
        <Box sx={{  display: { xs: 'flex', sm: 'flex', md: 'grid' }, flexDirection: { xs: 'column', sm: 'column', md: 'unset' }, gridTemplateColumns: {md:"1fr 1fr"}, margin:"50px 10px",fontFamily:"Open Sans"}}>
            <Box>
                <Typography level="title-lg" fontSize={24} fontFamily={"Open Sans"} sx={{ textAlign:{xs:"center",md:"unset"}, margin:{xs:"20px 0px",md:"unset" } }}> Education</Typography>
            </Box>
          <Stepper orientation="vertical" sx={{ "--Step-gap": "10px" }}>
            <Step>
              <div>
                <Typography level="title-md">
                SRIT, B.Tech Computer Science
                </Typography>
                <Typography level="body-xs">
                June 2019 - June 2023 ,Jabalpur, Madhya Pradesh
                </Typography>
                
              </div>
              <Stack spacing={4} margin={1}>
              <Typography> 9.25 CGPA</Typography>
              </Stack>
            </Step>
            <Step>
              <div>
                <Typography level="title-md">
                12th, Vigyan Higher Secondary School
                </Typography>
                <Typography level="body-xs">
                March 2018 - June 2019,Chhatarpur, Madhya Pradesh
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
