import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { showError, showSuccess } from "../../utils/toast";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post(
        BASE_URL + "forgot-password",
        { emailId: email.trim() },
        { withCredentials: true },
      );

      if (res?.data?.success) {
        setEmailSent(true);
        setError("");
        setSuccess("Email sent successfully. You can now set a new password.");
        showSuccess("Reset email sent. Use the form below.");
      } else {
        throw new Error(res?.data?.message || "Failed to send reset email.");
      }
    } catch (err) {
      const message = err?.response?.data?.message || err.message || "Failed to send reset email.";
      setError(message);
      setSuccess("");
      showError(message);
      setEmailSent(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError("Please enter and confirm your new password.");
      setSuccess("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post(
        BASE_URL + "reset-password",
        { newPassword },
        { withCredentials: true },
      );

      if (res?.data?.success) {
        setError("");
        setSuccess("Password reset successful. You can now login.");
        showSuccess("Password reset successful.");
        setEmailSent(false);
        setNewPassword("");
        setConfirmPassword("");
      } else {
        throw new Error(res?.data?.message || "Failed to reset password.");
      }
    } catch (err) {
      const message = err?.response?.data?.message || err.message || "Failed to reset password.";
      setError(message);
      setSuccess("");
      showError(message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-10">
      <div className="card w-full max-w-xl bg-base-100 shadow-2xl">
        <div className="card-body">
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-base-content/70 mt-2">
              Enter your email to receive a reset link and create a new password.
            </p>
          </div>

          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email ID</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                className="input input-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Reset Link
            </button>
          </form>

          {error && <p className="text-error mt-3 text-sm">{error}</p>}
          {success && <div className="alert alert-success mt-4"><span>{success}</span></div>}

          {emailSent && (
            <div className="mt-6 space-y-4 rounded-box border border-base-300 p-4">
              <div className="alert alert-info">
                <span>Enter your new password within 15 minutes.</span>
              </div>

              <form onSubmit={handleResetSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">New Password</span>
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm New Password</span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    className="input input-bordered w-full"
                  />
                </div>

                <button type="submit" className="btn btn-secondary w-full">
                  Reset Password
                </button>
              </form>
            </div>
          )}

          <p className="text-center text-sm mt-4">
            Back to{" "}
            <Link to="/login" className="link link-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
