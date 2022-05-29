import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { GrSupport } from "react-icons/gr";
import { HiSupport, HiLockOpen } from "react-icons/hi";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { HiHome, HiOutlineDocumentReport } from "react-icons/hi";
const MainRoutes = ({
  handleDrawerClose,
  open,
  handleOpenNestedNav,
  handleDrawerOpen,
  setOpen,
}) => {
  return (
    <div>
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
                  to="AdminDashboard"
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
                  to=""
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
                  to="message"
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

              {index === 8 && (
                <Tooltip title="Accounts" arrow placement="right-start">
                  <HiLockOpen
                    style={{
                      fontSize: "1.5rem",
                      color: "#000",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      // handleDrawerClose();
                      handleOpenNestedNav();
                      setOpen(!open);
                      // handleCloseNestedNav();
                    }}
                  />
                </Tooltip>
              )}
            </ListItemIcon>

            <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MainRoutes;
