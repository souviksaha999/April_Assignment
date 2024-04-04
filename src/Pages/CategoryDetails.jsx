import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function CategoryDetails() {
  const { id } = useParams()
  const [catg, setCatg] = useState([]);

  const getBlogs = async () => {
    const response = await axios.get(`https://restapinodejs.onrender.com/api/category/post/${id}`);
    // console.log(response);
    setCatg(response?.data?.data);
  };
  console.log(catg)
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {
            catg.map((item, index) => {
              return (
                <>
                  <div className="col-md-12">
                    <div class="card" >
                      <img src={`https://restapinodejs.onrender.com/api/blog/image/${item._id}`} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Id : {item._id} </h5>
                        <h5 class="card-title">Title : {item.title} </h5>
                        <h4>PostText : </h4>
                        <h5 dangerouslySetInnerHTML={{ __html: item.postText }}></h5>
                        {/* <p class="card-text" >PostText : {item.postText?.slice(0, 150)} </p> */}
                        <h5 class="card-title">Likes : {item.likes} </h5>
                        <h5 class="card-title">Unlikes : {item.unlikes} </h5>
                        <h5 class="card-title">CreatedAt : {item.createdAt} </h5>
                        <h5 class="card-title">UpdatedAt : {item.updatedAt} </h5>
                        
                        
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>
    </>
  )
}
