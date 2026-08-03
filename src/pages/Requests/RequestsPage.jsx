import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../../utils/constants";
import { addRequests, removeRequest } from "../../redux/slices/RequestSlice";
import { showError, showSuccess } from "../../utils/toast";

const RequestsPage = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.request ?? []);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(BASE_URL + "user/requests/received", {
          withCredentials: true,
        });

        const pendingRequests = Array.isArray(res?.data?.data)
          ? res.data.data
          : [];

        dispatch(addRequests(pendingRequests));
      } catch (err) {
        console.error(err);
        showError("Failed to load requests");
        dispatch(addRequests([]));
      }
    };

    fetchRequests();
  }, [dispatch]);

  const reviewRequest = async (status, requestId) => {
    try {
      await axios.post(
        BASE_URL + `request/review/${status}/${requestId}`,
        {},
        { withCredentials: true },
      );

      dispatch(removeRequest(requestId));
      showSuccess(`Request ${status}`);
    } catch (err) {
      console.error(err);
      showError("Unable to update request");
    }
  };

  if (!requests.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">No pending requests</h2>
          <p className="text-gray-500 mt-2">
            New requests from other users will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Pending Requests
        </h1>

        <div className="space-y-6">
          {requests.map((request) => {
            // console.log(request, "56");
            const fromuser = request.fromUserId;
            return (
              <div
                key={request._id}
                className="card bg-base-100 shadow-lg border border-base-300"
              >
                <div className="card-body flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="avatar">
                      <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={fromuser?.photoURL} alt={request?.firstName} />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold">
                        {fromuser?.firstName} {fromuser?.lastName}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {fromuser?.about || "No description added yet."}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => reviewRequest("accepted", request._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-error btn-sm"
                      onClick={() => reviewRequest("rejected", request._id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RequestsPage;
