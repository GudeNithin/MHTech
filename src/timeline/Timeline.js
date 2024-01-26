import React, { useState } from 'react'
import "./Timeline.css"
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
    const [posts,setPosts]=useState([
        {
            user: "redian_",
            postImage:
              "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            likes: 54,
            timestamp: "2h",
          },
          {
            user: "mallesh_patel_23",
            postImage:
              "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
            likes: 432,
            timestamp: "17h",
          },
          {
            user: "darling_karthik",
            postImage:
              "https://i.pinimg.com/736x/e4/65/ef/e465ef1718eb16fa3539dd5d6c30f753.jpg",
            likes: 1420,
            timestamp: "2d",
          },
          {
            user: "priceless_srikanth",
            postImage:
              "https://www.livemint.com/lm-img/img/2024/01/24/600x338/Ayodhya_Ram_Mandir_1706104723218_1706104723375.jpg",
            likes: 3021,
            timestamp: "2d",
          },
          {
            user: "peoples_leader",
            postImage:
              "https://th-i.thgim.com/public/sport/cricket/5c5rmb/article67776406.ece/alternates/FREE_1200/_DSC7573.jpg",
            likes: 521,
            timestamp: "1h",
          },
          {
            user: "arag_talla",
            postImage:
              "https://assets.cntraveller.in/photos/63997ddc9ee4918a0f9a6861/master/pass/biryani%20in%20hyderabad.jpg",
            likes: 31,
            timestamp: "1d",
          },
          {
            user: "mandi_yt",
            postImage:
              "https://mediapool.bmwgroup.com/cache/P9/202110/P90442352/P90442352-rolls-royce-announces-black-badge-ghost-the-purest-black-badge-yet-2249px.jpg",
            likes: 111,
            timestamp: "8d",
          },
          {
            user: "uday_nani",
            postImage:
              "https://vietnam.travel/sites/default/files/styles/top_banner/public/2022-06/shutterstock_585187837_0.jpg?itok=orSs_hPh",
            likes: 101,
            timestamp: "15d",
          },
    ]);
  return (
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
            {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
            </div>
        </div>
        <div className="timeline__right">
            <Suggestions/>
        </div>
    </div>
  )
}

export default Timeline