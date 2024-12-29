import React ,{useState,useEffect} from "react";

const Profile = () => {
  const [pic, setPic] = useState([])

  useEffect(()=>{
     fetch("http://localhost:5000/myposts",{
       headers:{
        Authorization: "Bearer " + localStorage.getItem("jwt")
       }

     }).then(res => res.json())
        .then(result => setPic(result))
        .catch(err => console.log(err))
  
  },[])
  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Profile frame */}
      <div className="flex items-center space-x-14 p-4">
        {/* Profile picture */}
        <div className="w-32 h-32 flex-shrink-0">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
          />
        </div>

        {/* Profile data */}
        <div className="text-left">
          <h1 className="text-xl font-semibold">{JSON.parse(localStorage.getItem("user")).name}</h1>
          <div className="flex space-x-2 mt-2 text-gray-600">
            <span className="font-medium">40 posts</span>
            <span className="font-medium">40 following</span>
            <span className="font-medium">40 followers</span>
          </div>
        
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-4">
        {
           pic.map((pic)=>{
             return <img key={pic._id} src={pic.photo} className="item"></img>
           })
        }
      </div>
    </div>
  );
};

export default Profile;
