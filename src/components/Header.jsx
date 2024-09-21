import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  CssBaseline,
  Typography,
  Box,
  Toolbar,
} from "@mui/material";
import { Link } from "react-scroll";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import { ReactTyped as Typed } from "react-typed";

const drawerWidth = 300; // Sidebar width in pixels

const Header = () => {
  const menuItems = [
    { text: "Home", icon: <HomeIcon />, to: "home" },
    { text: "About", icon: <InfoIcon />, to: "about" },
    { text: "Skills", icon: <BuildIcon />, to: "skills" },
    { text: "Projects", icon: <WorkIcon />, to: "projects" },
    { text: "Experience", icon: <WorkIcon />, to: "experience" },
    { text: "Education", icon: <SchoolIcon />, to: "education" },
    { text: "Contact", icon: <ContactMailIcon />, to: "contact" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="persistent"
        anchor="left"
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#393E46", // Change background color to make it more attractive
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{ padding: "16px", backgroundColor: "#393E46", color: "white" }}
        >
          {" "}
          {/* Styling for Name Header */}
          <Typography variant="h6" noWrap>
            <Typed
              strings={["Peeyush Deshpande"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Typography>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={item.text}
              component={Link}
              to={item.to}
              spy={true}
              smooth={true}
              duration={500}
              style={{ padding: "16px", color: "primary" }}
            >
              <span style={{ color: "#00ADB5" }}>
                <div style={{display :'flex', flexDirection :'row', justifyContent:'space-around'}}>{item.icon}<ListItemText
                  primary={item.text} style={{marginLeft : '16px'}}
                /></div>
              </span>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content area */}
      <main
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center", // Centers the content horizontally
          alignItems: "center", // Centers the content vertically
          padding: "24px",

          minHeight: "100vh", // Ensures the content is centered even if the page height is smaller
        }}
      >
        <div
          style={{
            maxWidth: "800px", // Adjust the max-width to fit content
            width: "100%",
            textAlign: "center", // Centers text content inside the component
          }}
        >
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Header;
