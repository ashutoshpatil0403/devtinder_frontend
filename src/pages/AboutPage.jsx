import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Full-stack developer with 10+ years of experience. Previously built dev tools at Google.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "AI/ML specialist and open-source contributor. Passionate about developer productivity.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack architect and DevOps enthusiast. Built scalable systems for 5+ startups.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Priya Patel",
      role: "Product Designer",
      bio: "UX/UI designer with a focus on developer tools. Believes in design-driven development.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      github: "https://github.com",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Founded",
      description: "DevTinder was born from a hackathon project",
    },
    {
      year: "2024",
      title: "Launch",
      description: "Public beta released with 500+ developers",
    },
    {
      year: "2024",
      title: "Growth",
      description: "Reached 10K users across 50+ countries",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section - Developer Focused */}
      <div className="hero min-h-[60vh] bg-gradient-to-r from-primary/20 via-base-200 to-secondary/20">
        <div className="hero-content text-center max-w-4xl">
          <div>
            <div className="badge badge-primary badge-lg mb-4">
              About DevTinder
            </div>
            <h1 className="text-5xl md:text-6xl font-bold">
              Building the Future of
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Developer Collaboration
              </span>
            </h1>
            <p className="py-6 text-lg text-base-content/70 max-w-2xl mx-auto">
              We're on a mission to connect every developer with their perfect
              collaborator, creating a global community where amazing software
              gets built together.
            </p>
            <Link to="/signup" className="btn btn-primary gap-2">
              <FaUsers /> Join the Community
            </Link>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-8 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-base-content/70">
                <p>
                  DevTinder started as a simple idea during a hackathon:
                  <span className="font-semibold text-primary">
                    {" "}
                    what if finding developers to work with was as easy as
                    finding a date?
                  </span>
                </p>
                <p>
                  We realized that talented developers were struggling to find
                  people with complementary skills. Solo projects were taking
                  too long, and great ideas were dying because no one had the
                  right team.
                </p>
                <p>
                  That's why we built DevTinder - a platform that uses
                  <span className="font-semibold text-secondary">
                    {" "}
                    AI-powered matching
                  </span>{" "}
                  to connect developers based on technical skills, project
                  interests, and working styles.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="badge badge-outline badge-lg">
                    AI Matching
                  </div>
                  <div className="badge badge-outline badge-lg">
                    Skill-Based
                  </div>
                  <div className="badge badge-outline badge-lg">
                    Global Community
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative stats stats-vertical shadow-2xl bg-base-200 p-6 rounded-2xl">
                <div className="stat border-b border-base-300 pb-4">
                  <div className="stat-title text-primary">
                    Active Developers
                  </div>
                  <div className="stat-value">50K+</div>
                  <div className="stat-desc">From 50+ countries</div>
                </div>
                <div className="stat border-b border-base-300 pb-4">
                  <div className="stat-title text-secondary">
                    Connections Made
                  </div>
                  <div className="stat-value">200K+</div>
                  <div className="stat-desc">And counting</div>
                </div>
                <div className="stat">
                  <div className="stat-title text-accent">Projects Started</div>
                  <div className="stat-value">15K+</div>
                  <div className="stat-desc">Successfully launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 px-8 bg-base-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="flex flex-col items-center">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="relative pl-16 pb-12 border-l-2 border-primary last:border-0"
              >
                <div className="absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-base-200"></div>
                <div className="badge badge-primary badge-lg">
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                <p className="text-base-content/70">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section - Developer Themed */}
      <div className="py-20 px-8 bg-base-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-center text-base-content/60 mb-12">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl">
                  <FaUsers className="text-primary" />
                </div>
                <h3 className="card-title">Community First</h3>
                <p className="text-sm text-base-content/70">
                  Building a global community of developers who support and
                  learn from each other
                </p>
              </div>
            </div>
            <div className="card bg-base-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-3xl">
                  <FaShieldAlt className="text-secondary" />
                </div>
                <h3 className="card-title">Privacy & Trust</h3>
                <p className="text-sm text-base-content/70">
                  Your data belongs to you. We're transparent about how we use
                  it
                </p>
              </div>
            </div>
            <div className="card bg-base-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-3xl">
                  <FaLightbulb className="text-accent" />
                </div>
                <h3 className="card-title">Innovation</h3>
                <p className="text-sm text-base-content/70">
                  Constantly improving and experimenting to help you connect
                  better
                </p>
              </div>
            </div>
            <div className="card bg-base-200 hover:shadow-xl transition-all hover:-translate-y-2">
              <div className="card-body items-center text-center">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center text-3xl">
                  <FaCode className="text-success" />
                </div>
                <h3 className="card-title">Quality</h3>
                <p className="text-sm text-base-content/70">
                  We believe in building great software that developers love to
                  use
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-8 bg-base-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-base-content/60 mb-12">
            The passionate people behind DevTinder
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <figure className="px-4 pt-4">
                  <div className="avatar">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-lg">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold">
                    {member.role}
                  </p>
                  <p className="text-sm text-base-content/70 mt-2">
                    {member.bio}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <a
                      href={member.github}
                      className="btn btn-ghost btn-sm btn-square"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                    <a
                      href={member.twitter}
                      className="btn btn-ghost btn-sm btn-square"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="btn btn-ghost btn-sm btn-square"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-8 bg-gradient-to-r from-primary to-secondary text-primary-content">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Developer Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of something bigger. Connect with developers who share your
            passion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup" className="btn btn-secondary btn-lg gap-2">
              <FaRocket /> Start Building
            </Link>
            <Link
              to="/"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Explore DevTinder
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
