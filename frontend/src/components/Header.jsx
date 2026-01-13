import React, { useContext } from 'react'
import Button from './Button'
import { AuthContext } from './AuthProvider'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogout= ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/login')
  }
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Button class='navbar-brand text-light' text='Stock Prediction Portal' url='/' />
        {isLoggedIn ? <button className='btn btn-danger' onClick={handleLogout}>Logout</button> :
          <>
            <div>
              <Button text='Login' class='btn-outline-info' url='/login' />
              &nbsp;
              <Button text='Register' class='btn-info' url='/register' />
            </div>
          </>
        }

      </nav>
    </>
  )
}

export default Header