import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";


export default function Category() {

  const [catg, setCatg] = useState([]);
  const [load, setLoad] = useState(true);

  const getCatg = async () => {
    try {
      const response = await axios.get("https://restapinodejs.onrender.com/api/showallcategory");
      // console.log(response);
      setCatg(response?.data?.data);
      setLoad(false)
    } catch (error) {
      console.log(error)
    }

  };
  console.log(catg)
  useEffect(() => {
    getCatg();
  }, []);


  return (
    <>
    {/* {load && <h1 style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}> <Loading /></h1>} */}
    {load &&  <Loading />}
      <div className="container">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Category</th>
              <th scope="col">Details</th>

            </tr>
          </thead>
          <tbody>
            {
              catg.map((item, index) => {
                return (
                  
                    <tr key={index}>
                      <th scope="row">{item._id}</th>
                      <td>{item.category}</td>

                      <td><Link to={`/catgdetails/${item._id}`}>View Details</Link></td>
                    </tr>
                  
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
