import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { GiBatteryPackAlt } from "react-icons/gi";
import { GrSupport } from "react-icons/gr";
import { HiSupport, HiLockOpen } from "react-icons/hi";
import { RiAccountBoxLine } from "react-icons/ri";
import { BiLogOutCircle } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { HiHome, HiOutlineDocumentReport } from "react-icons/hi";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
import { Avatar, Chip, ListItem, Menu, Tooltip } from "@mui/material";
//start
// import Badge from "@mui/material/Badge";

import LiveClock from "../LiveClock/LiveClock";
import useAuth from "./../../../Hooks/useAuth";
//end
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});


const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [battery, setBattery] = React.useState(0);
  //show battery level
  navigator.getBattery().then(function (battery) {
    // console.log(battery);
    setBattery(parseInt(battery.level * 100));
  });

  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //get user information from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // get data or object from context auth provider
  const { pageRefresh, setPageRefresh } = useAuth();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          backgroundColor: "white",
          borderBottom: "1px solid #e8e8e8",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
              color: "text.primary",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#1BB096",
              fontWeight: "bold",
              fontSize: "1.5rem",
              // fontFamily: "heading",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            Admin
          </Typography>
          {/* <Box sx={{ flexGrow: 1 }} /> */}

          {/* <TextField
            type="search"
            label="Search..."
            variant="outlined"
            size="small"
            color="warning"
            sx={{
              ml: {
                xs: "0",
                md: 5,
              },
              display: { xs: "none", sm: "block" },
              mr: 2,
              // width: "40%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          /> */}
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ flexGrow: 1 }} />

          {/* show battery lavel  */}
          <Box
            sx={[
              {
                color: "#000",
                fontWeight: "bold",
                mx: 2,
                "@media screen and (max-width: 768px)": {
                  display: "none",
                },
              },
            ]}
          >
            <GiBatteryPackAlt
              style={{
                fontSize: "1.2rem",
                marginTop: "0.2rem",
              }}
            />
            {battery}%
          </Box>

          {/* show live clock  */}
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
              },
            }}
          >
            <LiveClock />
          </Box>

          {/* profile click information  */}
          <Box>
            <Tooltip title={user?.c_info} arrow placement="right-start">
              <Button id="demo-positioned-button">
                <Chip
                  avatar={<Avatar alt="Natacha" src={user?.userpic} />}
                  label={user?.uname}
                  variant="outlined"
                />
              </Button>
            </Tooltip>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}></Box>
        </Toolbar>
      </AppBar>
      {/* end  */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerClose}
            style={{
              color: "#000",
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Home", //0
            "Dashboard", //1
            "Inbox", //2
            "Project", //3
            "Rate", //4
            "Investor", //5
            "Suppliers", //6
            "Support", //7
            "Accounts", //8
          ].map((text, index) => (
            <ListItem
              Button
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                fontWeight: "bold",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* route setup  */}
                {/* active link */}
                {/* // select active style  */}
                <Tooltip title="Home" arrow placement="right-start">
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 0 && (
                      <HiHome
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Dashboard" arrow placement="right-start">
                  <NavLink
                    to="investorDashboard"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 1 && (
                      <MdDashboard
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Inbox" arrow placement="right-start">
                  <NavLink
                    to="gantt"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 2 && (
                      <FaRegEnvelope
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Project" arrow placement="right-start">
                  <NavLink
                    to="investorProjects"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 3 && (
                      <GoProject
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={() => {
                          handleDrawerClose();
                        }}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Rate" arrow placement="right-start">
                  <NavLink
                    to="timesheet"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 4 && (
                      <HiOutlineDocumentReport
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Investor" arrow placement="right-start">
                  <NavLink
                    to="timesheet"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 5 && (
                      <RiAccountBoxLine
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Suppliers" arrow placement="right-start">
                  <NavLink
                    to="message"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 6 && (
                      <GrSupport
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Support" arrow placement="right-start">
                  <NavLink
                    to="settings"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 7 && (
                      <HiSupport
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip title="Accounts" arrow placement="right-start">
                  <NavLink
                    to="settings"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 8 && (
                      <HiLockOpen
                        style={{
                          fontSize: "1.5rem",
                        }}
                        onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
              </ListItemIcon>

              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["LogOut"].map((text, index) => (
            <ListItem
              button
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 && (
                  <Tooltip title="LogOut" arrow placement="right-start">
                    <span
                      style={{
                        fontSize: "1.8rem",
                      }}
                    >
                      <BiLogOutCircle
                        color="#000"
                        onClick={() => {
                          localStorage.removeItem("user");
                          localStorage.removeItem("ip");
                          localStorage.removeItem("uniqId");
                          localStorage.removeItem("temp");
                          setPageRefresh(!pageRefresh);
                          // window.location.reload();
                          navigate("/login");
                        }}
                      />
                    </span>
                  </Tooltip>
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 2,
          pb: 0,
        }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

export default React.memo(Home);
