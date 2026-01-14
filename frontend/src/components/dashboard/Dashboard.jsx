import axios from 'axios'
import React, { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'
const Dashboard = () => {

  useEffect(() => {
    const fetchProtectedRoute = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken')

        const response = await axiosInstance.get('/protected-route/')

        console.log(response.data)

      } catch (error) {
        console.log(error.response?.data || error.message)
      }
    }

    fetchProtectedRoute()
  }, [])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard
