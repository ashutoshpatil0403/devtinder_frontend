import { FaTools, FaCode, FaRocket } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 relative">
      {/* Blurred Background Content */}
      <div className="opacity-40 pointer-events-none select-none">
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
                  <h2 className="card-title text-3xl mb-6">
                    Send us a Message
                  </h2>
                  <form className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="label">
                          <span className="label-text font-semibold">
                            Full Name
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="input input-bordered w-full"
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
                          placeholder="Enter your email"
                          className="input input-bordered w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          Subject
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter subject"
                        className="input input-bordered w-full"
                      />
                    </div>
                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">
                          Message
                        </span>
                      </label>
                      <textarea
                        rows="7"
                        className="textarea textarea-bordered w-full"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                    <button className="btn btn-primary w-full btn-lg">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Section */}
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
                        📧
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
                        📞
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-base-content/70">+91 72490 24068</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-12 h-12 rounded-full bg-accent text-accent-content flex items-center justify-center text-xl">
                        📍
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
                  <p>
                    Follow us on social media for updates and announcements.
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <button className="btn btn-circle btn-outline">🌐</button>
                    <button className="btn btn-circle btn-outline">💼</button>
                    <button className="btn btn-circle btn-outline">📸</button>
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

      {/* Overlay - Work in Progress */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-base-100/95 backdrop-blur-sm rounded-2xl shadow-2xl p-12 max-w-2xl mx-4 border-2 border-primary/30">
          {/* Animated Gear Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
              <div className="relative bg-primary text-primary-content p-6 rounded-full shadow-xl animate-spin-slow">
                <FaTools className="text-5xl" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            🚧 Work in Progress
          </h2>

          <p className="text-lg text-center text-base-content/70 mb-6">
            Our contact page is currently under construction. We're building
            something amazing for you!
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-base-content/60">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span>Development in progress</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse delay-75"></span>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-2">
              <div className="badge badge-primary badge-lg gap-2">
                <FaCode /> Backend API
              </div>
              <div className="badge badge-secondary badge-lg gap-2">
                <FaRocket /> Coming Soon
              </div>
              <div className="badge badge-accent badge-lg">
                Estimated: Q1 2025
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full max-w-md mt-4">
              <div className="flex justify-between text-xs text-base-content/50 mb-1">
                <span>Progress</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-base-300 rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-primary to-secondary h-2.5 rounded-full animate-pulse"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            <p className="text-sm text-base-content/50 mt-4">
              ⏳ Meanwhile, feel free to explore other sections of DevTinder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
