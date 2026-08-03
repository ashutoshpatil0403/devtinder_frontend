import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showError } from "../../utils/toast";

const ProfilePage = () => {
  const [userProfile, setUserProfile] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await axios.get(BASE_URL + "profile/view", {
          withCredentials: true,
        });

        setUserProfile(res.data.data);
      } catch (err) {
        showError("Failed to load profile data");
        console.log(err);
      }
    };

    fetchProfileData();
  }, []);

  console.log(userProfile);

  // useEffect(() => {
  //   fetchProfileData();
  // }, []);

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="card bg-base-100 shadow-2xl border border-base-300">
          {/* Cover */}
          <div className="h-40 bg-gradient-to-r from-primary via-secondary to-accent rounded-t-2xl"></div>

          {/* Profile Section */}
          <div className="px-8 pb-8">
            <div className="-mt-10 flex flex-col md:flex-row md:items-end gap-6">
              {/* Avatar */}
              <div className="avatar">
                <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                  <img src={userProfile?.photoURL} alt="Profile" />
                </div>
              </div>

              {/* Name */}
              <div className="flex-1 mt-1">
                <h1 className="text-3xl font-bold ">
                  {userProfile?.firstName} {userProfile?.lastName}
                </h1>

                <p className="text-base-content/70 mt-1">{userProfile?.bio}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="badge badge-primary badge-outline">
                    {userProfile?.gender}
                  </div>

                  <div className="badge badge-secondary badge-outline">
                    {userProfile?.age} Years
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                className="btn btn-primary"
                onClick={() => navigate("edit")}
              >
                Edit Profile
              </button>
            </div>

            {/* Divider */}
            <div className="divider my-8"></div>

            {/* about */}
            <div className="card bg-base-200 shadow my-6">
              <div className="card-body">
                <h2 className="card-title text-primary">About</h2>

                <p className="leading-8 text-base-content/80">
                  {userProfile?.about}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Info */}
              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <h2 className="card-title text-primary">
                    Personal Information
                  </h2>

                  <div className="space-y-4 mt-2">
                    <div>
                      <p className="text-sm text-base-content/60">First Name</p>
                      <p className="font-medium">{userProfile?.firstName}</p>
                    </div>

                    <div>
                      <p className="text-sm text-base-content/60">Last Name</p>
                      <p className="font-medium">{userProfile?.lastName}</p>
                    </div>

                    <div>
                      <p className="text-sm text-base-content/60">Email</p>
                      <p className="font-medium">{userProfile?.emailId}</p>
                    </div>

                    <div>
                      <p className="text-sm text-base-content/60">Gender</p>
                      <p className="font-medium">{userProfile?.gender}</p>
                    </div>

                    <div>
                      <p className="text-sm text-base-content/60">Age</p>
                      <p className="font-medium">{userProfile?.age} Years</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="card bg-base-200 shadow">
                <div className="card-body">
                  <h2 className="card-title text-primary">Account Details</h2>

                  <div className="space-y-4 mt-2">
                    <div>
                      <p className="text-sm text-base-content/60">User ID</p>
                      <p className="font-medium break-all">
                        {userProfile?._id}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-base-content/60">
                        Profile Created At
                      </p>
                      <p className="font-medium">{userProfile?.createdAt}</p>
                    </div>

                    <div>
                      <p className="text-sm text-base-content/60">
                        Last Updated At
                      </p>
                      <p className="font-medium">{userProfile?.updatedAt}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="card bg-base-200 shadow mt-6">
              <div className="card-body">
                <h2 className="card-title text-primary">Skills</h2>

                <div className="flex flex-wrap gap-3 mt-2">
                  {userProfile?.skills?.map((skill, index) => (
                    <span key={index} className="badge badge-primary badge-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
