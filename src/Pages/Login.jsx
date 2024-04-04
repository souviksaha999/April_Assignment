import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Loading";

export default function Login() {

  const data = { email: "", password: "" }

  const [user, setUser] = useState(data)
  const [error, setError] = useState({})
  const [load, setLoad] = useState(false)

  const validation = () => {
    let err = {}

    if (!user.email) {
      err.email = "Email is required"
    }
    if (!user.password) {
      err.password = "Password is required"
    }

    return err;
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)

    if (e.target.name === "email") {
      if (e.target.value === "") {
        setError({ ...error, email: "@Email is required" })
        setUser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setUser({ ...user, email: e.target.value })
      }
    }
    if (e.target.name === "password") {
      if (e.target.value === "") {
        setError({ ...error, password: "@Password is required" })
        setUser({ ...user, password: "" })
      } else {
        setError({ ...error, password: "" })
        setUser({ ...user, password: e.target.value })
      }
    }
  }

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoad(true)
    const ErrorList = validation()
    setError(validation())
    try {
      if (Object.keys(ErrorList).length === 0) {
        const response = await axios.post("https://restapinodejs.onrender.com/api/login ", user)
        console.log(response)
        console.log(response?.data?.message)
        if (response) {
          toast.success(response?.data?.message)
          setTimeout(() => {
            navigate("/allblogs")
          }, 2000);
        } 
      }else {
        setLoad(false)
      }

    } catch (error) {
      console.log(error)
      toast.error(error?.message)
      toast.error(error?.response?.data?.message)
      setLoad(false)
    }
  }



  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Log In</h2>
            <form action="" method="POST" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" name="email" value={user.email} onChange={onChange} />
                <span style={{ color: "red", marginLeft: "24px" }}>{error.email}</span>
              </div>

              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" name="password" value={user.password} onChange={onChange} />
                <span style={{ color: "red", marginLeft: "24px" }}>{error.password}</span>
              </div>

              {load ? <Loading /> : <button type="submit" class="btn btn-primary"> Submit</button>}
            </form>


          </div>
        </div>
        <div>
          <Link to="/register" style={{ paddingTop: "20px" }}>
            Don't havean acount? Register Now
          </Link>
        </div>
      </div>
    </>
  );
}
