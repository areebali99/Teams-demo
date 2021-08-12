import React, { useState } from 'react'
import './Form.css'
import FormSignIn from './FormSignIn'
import FormSignup from './FormSignup'

const Form = () => {
  const [isSignin, setIsSignin] = useState(true)

  return (
    <>
      <div className='form-container'>
      <div className='form-content-right'>
        {isSignin
          ? (
          <FormSignIn onToggle={setIsSignin} />
            )
          : (
          <FormSignup onToggle={setIsSignin} />
            )}
      </div>
      </div>
    </>
  )
}

export default Form
