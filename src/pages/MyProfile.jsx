import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleSave = () => {
    // Logic for saving changes (if connected to an API, handle saving here)
    alert("Information saved successfully!");
    setIsEdit(false);
  };

  return (
    <div className="max-w-lg flex flex-col gap-4 text-sm bg-white p-6 rounded">
      {/* Profile Image */}
      <div className="flex items-center gap-4">
        <img
          className="w-36 h-36 rounded-full object-cover"
          src={userData.image}
          alt={userData.name}
        />
        {isEdit ? (
          <input
            className="bg-gray-50 text-xl font-medium w-full"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-2xl text-neutral-800">
            {userData.name}
          </p>
        )}
      </div>

      <hr className="border-gray-300" />

      {/* Contact Information */}
      <div>
        <p className="text-neutral-500 underline font-semibold">
          Contact Information
        </p>
        <div className="flex flex-col gap-y-3 mt-3 text-neutral-700">
          <div className="flex items-center">
            <p className="font-medium min-w-[80px]">Email:</p>
            <p className="text-blue-500">{userData.email}</p>
          </div>
          <div className="flex items-center">
            <p className="font-medium min-w-[80px]">Phone:</p>
            {isEdit ? (
              <input
                className="bg-gray-100 px-2 py-1 rounded"
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
          </div>
          <div>
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <>
                <input
                  className="bg-gray-50 px-2 py-1 w-full mt-1 rounded"
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                />
                <input
                  className="bg-gray-50 px-2 py-1 w-full mt-1 rounded"
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                />
              </>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Basic Information */}
      <div>
        <p className="text-neutral-500 underline font-semibold">
          Basic Information
        </p>
        <div className="flex flex-col gap-y-3 mt-3">
          <div className="flex items-center">
            <p className="font-medium min-w-[80px]">Gender:</p>
            {isEdit ? (
              <select
                className="bg-gray-50 px-2 py-1 rounded"
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }))
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div className="flex items-center">
            <p className="font-medium min-w-[80px]">Birthday:</p>
            {isEdit ? (
              <input
                className="bg-gray-50 px-2 py-1 rounded"
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    dob: e.target.value,
                  }))
                }
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        {isEdit ? (
          <>
            <button
              onClick={() => setIsEdit(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Information
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
