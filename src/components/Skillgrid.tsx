"use client"
import { Grid } from "@mui/joy"
import { skills } from "@/skills";
import CustomSheet from "@/components/CustomSheet";
export default function Skillgrid(){
    return (
        <Grid container spacing={2}>
        {
            skills.map((skill,index)=>{
                return  <Grid key={index} xs={6} sm={4} md={3} sx={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                <CustomSheet url={skill.url} name={skill.name}/>
                </Grid>
            })
        }
    </Grid>
    )
}