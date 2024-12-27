import React, { useState } from 'react';

const Createpost = () => {
  const [image, setImage] = useState(null);  // State to store the selected image

  // Function to handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);  // Set the selected image as the state
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-xl  my-4 border border-gray-300 rounded-lg mx-4 lg:mx-auto">
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h1 className="text-xl font-semibold">Create New Post</h1>
        <button id="post-btn" className="text-blue-500 font-bold cursor-pointer">Share</button>
      </div>

      <div className="p-4 border-b border-gray-300">
        <input 
          type="file" 
          accept="image/*" 
          className="w-full border-0 outline-none"
          onChange={handleImageChange}  // Add the event handler for file input change
        />
      </div>

      {/* Image Preview Section */}
      <div className="p-4">
        <img 
          src={image || "https://i.pinimg.com/564x/0c/bb/aa/0cbbaab0deff7f188a7762d9569bf1b3.jpg"} 
          alt="Preview" 
          className="w-full h-96 object-center rounded-lg" 
        />
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <img 
              src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h5 className="text-lg font-medium">Ramesh</h5>
        </div>
        <textarea 
          className="w-full p-2 border-0 outline-none resize-none" 
          placeholder="Write a caption...." 
          rows="4"
        ></textarea>
      </div>
    </div>
  );
}

export default Createpost;
