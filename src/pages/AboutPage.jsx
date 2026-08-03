const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Sarah Smith",
      role: "CTO",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image:
        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div className="py-16 px-8 bg-base-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About DevTinder</h1>
          <p className="text-lg text-gray-600">
            Connecting developers worldwide to build amazing things together
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                DevTinder was born from a simple idea: great software is built
                by great teams. We believe that finding the right collaborator
                shouldn't be left to chance.
              </p>
              <p className="text-gray-600">
                Our platform uses smart matching algorithms to connect
                developers based on skills, interests, project goals, and
                working styles. Whether you're looking for a co-founder, a
                mentor, or a coding buddy, DevTinder helps you find your perfect
                match.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="stats stats-vertical shadow">
                <div className="stat">
                  <div className="stat-title">Active Developers</div>
                  <div className="stat-value text-primary">50K+</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Connections Made</div>
                  <div className="stat-value text-secondary">200K+</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Projects Started</div>
                  <div className="stat-value text-accent">15K+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-8 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={member.image} alt={member.name} />
                    </div>
                  </div>
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold mb-2">Community First</h3>
              <p className="text-gray-600 text-sm">
                Building a global community of developers who support each other
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="font-bold mb-2">Privacy & Trust</h3>
              <p className="text-gray-600 text-sm">
                Your data is yours. We never sell your information.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Constantly improving to help you connect better
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
