import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import axios from "axios";
// import { BASE_URL } from "./utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "./redux/slices/UserSlice";
import { useCallback, useEffect } from "react";
import Footer from "./components/Footer";
import { showError } from "./utils/toast";
import { BASE_URL } from "./utils/constants";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const fetchUserData = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL + "profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      if (err?.response?.status === 401) {
        showError("Session expired. Please login again.");
        navigate("/login");
      } else {
        showError("Unable to load your profile right now.");
      }
      console.log(err);
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    const publicRoutes = [
      "/",
      "/about",
      "/contact",
      "/login",
      "/signup",
      "/forgot-password",
    ];

    if (publicRoutes.includes(location.pathname)) return;
    fetchUserData();
  }, [fetchUserData, location.pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
