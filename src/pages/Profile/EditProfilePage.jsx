import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useSelector } from "react-redux";
import FeedCard from "../Feed/FeedCard";
import { showError, showSuccess } from "../../utils/toast";

const EMPTY_USER = {};

const EditProfilePage = () => {
  const user = useSelector((state) => state.user) || EMPTY_USER;

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [skills, setSkills] = useState(user.skills || []);
  const [photoURL, setPhotoURL] = useState(user.photoURL || "");
  const [about, setAbout] = useState(user.about || "");

  useEffect(() => {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setAge(user.age || "");
    setGender(user.gender || "");
    setSkills(user.skills || []);
    setPhotoURL(user.photoURL || "");
    setAbout(user.about || "");
  }, [user]);

  const handleSubmit = async () => {
    try {
      const UpdatedDate = {
        firstName,
        lastName,
        age,
        gender,
        skills,
        photoURL,
        about,
      };

      const res = await axios.patch(BASE_URL + "profile/edit", UpdatedDate, {
        withCredentials: true,
      });

      console.log(res?.data);
      showSuccess("Profile updated successfully");
    } catch (error) {
      const message =
        error?.response?.data?.message || "Failed to update profile";
      showError(message);
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ================= Left Side ================= */}
        <div className="w-full lg:w-2/3">
          <div className="card bg-base-100 shadow-xl">
            {/* Cover */}
            <div className="h-32 bg-primary rounded-t-2xl"></div>

            <div className="card-body">
              {/* Avatar */}
              <div className="-mt-20 flex flex-col items-center">
                <div className="avatar">
                  <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                    <img src={photoURL} alt="" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-3">Edit Profile</h2>

                <p className="text-sm opacity-70">
                  Update your profile details
                </p>
              </div>

              <div className="divider"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="label">
                    <span className="label-text">First Name</span>
                  </label>

                  <input
                    className="input input-bordered w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>

                  <input
                    className="input input-bordered w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>

                  <input
                    type="number"
                    className="input input-bordered w-full"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>

                  <input
                    className="input input-bordered w-full"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>

              {/* Photo */}
              <div className="mt-4">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>

                <input
                  className="input input-bordered w-full"
                  value={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>

              {/* Skills */}
              <div className="mt-4">
                <label className="label">
                  <span className="label-text">Skills</span>
                </label>

                <input
                  className="input input-bordered w-full"
                  value={skills.join(", ")}
                  onChange={(e) =>
                    setSkills(
                      e.target.value.split(",").map((item) => item.trim()),
                    )
                  }
                />
              </div>

              {/* About */}
              <div className="mt-4">
                <label className="label">
                  <span className="label-text">About</span>
                </label>

                <textarea
                  rows="5"
                  className="textarea textarea-bordered w-full"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-6">
                <button className="btn btn-outline">Cancel</button>

                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  type="button"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Right Side ================= */}

        <div className="w-full lg:w-1/3">
          <h2 className="text-xl font-bold text-center mb-4">Live Preview</h2>

          <FeedCard
            user={{
              firstName,
              lastName,
              age,
              gender,
              photoURL,
              skills,
              about,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
