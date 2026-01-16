import React, { use, useState } from 'react'
import axios from 'axios'
import axiosInstance from '../axiosInstance'

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading , setLoading] = useState(false)
  const handleRegistration = async(e) =>{
    e.preventDefault()
    setLoading(true)
    try{
      const userData = {username, email, password}
      const response = await axiosInstance.post('/register/', userData)
      setErrors({})
      setSuccess(true)

    }
    catch(error){
        setErrors(error.response.data)
    }
    finally{
        setLoading(false)
    }
  }
  return (
    <>
     <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6 bg-light-dark p-5 rounded">
                <h3 className="text-light text-center mb-3">
                    Create an Account
                </h3>
                <form onSubmit={handleRegistration}>
                    <div className="mb-3">
                        <input type="text" required className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username' />
                        <small className='text-danger'>{errors.username && errors.username}</small>
                    </div>
                    <div className="mb-3">
                        <input type="email" required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
                    </div>
                    <div className="mb-3">
                      <input type="password" required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' />
                      <small className='text-danger'>{errors.password && errors.password}</small>
                    </div>
                    {success &&<div className="alert alert-info">Account Created Successfully. Please Login!</div>}
                    {loading? <button type='submit' className='btn btn-info d-block mx-auto'>Please wait...</button> : 
                    <button type='submit' className='btn btn-info d-block mx-auto'>Register</button>
                    }

                </form>
            </div>
        </div>
     </div>
    </>
  )
}

export default Register