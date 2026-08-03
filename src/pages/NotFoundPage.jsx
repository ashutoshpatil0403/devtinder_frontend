import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <p className="text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
