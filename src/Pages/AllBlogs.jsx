import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export default function AllBlogs() {
  const [blog, setBlog] = useState([]);
  const [load, setLoad] = useState(true);

  const getBlogs = async () => {
    try {
      const response = await axios.get(
        "https://restapinodejs.onrender.com/api/allBlog"
      );
      // console.log(response);
      setBlog(response?.data?.data);
      setLoad(false)
    } catch (error) {
      console.log(false)
    }

  };
  // console.log(blog)
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      {/* {load &&  <h1 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}> <Loading /></h1> } */}
      {load &&   <Loading /> }
      <div className="container">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
            <th scope="col">Thumbnail</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Post Text</th>
              <th scope="col">Category</th>
              {/* <th scope="col">Comments</th>
              <th scope="col">Created At</th>
              <th scope="col">Comment Count</th> */}
              
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {blog.map((item, index) => {
              return (
                <>
                  <tr>
                  <td><img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} alt="" width="80px" height="70px" /></td>
                    <th scope="row">{item._id}</th>
                    <td>{item.title}</td>
                    <td dangerouslySetInnerHTML={{ __html: item?.postText?.slice(0, 50) }}></td>
                    <td>{item.category}</td>
                    {/* <td>{item.comments[0]}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.comment_count}</td> */}
                    
                    <td><Link to={`/blogdetails/${item._id}`}>View Details</Link></td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
