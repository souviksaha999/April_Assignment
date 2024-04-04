import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import Loading from './Loading';

export default function Reg() {

  const data = { name: "", email: "", mobile: "", password: "" }

  const [user, setUser] = useState(data)
  const [error, setError] = useState({})
  const [load, setLoad] = useState(false)

  const validation = () => {
    let err = {}

    if (!user.name) {
      err.name = "Name is Required"
    }
    if (!user.email) {
      err.email = "Email is Required"
    }
    if (!user.mobile) {
      err.mobile = "Mobile is Required"
    }
    if (!user.password) {
      err.password = "Password is Required"
    }

    return err
  }

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(user)

    if (e.target.name === "name"){
      if (e.target.value=== ""){
        setError({...error, name : "@Name is Required"})
        setUser({...user, name : ""})
      }else{
        setError({...error, name : ""})
        setUser({...user, name : e.target.value})
      }
    }
    if (e.target.name === "email"){
      if (e.target.value=== ""){
        setError({...error, email : "@Email is Required"})
        setUser({...user, email : ""})
      }else{
        setError({...error, email : ""})
        setUser({...user, email : e.target.value})
      }
    }
    if (e.target.name === "mobile"){
      if (e.target.value=== ""){
        setError({...error, mobile : "@Mobile is Required"})
        setUser({...user, mobile : ""})
      }else{
        setError({...error, mobile : ""})
        setUser({...user, mobile : e.target.value})
      }
    }
    if (e.target.name === "password"){
      if (e.target.value=== ""){
        setError({...error, password : "@Password is Required"})
        setUser({...user, password : ""})
      }else{
        setError({...error, password : ""})
        setUser({...user, password : e.target.value})
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
        const response = await axios.post(" https://restapinodejs.onrender.com/api/register ", user)
        console.log(response)
        console.log(response?.data?.message)
        if (response) {
          toast.success(response?.data?.message)
          setTimeout(() => {
            navigate("/login")
          }, 2000);
        } 
      }else{
        setLoad(false)
      }

    } catch (error) {
      console.log(error)
      toast.error(error?.message)
      toast.error(error?.response?.data?.msg)
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
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form action='' method='POST' onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" name='name' value={user.name} onChange={onChange} />
                <span style={{color : "red",marginLeft:"24px"}}>{error.name}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" name='email' value={user.email} onChange={onChange} />
                <span style={{color : "red",marginLeft:"24px"}}>{error.email}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Mobile</label>
                <input type="number" class="form-control" name='mobile' value={user.mobile} onChange={onChange} />
                <span style={{color : "red",marginLeft:"24px"}}>{error.mobile}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" name='password' value={user.password} onChange={onChange} />
                <span style={{color : "red",marginLeft:"24px"}}>{error.password}</span>
              </div>

              {load ? <Loading/> :  <button type="submit" class="btn btn-primary">Submit</button>}
            </form>
          </div>
        </div>
        <Link to='/login' style={{ paddingTop: "20px" }}>
            Already have an acount? Login Now
          </Link>
      </div>
    </>
  )
}
