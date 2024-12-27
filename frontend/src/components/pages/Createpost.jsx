import React from 'react'

const Createpost = () => {
  return (
    <div className='createpost'>
       <div className="post-header">
          <h1>Create New Post</h1>
          <button id='post-btn'>Share</button>
       </div>

       <div className="main-div">
          <input type="file" accept='image/*'/>
       </div>

       <div className="details">
          <div className="card-header">
            <div className="card-pic">
                <img src="https://plus.unsplash.com/premium_photo-1734498806724-a5e9431ff4f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <h5>Ramesh</h5>
          </div>
          <textarea type="text" placeholder='Write a caption....'></textarea>
       </div>
    </div>
  )
}

export default Createpost