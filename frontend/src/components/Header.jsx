import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
    
    <nav className='navbar container pt-3 pb-3 align-items-start'>
     <Button  class='navbar-brand text-light' text='Stock Prediction Portal' url='/' />
     <div>
        <Button text = 'Login' class='btn-outline-info' url='/login'/>
         &nbsp;
        <Button text='Register' class='btn-info' url='/register' />
     </div>
    </nav>
    </>
  )
}

export default Header