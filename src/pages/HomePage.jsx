import { Link } from "react-router-dom";
import {
  FaCode,
  FaUsers,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100">
      {/* Hero Section - Developer Focused */}
      <div className="hero min-h-[90vh] bg-gradient-to-r from-primary/10 via-base-200 to-secondary/10">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 max-w-6xl">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur-2xl opacity-30"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              className="relative max-w-sm rounded-lg shadow-2xl border-4 border-base-100"
              alt="Developers collaborating"
            />
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-content p-3 rounded-full shadow-xl">
              <FaCode className="text-2xl" />
            </div>
          </div>

          <div className="flex-1">
            <div className="badge badge-primary badge-lg mb-4">
              🔥 Developer Matching Platform
            </div>
            <h1 className="text-6xl font-bold leading-tight">
              Find Your
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Perfect Dev
              </span>{" "}
              Partner
            </h1>
            <p className="py-6 text-lg text-base-content/80 max-w-lg">
              DevTinder uses AI-powered matching to connect developers based on
              <span className="font-semibold text-primary"> skills</span>,
              <span className="font-semibold text-secondary"> interests</span>,
              and
              <span className="font-semibold text-accent"> project goals</span>.
              Stop working alone, start building together.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link to="/signup" className="btn btn-primary btn-lg gap-2">
                <FaUsers /> Start Matching
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                How it Works
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 mt-8 text-sm text-base-content/60">
              <span className="flex items-center gap-2">
                <span className="text-primary font-bold">2.5K+</span> Developers
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary font-bold">850+</span> Projects
              </span>
              <span className="flex items-center gap-2">
                <span className="text-primary font-bold">4.9⭐</span> Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Developer Themed */}
      <div className="py-20 px-8 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Why Developers Love DevTinder
            </h2>
            <p className="text-base-content/60 mt-4">
              Built by developers, for developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card bg-base-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
              >
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="card-title text-xl">{feature.title}</h3>
                  <p className="text-base-content/70">{feature.description}</p>
                  <div className="badge badge-outline badge-sm mt-2">
                    {feature.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-8 bg-gradient-to-b from-base-200 to-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            How DevTinder Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[40%] h-0.5 bg-primary/30"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-base-content/60 mt-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Stats */}
      <div className="py-16 px-8 bg-base-300">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-base-content/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section - Developer Focused */}
      <div className="py-24 px-8 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="text-center max-w-3xl mx-auto">
          <FaCode className="text-6xl mx-auto mb-6 opacity-80" />
          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join the developer community and find your next collaborator today.
            It's free, fast, and built for developers like you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup" className="btn btn-secondary btn-lg px-8 gap-2">
              Get Started Free
            </Link>
            <Link
              to="/demo"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              See Demo
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-12">
            <a
              href="#"
              className="btn btn-ghost btn-sm text-primary-content/80 hover:text-white"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="#"
              className="btn btn-ghost btn-sm text-primary-content/80 hover:text-white"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="btn btn-ghost btn-sm text-primary-content/80 hover:text-white"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data arrays
const features = [
  {
    icon: "🎯",
    title: "Smart Matching",
    description:
      "Our AI algorithm connects you with developers who share your technical stack and project interests.",
    tag: "AI Powered",
  },
  {
    icon: "🔧",
    title: "Skill Verification",
    description:
      "Showcase your GitHub projects, tech stack, and contributions to attract the right collaborators.",
    tag: "Authentic",
  },
  {
    icon: "🤝",
    title: "Project Collaboration",
    description:
      "From hackathons to full-scale applications, find partners who complement your skills.",
    tag: "Team Up",
  },
];

const steps = [
  {
    title: "Create Profile",
    description: "Add your skills, projects, and what you're looking for",
  },
  {
    title: "Get Matched",
    description: "Our algorithm finds developers with complementary skills",
  },
  {
    title: "Connect & Chat",
    description: "Start conversations and share ideas with your matches",
  },
  {
    title: "Build Together",
    description: "Collaborate on projects and create amazing things",
  },
];

const stats = [
  { number: "2,500+", label: "Active Developers" },
  { number: "850+", label: "Projects Launched" },
  { number: "95%", label: "Match Satisfaction" },
  { number: "40+", label: "Countries" },
];

export default HomePage;
