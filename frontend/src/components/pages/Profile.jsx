import React from "react";

const Profile = () => {
  return (
 
     <div className="max-w-2xl mx-auto p-4">
     {/* Profile Header */}
     <div className="flex items-center gap-8 mb-8">
       <div className="relative w-24 h-24 rounded-full overflow-hidden">
         <img
           src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="Profile picture"
           width={96}
           height={96}
           className=""
         />
       </div>
       
       <div>
         <h1 className="text-xl font-medium mb-2">Canta Coder</h1>
         <div className="flex gap-6 text-sm">
           <div>
             <span className="font-medium">40</span> posts
           </div>
           <div>
             <span className="font-medium">40</span> followers
           </div>
           <div>
             <span className="font-medium">40</span> following
           </div>
         </div>
       </div>
     </div>
     <div className="border mb-4 border-gray-300"></div>

     {/* Photo Grid */}
     <div className="grid grid-cols-3 gap-4">
           <img
             src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="object-cover"
           />
            <img
             src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="object-cover"
           />
            <img
             src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="object-cover"
           />
            <img
             src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="object-cover"
           />
            <img
             src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="object-cover"
           />
            <img
             src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
             className="object-cover"
           />
        
       
     </div>
   </div>
  );
};

export default Profile;
