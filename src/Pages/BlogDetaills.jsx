import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function BlogDetaills() {
  const { id } = useParams()
  const [blog, setBlog] = useState([]);

  const getBlogs = async () => {
    const response = await axios.get(`https://restapinodejs.onrender.com/api/blogdetails/${id}`);
    // console.log(response);
    setBlog(response?.data?.data);
  };
  //   console.log(blog)
  useEffect(() => {
    getBlogs();
  }, []);


  return (
    <>
      <div className="container" style={{ border: "2px solid black" }}>
        <img src={`https://restapinodejs.onrender.com/api/blog/image/${id}`} alt="" width="50%" />
        <p>Id : {blog._id} </p>
        <p>Title : {blog.title} </p>
        <p>Category : {blog.category} </p>
        <h2>Post Text : </h2>
        <p dangerouslySetInnerHTML={{__html : blog.postText}}></p>
        {/* <p>PostText :  {blog.postText?.slice(0, 150)} </p> */}
        <p>Likes : {blog.likes} </p>
        <p>Unlikes : {blog.unlikes} </p>
        <p>CreatedAt : {blog.createdAt} </p>
        <p>UpdatedAt : {blog.updatedAt} </p>
      </div>
    </>
  )
}
