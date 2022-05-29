import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Register from "./../Authentication/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute.js";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";

const Login = React.lazy(() => import("./../Authentication/Login/Login"));
const Error = React.lazy(() => import("../Error/Error"));
const Home = React.lazy(() => import("./../Home/Home/Home.js"));
const Message = React.lazy(() => import("./../Home/Message/Message.js"));
const InvestorHome = React.lazy(() =>
  import("../Home/AdminHome/AdminHome.js")
);
const InvestorDashboard = React.lazy(() =>
  import("../Home/AdminDashboard/AdminDashboard.js")
);

const Routing = () => {
  //scroll to top window size
  useEffect(() => {
    const topButton = document.getElementById("topButton");
    window.onscroll = function () {
      if (window.pageYOffset > 100) {
        topButton.style.display = "block";
        topButton.style.position = "fixed";
        topButton.style.right = 0;
        topButton.style.bottom = 0;
        topButton.style.zIndex = "1000";
      } else {
        topButton.style.display = "none";
      }
    };
    topButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    });
  }, []);
  return (
    <>
      <Box
        sx={[
          {
            height:
              window.innerHeight >= 500
              && "calc(100vh - 54px)",
                // : "calc(100vh - 50px)",
            "@media screen and (max-width: 768px)": {
              height: "calc(100vh - 50px)",
            },
          },
        ]}
      >
        <Routes>
          <Route path="*" element={<Error />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<InvestorHome />} />
            <Route path="/investorDashboard" element={<InvestorDashboard />} />
            <Route path="/message" element={<Message />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <div>
          <button
            id="topButton"
            // className="btn m-2 fs-2 bg-white"
            style={{
              display: "none",
              color: "#1BB096",
              zIndex: "999",
              margin: "2rem",
              backgroundColor: "#fff",
              fontSize: "1.5rem",
            }}
          >
            <BsFillArrowUpCircleFill />
          </button>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Routing;
