import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GoProject } from "react-icons/go";
import { GrSupport } from "react-icons/gr";
import { HiSupport, HiLockOpen } from "react-icons/hi";
import { RiAccountBoxLine } from "react-icons/ri";
import { FaRegEnvelope } from "react-icons/fa";
import { HiHome, HiOutlineDocumentReport } from "react-icons/hi";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { BiCircle } from "react-icons/bi";

const listItemNav = [
  {
    title: "Home",
    icon: <HiHome />,
    to: "/",
    nested: false,
  },
  {
    title: "Dashboard",
    icon: <MdDashboard />,
    to: "/adminDashboard",
    nested: false,
  },
  {
    title: "Inbox",
    icon: <FaRegEnvelope />,
    to: "/adminInbox",
    nested: false,
  },
  {
    title: "Project",
    icon: <GoProject />,
    to: "/adminProject",
    nested: false,
  },
  {
    title: "Rate",
    icon: <HiOutlineDocumentReport />,
    // to: "/adminRate",
    nested: true,
    submenu: [
      {
        title: "Project Rate",
        to: "/adminProjectRateDetails",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Investor",
    icon: <RiAccountBoxLine />,
    to: "/adminInvestor",
    nested: false,
  },
  {
    title: "Suppliers",
    icon: <HiSupport />,
    to: "/adminSuppliers",
    nested: false,
  },
  {
    title: "Support",
    icon: <HiSupport />,
    to: "/message",
    nested: false,
  },
  {
    title: "Accounts",
    icon: <HiLockOpen />,
    to: "/adminAccounts",
    nested: true,
    submenu: [
      {
        title: "Investment",
        to: "/Investment",
        icon: <BiCircle />,
      },
      {
        title: "Suppliers",
        to: "/suppliers",
        icon: <BiCircle />,
      },
      {
        title: "New Payment",
        to: "/newPayment",
        icon: <BiCircle />,
      },
      {
        title: "Received Payment",
        to: "/receivedPayment",
        icon: <BiCircle />,
      },
      {
        title: "Payment Method",
        to: "/paymentMethod",
        icon: <BiCircle />,
      },
    ],
  },
];

const MainRoutes = () => {
  const [subOpen, setSubOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  //handle subMenu open and close
  const handleSubMenu = () => {
    setSubOpen(!subOpen);
  };
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {listItemNav?.map((item, index) => {
          return (
            <>
              <ListItemButton
                key={index}
                component={!item.nested && NavLink}
                to={item?.nested ? null : `${item?.to}`}
                sx={{
                  backgroundColor:
                    item?.to === location?.pathname ? "#C7E5F5" : "#fff",
                  width: "100%",
                  borderLeft:
                    item?.to === location?.pathname && "5px solid #A3A0FB",
                }}
                onClick={() => {
                  handleSubMenu();
                  setTitle(item.title);
                }}
                activeClassName="active"
                exact
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                {item.nested ? (
                  item.title === title && subOpen ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>
              {item?.nested && (
                <Collapse
                  in={item?.title === title ? subOpen : false}
                  timeout="auto"
                  unmountOnExit
                >
                  <List
                    component="div"
                    disablePadding
                    sx={{
                      width: "100%",

                      bgcolor: "background.paper",
                    }}
                  >
                    {item?.submenu?.map((subItem, subIndex) => {
                      return (
                        <ListItemButton
                          key={subIndex}
                          button
                          component={NavLink}
                          to={subItem.to}
                          activeClassName="active"
                          sx={[
                            {
                              backgroundColor:
                                subItem.to === location.pathname
                                  ? "#C7E5F5"
                                  : "#fff",
                            },
                          ]}
                          exact
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.title} />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              )}
            </>
          );
        })}
      </List>
    </div>
  );
};

export default React.memo(MainRoutes);
