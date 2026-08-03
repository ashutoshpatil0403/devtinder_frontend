import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPageFormData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};

    if (!formData.firstName.trim()) nextErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) nextErrors.lastName = "Last name is required";
    if (!formData.emailId.trim()) nextErrors.emailId = "Email is required";
    if (!formData.password) nextErrors.password = "Password is required";
    if (!formData.confirmPassword) nextErrors.confirmPassword = "Please confirm your password";
    if (!formData.age) nextErrors.age = "Age is required";
    if (!formData.gender) nextErrors.gender = "Please select your gender";
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="input input-bordered w-full"
                />
                {errors.firstName && <p className="text-error text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="input input-bordered w-full"
                />
                {errors.lastName && <p className="text-error text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email ID</span>
                </label>
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                {errors.emailId && <p className="text-error text-sm mt-1">{errors.emailId}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="number"
                  name="age"
                  min="16"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter age"
                  className="input input-bordered w-full"
                />
                {errors.age && <p className="text-error text-sm mt-1">{errors.age}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                />
                {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className="input input-bordered w-full"
                />
                {errors.confirmPassword && <p className="text-error text-sm mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-error text-sm mt-1">{errors.gender}</p>}
            </div>

            {submitted && (
              <div className="alert alert-success">
                <span>Looks good! The UI is ready for your API integration.</span>
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

export default SignupPageFormData;  