// import FeedCard from "../../components/FeedCard";
import { useEffect } from "react";
import FeedCard from "./FeedCard";
import { BASE_URL } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addFeed } from "../../redux/slices/FeedSlice";
import { showError } from "../../utils/toast";

const FeedPage = () => {
  // const [feedUsers, setFeedUsers] = useState([]);
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  useEffect(() => {
    if (feed.length > 0) {
      return;
    }
    const fetchUsers = async () => {
      try {
        const res = await axios.get(BASE_URL + "feed", {
          withCredentials: true,
        });
        dispatch(addFeed(res?.data?.data));
      } catch (error) {
        showError("Failed to load feed");
        console.log(error);
      }
    };
    fetchUsers();
  }, [dispatch, feed.length]);

  return (
    <div className="min-h-screen flex items-center bg-base-200 px-4">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center">
          {feed.length > 0 ? (
            <FeedCard user={feed[0]} />
          ) : (
            <p className="text-lg font-semibold">No users found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
