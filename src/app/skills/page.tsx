
import Skillgrid from "@/components/Skillgrid";
import { Grid, Sheet, Stack, Typography } from "@mui/joy";
import Image from "next/image";


export default async function Skills() {
    return (
        <Stack display={'grid'}>
             <Typography
      fontSize={{ xs: 40, sm: 52, md: 64 }}
      marginTop={{xs:16,md:14}}
      marginBottom={11}
      fontFamily="Rampart One"
      justifySelf={'center'}
    >Skills</Typography>
    <Skillgrid/>
    </Stack>
    )
}