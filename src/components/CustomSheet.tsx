import { Box, Sheet, Typography } from "@mui/joy";
import Image from "next/image";

interface SheetProps {
  url: string;  // corrected types
  name: string;
}

function CustomSheet({ url, name }: SheetProps) {
  return (
    <Sheet
      variant="outlined"
      sx={{
        width: { xs: 100, sm: 140 },
        height: { xs: 90, sm: 120 },
        borderRadius: "lg",
        border: "1px solid",
        borderColor: "#d1d1d5",
        backgroundColor: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0px 8px 30px rgba(118, 85, 225, 0.15)",
          borderColor: "transparent",
          "& .hover-text": {
            opacity: 1,
            visibility: "visible",
            transform: "translateY(0)",
          },
        },
      }}
    >
      <Box
        sx={{
          width: { xs: 40, sm: 60 },
          height: { xs: 40, sm: 60 },
          position: "relative",
        }}
      >
        <Image src={url} alt={name} layout="fill" objectFit="contain" />
      </Box>

      <Typography
        className="hover-text"
        sx={{
          position: "absolute",
          bottom: 8,
          textAlign: 'center',
          justifySelf:'center',
          transform: "translateX(-50%) translateY(10px)",
          opacity: 0,
          visibility: "hidden",
          transition: "all 0.3s ease-in-out",
          fontSize: "11px",
          fontWeight: 500,
          fontFamily: "Montserrat",
          color: "text.primary",
          letterSpacing: 1,
        }}
      >
        {name.toUpperCase()}
      </Typography>
    </Sheet>
  );
}

export default CustomSheet;
