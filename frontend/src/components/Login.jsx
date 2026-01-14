import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
import axiosInstance from '../axiosInstance'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    const userData = {
      username, password
    }
    try {
      const response = await axiosInstance.post('/token/', userData)
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)
      setError(null)
      setIsLoggedIn(true)
      navigate('/')

    }
    catch (error) {
      setError('Invalid Credentials!')
    }
    finally {
      setLoading(false)
    }

  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-3">
              Login to Stock Prediction Portal
            </h3>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <input type="text" required className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter username' />
              </div>
              <div className="mb-3">
                <input type="password" required className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password' />
              </div>
              {error && <div className='text-warning mb-2'>{error}</div>}
              {loading ? <button type='submit' className='btn btn-info d-block mx-auto'>Please wait...</button> :
                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>
              }

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login