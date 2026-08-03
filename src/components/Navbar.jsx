import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../redux/slices/UserSlice";
import { BASE_URL } from "../utils/constants";
import { showError, showSuccess } from "../utils/toast";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const isLoggedIn = !!user;

  const handleLogout = async () => {
    try {
      const userLogout = await axios.post(
        BASE_URL + "logout",
        {},
        {
          withCredentials: true,
        },
      );

      dispatch(removeUser());

      if (userLogout) {
        showSuccess("Logged out successfully");
        navigate("/login");
      }
    } catch (error) {
      showError("Failed to logout");
      console.log(error);
    }
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>

      {isLoggedIn && (
        <>
          <li>
            <Link to="/feed">Feed</Link>
          </li>

          <li>
            <Link to="/connections">Connections</Link>
          </li>

          <li>
            <Link to="/requests">Requests</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-5">
      {/* Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            {navLinks}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl font-bold">
          👨‍💻 DevTinder
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-4">
        {isLoggedIn ? (
          <>
            <div className="hidden md:flex items-center gap-1 text-sm">
              <span className="text-gray-500">Welcome 👋</span>
              <span className="font-semibold text-base-content">
                {user?.firstName}
              </span>
            </div>

            {/* Avatar */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="User Avatar" />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-1"
              >
                <li>
                  <Link to="/profile">
                    Profile
                    <span className="badge badge-primary">New</span>
                  </Link>
                </li>

                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost">
              Login
            </Link>

            <Link to="/signup" className="btn btn-primary">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
