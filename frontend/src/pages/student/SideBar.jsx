import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Dropdown from "./dashboard/Dropdown"
import Pie from "../../assets/charts/piechart"
import Barchart from "../../assets/charts/barchart"
import Calendar from "../../assets/charts/calendar"
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import NoticeBoard from "../Admin/components/NoticeBoard"
import Grid from '../Admin/components/Grid'
import '../Admin/style/scrollBar.css'

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const heightGrid = "80px";
  const widthGrid = "250px";

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Generate random data for the pie chart
  const generateRandomData = () => {
    const data = [];
    for (let i = 0; i < 5; i++) {
      data.push({
        name: `Category ${i + 1}`,
        value: Math.floor(Math.random() * 100) + 1, // Random value between 1 and 100
      });
    }
    return data;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Student Profile
          </Typography>
          <div style={{ marginLeft: "auto", padding: "10px 5px 2px 5px", backgroundColor: "white", borderRadius: "5px", height: 63, width: 150 }}>
            <Dropdown />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main
        open={open}
        sx={{ justifyContent: "center", width: "100% !important" }}
      >
        <DrawerHeader />

        <div style={{ display: "flex", gap: "5px" }}>
          <Grid title={"Attended"} value={"0"} />
          <Grid title={"Total Classes"} value={"0"} />
          <Grid title={"Total Score"} value={"0"} />
          <Grid title={"Complain Raised"} value={"0"} />
        </div>

        <div
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "40px",
            padding: "0 51px 0 51px"
          }}>

          <div
            style={{
              width: "30%",
              // padding: "32px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>

            <div
              style={{
                fontSize: "1.5em",
                textAlign: "center",
                fontWeight: "bold"
              }}>
              Attendence Status
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: 'center',
              }}>
              <Pie style={{marginLeft: 12}} />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: "bold", color: "#4C8CF8" }}>Present :<span>0</span></div>
              <div style={{ fontWeight: "bold", color: "#1FE6D1" }}>Absent: <span>0</span></div>
            </div>
          </div>

          <div style={{ width: "70%", display: "flex", justifyContent: "left", alignItems: "center", marginLeft: "32px" }}>
            <Barchart />
          </div>
        </div>


        <div
          style={{
            display: "flex",
            gap: "5px",
            marginTop: "40px",
            justifyContent: "space-between",
            padding: "0 35px 0 35px"
          }}>

          <div
            className="notice-board"
            style={{
              width: "70%",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              fontSize: "1.5em",
              fontWeight: "bold",
              height: "20em",
              overflow: "scroll",
              overflowX: "hidden",
              marginLeft: "18px"

            }}>
            <div
              style={{
                width: "100%",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                position: 'sticky',
                top: 0,
                backdropFilter: "blur(10px)"
              }}>
              <span>Notice Board</span>
              <Button
                style={{ maxWidth: "35px", minWidth: "35px" }}
                color="primary"
                variant="contained"
              >
                <AddIcon />
              </Button>
            </div>
            <div >
              <NoticeBoard />
            </div>
          </div>

          <div
            style={{
              marginLeft: "50px",
              width: "30%",
              display: "flex",
              justifyContent: "center",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            }}>
              <Calendar />
          </div>
        </div>
      </Main>
    </Box>
  );
}
