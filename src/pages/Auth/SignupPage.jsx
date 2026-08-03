import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { showError, showSuccess } from "../../utils/toast";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      setError("First name is required");
      setSuccess("");
      return;
    }
    if (!lastName.trim()) {
      setError("Last name is required");
      setSuccess("");
      return;
    }
    if (!emailId.trim()) {
      setError("Email is required");
      setSuccess("");
      return;
    }
    if (!password) {
      setError("Password is required");
      setSuccess("");
      return;
    }
    if (!confirmPassword) {
      setError("Please confirm your password");
      setSuccess("");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
      return;
    }
    if (!age) {
      setError("Age is required");
      setSuccess("");
      return;
    }
    if (!gender) {
      setError("Please select your gender");
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post(
        BASE_URL + "signup",
        {
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          emailId: emailId.trim(),
          password,
          age,
          gender,
        },
        { withCredentials: true },
      );

      if (res?.data?.success) {
        setError("");
        setSuccess("Account created successfully. Please login.");
        showSuccess("Signup successful.");
        setFirstName("");
        setLastName("");
        setEmailId("");
        setPassword("");
        setConfirmPassword("");
        setAge("");
        setGender("");
      } else {
        throw new Error(res?.data?.message || "Signup failed.");
      }
    } catch (err) {
      const message = err?.response?.data?.message || err.message || "Signup failed.";
      setError(message);
      setSuccess("");
      showError(message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-2xl bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-base-content/70 mt-2">
              Join DevTinder and start connecting with developers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter first name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter last name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email ID</span>
                </label>
                <input
                  type="email"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  min="16"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter age"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  className="input input-bordered w-full"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {error && <p className="text-error text-sm">{error}</p>}
            {success && (
              <div className="alert alert-success">
                <span>{success}</span>
              </div>
            )}

            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm mt-2">
            Already have an account?{" "}
            <Link to="/login" className="link link-primary font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;  