import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React from "react";
import { BiCircle } from "react-icons/bi";

import { NavLink } from "react-router-dom";

const NestedRoutes = ({ handleDrawerClose, nestedNavOpen }) => {
  return (
    <div>
      {/* //nested  */}
      {nestedNavOpen && (
        <List
          sx={[
            {
              width: "100%",
              backgroundColor: "#fff",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "0px 0px 10px 10px",
              zIndex: 1,
              padding: "0px 0px 0px 0px",
              overflow: "hidden",
              transition: "all 0.3s ease-in-out",
              transform: "translateY(0px)",
              opacity: 1,
            },
          ]}
        >
          {[
            "Investment", //0
            "Suppliers", //1
            "New Payment", //2
            "Received Payment", //3
            "Payment Method", //4
          ].map((text, index) => (
            <ListItem
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: nestedNavOpen ? "initial" : "center",
                opacity: nestedNavOpen ? 1 : 0,
                fontWeight: "bold",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: nestedNavOpen ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {/* route setup  */}
                {/* active link */}
                {/* // select active style  */}
                <Tooltip
                  title="   
                    Investment
                "
                  arrow
                  placement="right-start"
                >
                  <NavLink
                    to="investment"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 0 && (
                      <BiCircle
                        style={{
                          fontSize: "1.5rem",
                        }}
                        // onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip
                  title="
                    Suppliers
                "
                  arrow
                  placement="right-start"
                >
                  <NavLink
                    to="suppliers"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 1 && (
                      <BiCircle
                        style={{
                          fontSize: "1.5rem",
                        }}
                        // onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip
                  title="
                    New Payment
                "
                  arrow
                  placement="right-start"
                >
                  <NavLink
                    to="newPayment"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 2 && (
                      <BiCircle
                        style={{
                          fontSize: "1.5rem",
                        }}
                        // onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip
                  title="
                    Received Payment
                "
                  arrow
                  placement="right-start"
                >
                  <NavLink
                    to="receivedPayment"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 3 && (
                      <BiCircle
                        style={{
                          fontSize: "1.5rem",
                        }}
                        // onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
                <Tooltip
                  title="
                    Payment Method
                    "
                  arrow
                  placement="right-start"
                >
                  <NavLink
                    to="paymentMethod"
                    style={({ isActive }) =>
                      isActive ? { color: "#ff0000" } : { color: "#000" }
                    }
                  >
                    {index === 4 && (
                      <BiCircle
                        style={{
                          fontSize: "1.5rem",
                        }}
                        // onClick={handleDrawerClose}
                      />
                    )}
                  </NavLink>
                </Tooltip>
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{
                  opacity: nestedNavOpen ? 1 : 0,
                }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default NestedRoutes;
