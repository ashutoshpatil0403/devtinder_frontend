import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../../redux/slices/FeedSlice";

const FeedCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleSendRequest = async (status, id) => {
    try {
      const sendRequest = await axios.post(
        BASE_URL + "request/send/" + status + "/" + id,
        {},
        { withCredentials: true },
      );
      dispatch(removeUserFromFeed(id));
      console.log(sendRequest);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user, "user in feed card");
  return (
    <div className="card bg-base-100 shadow-xl w-[33vw] min-h-[60vh] max-h-[80vh] overflow-y-auto">
      {" "}
      <div className="card-body items-center text-center">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} alt={user.firstName} />
          </div>
        </div>

        {/* Name */}
        <h2 className="card-title mt-4 text-2xl">
          {user.firstName} {user.lastName}
        </h2>

        {/* Age & Gender */}
        <div className="flex gap-3 mt-2">
          <div className="badge badge-primary badge-outline">{user.gender}</div>

          <div className="badge badge-secondary badge-outline">
            {user.age} Years
          </div>
        </div>

        {/* About */}
        <p className="text-base-content/70 mt-4 min-h-14">
          {user.about || "No description available."}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {user.skills?.length > 0 ? (
            user.skills.map((skill) => (
              <span key={skill} className="badge badge-accent badge-outline">
                {skill}
              </span>
            ))
          ) : (
            <span className="text-sm text-gray-400">No Skills Added</span>
          )}
        </div>

        {/* Buttons */}
        <div className="card-actions mt-6 w-full">
          <button
            className="btn btn-error flex-1"
            onClick={() => handleSendRequest("ignored", user._id)}
          >
            Ignore
          </button>

          <button
            className="btn btn-success flex-1"
            onClick={() => handleSendRequest("interested", user._id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
