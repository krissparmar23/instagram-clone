import React from "react";

const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Profile frame */}
      <div className="flex items-center justify-between p-4">
        {/* Profile picture */}
        <div className="w-40 h-40">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
        </div>

        {/* Profile data */}
        <div className="text-left">
          <h1 className="text-xl font-semibold">Senta</h1>
          <div className="flex space-x-2 mt-2 text-gray-600">
            <span className="font-medium">40 posts</span>
            <span className="font-medium">40 following</span>
            <span className="font-medium">40 followers</span>
          </div>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700">
            Follow
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-4">
        <img
          className="w-full h-32 object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery"
        />
        <img
          className="w-full h-32 object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery"
        />
        <img
          className="w-full h-32 object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery"
        />
        <img
          className="w-full h-32 object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery"
        />
        <img
          className="w-full h-32 object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery"
        />
        <img
          className="w-full h-32 object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gallery"
        />
      </div>
    </div>
  );
};

export default Profile;
