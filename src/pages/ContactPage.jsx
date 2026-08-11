import axios from "axios";
import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { BASE_URL } from "../utils/constants";
import { showError, showSuccess } from "../utils/toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    mobileNo: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // ✅ FIX 2: Fixed API endpoint URL (was "contct-us" missing "a")
      // ✅ FIX 3: Send formData directly, not { formData }
      const res = await axios.post(
        `${BASE_URL}contact-us`, // Make sure BASE_URL ends with / or use template literal
        formData, // Send formData directly, not wrapped in object
        { withCredentials: true },
      );

      console.log("Response:", res.data);

      // ✅ FIX 4: Check res.data.success (not res.success)
      if (res.data.success === true) {
        showSuccess(res.data.message || "Request Submitted Successfully");
        // Reset form on success
        setFormData({
          fullName: "",
          emailId: "",
          mobileNo: "",
          message: "",
        });
      } else {
        showError(res.data.message || "Something Went Wrong...🙆‍♂️");
      }
    } catch (error) {
      console.error("Error:", error);

      // ✅ FIX 5: Handle error responses properly
      if (error.response) {
        // Server responded with error status
        const errorMessage =
          error.response.data?.message || "Server error occurred";
        showError(errorMessage);
        console.log("Error response:", error.response.data);
      } else if (error.request) {
        // Request was made but no response
        showError("No response from server. Please check your connection.");
      } else {
        // Something else happened
        showError(error.message || "Something went wrong");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-base-content/70 mt-4 text-lg">
            We'd love to hear from you. Send us your questions, feedback or
            suggestions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card bg-base-100 shadow-2xl border border-base-300">
              <div className="card-body p-8">
                <h2 className="card-title text-3xl mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          Full Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          Email Address
                        </span>
                      </label>
                      <input
                        type="email"
                        name="emailId"
                        value={formData.emailId}
                        onChange={(e) =>
                          setFormData({ ...formData, emailId: e.target.value })
                        }
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">
                        Mobile Number
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={(e) =>
                        setFormData({ ...formData, mobileNo: e.target.value })
                      }
                      placeholder="Enter your mobile number"
                      className="input input-bordered w-full"
                      required // ✅ Added required
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-semibold">Message</span>
                    </label>
                    <textarea
                      name="message"
                      rows="7"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="textarea textarea-bordered w-full"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit" // ✅ Changed from onClick to type="submit"
                    className="btn btn-primary w-full btn-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Section - Same as before */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Details */}
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">
                  Contact Information
                </h2>
                <div className="space-y-5">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center text-xl">
                      <FaEnvelope />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-base-content/70">
                        support@devtinder.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary text-secondary-content flex items-center justify-center text-xl">
                      <FaPhone />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-base-content/70">+91 72490 24068</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-content flex items-center justify-center text-xl">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-base-content/70">
                        Bengaluru, Karnataka, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card bg-base-100 shadow-xl border border-base-300">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Office Hours</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-error font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
              <div className="card-body text-center">
                <h2 className="text-2xl font-bold">Stay Connected</h2>
                <p>Follow us on social media for updates and announcements.</p>
                <div className="flex justify-center gap-4 mt-4">
                  <button className="btn btn-circle btn-outline btn-sm">
                    <FaTwitter />
                  </button>
                  <button className="btn btn-circle btn-outline btn-sm">
                    <FaLinkedin />
                  </button>
                  <button className="btn btn-circle btn-outline btn-sm">
                    <FaInstagram />
                  </button>
                  <button className="btn btn-circle btn-outline btn-sm">
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="card bg-success text-success-content shadow-xl">
              <div className="card-body">
                <h2 className="font-bold text-xl">Need Immediate Help?</h2>
                <p>Our support team usually replies within 24 hours.</p>
                <button className="btn btn-neutral mt-3">
                  Visit Help Center
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
