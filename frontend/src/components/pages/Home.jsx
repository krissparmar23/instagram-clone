import React from "react";

const Home = () => {
  return (
    <div className="home">
      {/* card */}
      <div className="max-w-md mx-4 md:mx-auto my-6 bg-white border rounded-md shadow-md">
        {/* card header */}
        <div className="flex items-center p-4">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
            <img
              src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h5 className="font-bold text-sm sm:text-base">ramesh</h5>
        </div>

        {/* card image */}
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1734275012690-6d3006fba036?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* card content */}
        <div className="p-4">
          <span className="material-symbols-outlined text-2xl sm:text-3xl">favorite</span>
          <p className="mt-2 text-xs sm:text-sm">1 Like</p>
          <p className="text-xs sm:text-sm">This is amazing</p>
        </div>

        {/* add comment */}
        <div className="flex items-center border-t p-4">
          <span className="material-symbols-outlined mr-2 text-xl sm:text-2xl">mood</span>
          <input
            type="text"
            placeholder="Add a comment"
            className="flex-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
          <button className="text-blue-500 font-bold ml-2 text-xs sm:text-sm">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
