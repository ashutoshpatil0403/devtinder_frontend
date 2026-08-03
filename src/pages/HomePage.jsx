import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Developer connecting"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Find Your Perfect <span className="text-primary">Dev Match</span>
            </h1>
            <p className="py-6 text-lg">
              DevTinder connects developers based on skills, interests, and
              project ideas. Swipe right on collaboration, swipe left on
              compatibility issues. Build amazing things together!
            </p>
            <div className="flex gap-4">
              <Link to="/signup" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-8 bg-base-100">
        <h2 className="text-3xl font-bold text-center mb-12">Why DevTinder?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="card-title">Connect</h3>
              <p>Find developers who share your passion and vision</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="card-title">Collaborate</h3>
              <p>
                Work together on exciting projects and learn from each other
              </p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body items-center text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="card-title">Create</h3>
              <p>Build amazing products with your new dev connections</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-8 bg-primary text-primary-content">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Connect?</h2>
          <p className="mb-8">
            Join thousands of developers already finding their perfect match
          </p>
          <Link to="/signup" className="btn btn-secondary btn-lg">
            Start Swiping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
