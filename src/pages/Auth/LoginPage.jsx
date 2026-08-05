import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/UserSlice";
import { BASE_URL } from "../../utils/constants";
import { showError, showSuccess } from "../../utils/toast";

const LoginPage = () => {
  // const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [viewPassword, setViewPassword] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        BASE_URL + "login",
        { emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(response?.data?.data));
      showSuccess("Login successful");
      navigate("/feed");
    } catch (err) {
      const message = err?.response?.data?.message || "Login failed";
      setError(message);
      showError(message);
      console.log(err);
    }
  };

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  return (
    <div className=" mt-8 flex justify-center items-center w-full h-full min-h-[calc(100vh-200px)]">
      <div className="card card-border bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl mb-4">Login</h2>

          <form>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email ID</span>
              </label>
              <input
                type="email"
                name="emailId"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={viewPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered w-full pr-24"
                  required
                />
                <button
                  type="button"
                  onClick={handleViewPassword}
                  className="btn btn-ghost btn-sm absolute right-1 top-1/2 -translate-y-1/2"
                >
                  {viewPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="text-right mb-2">
              <Link to="/forgot-password" className="link link-primary text-sm">
                Forgot Password?
              </Link>
            </div>
            <p className="text-red-500 text-center text-md pb-2">{error}</p>

            <div className="card-actions justify-center">
              <button
                type="submit"
                className="btn btn-primary w-full"
                onClick={handlelogin}
              >
                Login
              </button>
            </div>
          </form>

          <div className="divider">OR</div>

          <p className="text-center text-sm">
            New to platform?{" "}
            <Link to="/signup" className="link link-primary font-semibold">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
