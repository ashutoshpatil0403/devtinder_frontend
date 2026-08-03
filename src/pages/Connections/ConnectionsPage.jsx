import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../../redux/slices/ConnectionSlice";
// import toast from "react-hot-toast";

const ConnectionsPage = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection ?? []);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "user/connections", {
        withCredentials: true,
      });

      dispatch(
        addConnections(Array.isArray(res?.data?.data) ? res.data.data : []),
      );
    } catch (err) {
      console.error(err);
      dispatch(addConnections([]));
    }
  };

  useEffect(() => {
    fetchConnections();
  }, [dispatch]);

  if (!connections.length) {
    return <></>;
  }
  // if (connections.length > 0) {
  //   toast.success(`You have ${connections.length} connections!`);
  // }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">My Connections</h1>

      <div className="space-y-6">
        {connections.map((connection) => (
          <div
            key={connection._id}
            className="card bg-base-100 shadow-lg border border-base-300"
          >
            <div className="card-body">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="avatar">
                  <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={connection.photoURL} alt={connection.firstName} />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">
                    {connection.firstName} {connection.lastName}
                  </h2>

                  <div className="flex gap-2 mt-2">
                    <div className="badge badge-primary">
                      {connection.gender}
                    </div>

                    <div className="badge badge-secondary">
                      {connection.age} Years
                    </div>
                  </div>

                  <p className="mt-3 text-base-content/70">
                    {connection.about || "No description available."}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {connection.skills?.length > 0 ? (
                      connection.skills.map((skill) => (
                        <span
                          key={skill}
                          className="badge badge-outline badge-accent"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-400">
                        No Skills Added
                      </span>
                    )}
                  </div>
                </div>

                {/* Action */}
                <div>
                  <button className="btn btn-primary">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectionsPage;
