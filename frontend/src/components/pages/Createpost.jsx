import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";


const Createpost = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    //saving post mongodb
    if (url) {
      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            toast.success("successfully posted");
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  //posting img to cloudinary
  const postDetetails = () => {
    console.log(body, image);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "cloudforge");
    fetch("https://api.cloudinary.com/v1_1/cloudforge/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
  };

  const loadfile = (event) => {
    const output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // Free memory
    };
    setImage(event.target.files[0]);
  };

  return (
    <div className="max-w-md mx-auto my-4 bg-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h4 className="text-lg font-semibold text-gray-700">Create New Post</h4>
        <button
          className="text-blue-500 font-bold"
          onClick={() => {
            postDetetails();
          }}
        >
          Share
        </button>
      </div>

      {/* Image Preview */}
      <div className="p-4 border-b">
        <img
          id="output"
          className="w-full h-auto rounded-md object-cover"
          src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png"
          alt="Preview"
        />
        <input
          type="file"
          accept="image/*"
          className="mt-2 w-full text-sm text-gray-600"
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0]);
          }}
        />
      </div>

      {/* Post Details */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="User"
          />
          <h5 className="text-sm font-semibold text-gray-700">Ramesh</h5>
        </div>
        <textarea
          className="w-full p-2 border rounded-md outline-none resize-none text-sm text-gray-700"
          rows="3"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write a caption..."
        ></textarea>
      </div>
    </div>
  );
};

export default Createpost;
