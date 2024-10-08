import type { Metadata } from "next";
import NavMenu from "@/components/NavMenu";
import NavBar from "@/components/NavBar";
import { Container } from "@mui/joy";
import "./index.css"

export const metadata: Metadata = {
  title: "Ayush Nigam",
  description: "personal web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <NavMenu/>
          <NavBar />
          <Container sx={{ width: { md: '-webkit-fill-available' }, paddingTop: {md: '64px' }, height:'-webkit-fill-available' }}>{children}</Container>
      </body>
    </html>
  );
}
