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
    title: "Customers",
    icon: <HiHome />,
    to: "/",
    nested: true,
    submenu: [
      {
        title: "Clients",
        to: "/clients",
        icon: <BiCircle />,
      },
      {
        title: "Settlements",
        to: "/settlements",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "SMS",
    icon: <MdDashboard />,
    to: "/sms",
    nested: true,
    submenu: [
      {
        title: "Single Send SMS",
        to: "/single_send_sms",
        icon: <BiCircle />,
      },
      {
        title: "Bulk Send SMS",
        to: "/bulk_send_sms",
        icon: <BiCircle />,
      },
      {
        title: "SMS Campaigns",
        to: "/sms_campaigns",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Flexiload",
    icon: <FaRegEnvelope />,
    to: "/flexiload",
    nested: true,
    submenu: [
      {
        title: "Flexiload New",
        to: "/flexiload_new",
        icon: <BiCircle />,
      },
      {
        title: "Pending Request",
        to: "/pending_request",
        icon: <BiCircle />,
      },
      {
        title: "Flexiload Inbox",
        to: "/flexiload_inbox",
        icon: <BiCircle />,
      },
      {
        title: "Flexiload Switch",
        to: "/flexiload_switch",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Flexiload Records",
    to: "/flexiload_records",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "Everything",
        to: "/everything",
        icon: <BiCircle />,
      },
      {
        title: "Successful Flexiload",
        to: "/successful_flexiload",
        icon: <BiCircle />,
      },
      {
        title: "Failed Flexiload",
        to: "/failed_flexiload",
        icon: <BiCircle />,
      },
      {
        title: "Flexiload Report",
        to: "/flexiload_report",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "OTP",
    icon: <MdDashboard />,
    to: "/otp",
    nested: true,
    submenu: [
      {
        title: "Otp All",
        to: "/otp_all",
        icon: <BiCircle />,
      },
      {
        title: "Successfull OTP",
        to: "/successfull_otp",
        icon: <BiCircle />,
      },
      {
        title: "Failed OTP",
        to: "/failed_otp",
        icon: <BiCircle />,
      },
      {
        title: "OTP Record",
        to: "/otp_record",
        icon: <BiCircle />,
      },
      {
        title: "OTP Switch",
        to: "/otp_switch",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Whatsapp",
    icon: <MdDashboard />,
    to: "/whatsapp",
    nested: true,
    submenu: [
      {
        title: "Whatsapp All",
        to: "/whatsapp_all",
        icon: <BiCircle />,
      },
      {
        title: "Successfull Whatsapp",
        to: "/successfull_whatsapp",
        icon: <BiCircle />,
      },
      {
        title: "Failed Whatsapp",
        to: "/failed_whatsapp",
        icon: <BiCircle />,
      },
      {
        title: "Whatsapp Report",
        to: "/whatsapp_report",
        icon: <BiCircle />,
      },
      {
        title: "Whatsapp Switch Report",
        to: "/whatsapp_switch_report",
        icon: <BiCircle />,
      },
      {
        title: "Whatsapp Switch",
        to: "/whatsapp_switch",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Gateways",
    to: "/gateways",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "HTTP API",
        to: "/http_api",
        icon: <BiCircle />,
      },
      {
        title: "SMPP",
        to: "/smpp",
        icon: <BiCircle />,
      },
      {
        title: "Ejoin",
        to: "/ejoin",
        icon: <BiCircle />,
      },
      {
        title: "APP",
        to: "/app",
        icon: <BiCircle />,
      },
      {
        title: "  APP GROUP",
        to: "/app_group",
        icon: <BiCircle />,
      },
      {
        title: "APP REG.SETTINGS",
        to: "/app_reg.settings",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Change SMS Content",
    icon: <RiAccountBoxLine />,
    to: "/change_sms_conent",
    nested: false,
  },
  {
    title: "Routing",
    icon: <RiAccountBoxLine />,
    to: "/routing",
    nested: false,
  },
  {
    title: "Rating",
    to: "/rating",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "SMS Rate",
        to: "/sms_rate",
        icon: <BiCircle />,
      },
      {
        title: "Flexible Rate",
        to: "/flexible_rate",
        icon: <BiCircle />,
      },
      {
        title: "Whatsapp Rate",
        to: "/whatsapp_rate",
        icon: <BiCircle />,
      },
      {
        title: "MCC-MNC DialCode Map",
        to: "/dialcode_map",
        icon: <BiCircle />,
      },
      {
        title: "Scheduled Rates",
        to: "/scheduled_rates",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "SMS Records",
    to: "/sms_records",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "Everything",
        to: "/everything",
        icon: <BiCircle />,
      },
      {
        title: "Successful Ones",
        to: "/successful_ones",
        icon: <BiCircle />,
      },
      {
        title: "Failed Ones",
        to: "/failed_ones",
        icon: <BiCircle />,
      },
      {
        title: "SMS Reports",
        to: "/sms_reports",
        icon: <BiCircle />,
      },
      {
        title: "Gateway Reports",
        to: "/gateway_reports",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Sim Manager",
    to: "/sim_manager",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "Operator",
        to: "/operator",
        icon: <BiCircle />,
      },
      {
        title: "SIM",
        to: "/sim",
        icon: <BiCircle />,
      },
      {
        title: "Balance",
        to: "/balance",
        icon: <BiCircle />,
      },
      {
        title: "Active SIM",
        to: "/active_sim",
        icon: <BiCircle />,
      },
      {
        title: "Module",
        to: "/module",
        icon: <BiCircle />,
      },
      {
        title: "Flexible Module",
        to: "/flexible_module",
        icon: <BiCircle />,
      },
      {
        title: "Recharge History",
        to: "/recharge_history",
        icon: <BiCircle />,
      },
      {
        title: "Recharge History ",
        to: "/recharge_history",
        icon: <BiCircle />,
      },
      {
        title: "Recharge Inbox",
        to: "/recharge_inbox",
        icon: <BiCircle />,
      },
      {
        title: "Reports",
        to: "/reports",
        icon: <BiCircle />,
      },
    ],
  },

  {
    title: "Contact",
    icon: <MdDashboard />,
    to: "/contact",
    nested: true,
    submenu: [
      {
        title: "New Contact",
        to: "/new_contact",
        icon: <BiCircle />,
      },
      {
        title: "Contact Group",
        to: "/contact_group",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Resellers",
    icon: <MdDashboard />,
    to: "/resellers",
    nested: true,
    submenu: [
      {
        title: "Resellers4",
        to: "/resellers4",
        icon: <BiCircle />,
      },
      {
        title: "resellers3",
        to: "/resellers3",
        icon: <BiCircle />,
      },
      {
        title: "resellers2",
        to: "/resellers2",
        icon: <BiCircle />,
      },
      {
        title: "resellers1",
        to: "/resellers1",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Reports",
    icon: <MdDashboard />,
    to: "/reports",
    nested: true,
    submenu: [
      {
        title: "Payments",
        to: "/payments",
        icon: <BiCircle />,
      },
      {
        title: "Activity Logs",
        to: "/activity_logs",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Developer",
    icon: <MdDashboard />,
    to: "/developer",
    nested: true,
    submenu: [
      {
        title: "API",
        to: "/api",
        icon: <BiCircle />,
      },
      {
        title: "Report",
        to: "/report",
        icon: <BiCircle />,
      },
    ],
  },

  {
    title: "Notifications",
    to: "/notifications",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "Profiles",
        to: "/profiles",
        icon: <BiCircle />,
      },
      {
        title: "settings",
        to: "/settings",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "Security",
    to: "/security",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "Banned Devices",
        to: "/banned_devices",
        icon: <BiCircle />,
      },
      {
        title: "Country List",
        to: "/country_list",
        icon: <BiCircle />,
      },
    ],
  },
  {
    title: "System",
    to: "/system",
    icon: <GoProject />,
    nested: true,
    submenu: [
      {
        title: "Settings",
        to: "/settings",
        icon: <BiCircle />,
      },
      {
        title: "Delete Records",
        to: "/delete_records",
        icon: <BiCircle />,
      },
      {
        title: "Backend DB",
        to: "/new_datapack",
        icon: <BiCircle />,
      },
      {
        title: "Reboot",
        to: "/reboot",
        icon: <BiCircle />,
      },
    ],
  },

  {
    title: "Users",
    icon: <HiSupport />,
    to: "/users",
    nested: false,
  },
  {
    title: "Device Manager",
    icon: <HiSupport />,
    to: "/device_manager",
    nested: false,
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
