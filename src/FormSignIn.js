import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const FormSignIn = ({ onToggle }) => {
  const { register: signin, handleSubmit, formState: { errors } } = useForm()
  const userSignin = (userData) => {
    console.log('userData', userData)
  }
  return (
          <form onSubmit={handleSubmit(userSignin)} className='form' >
            <h1>
              Get started with us today! Sign in your account by filling out the
              information below.
            </h1>

            <div className='form-inputs'>
              <label className='form-label'>Email</label>
              <input
                className='form-input'
                type='email'
                placeholder='Enter your email'
                {...signin('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format'
                  }
                })}
              />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
            </div>
            <div className='form-inputs'>
              <label className='form-label'>Password</label>
              <input
                className='form-input'
                type='password'
                {...signin('password', { required: 'Password is required' })}
                placeholder='Enter your password'
              />
              {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
            </div>
    <div style={{ marginTop: '10px' } } id='radioGroup'>
    <label className="employee">Sign in as:</label>
            <span>
            <input type="radio" {...signin('signinAs')} defaultChecked={true} value='Employee'/>
            <label className="employee"> Employee</label>
            </span>
            <span>
              <input type="radio" {...signin('signinAs')} defaultChecked={false} value='Employer' />
              <label className="employee">Employer</label>
            </span>

            </div>

            <span className='form-input-login'>
              Don't have an account? Sign up <Link onClick={() => { onToggle(false) }}>here</Link>
            </span>

            <button className='form-input-btn' type='submit'>
              Sign in
            </button>

          </form>
  )
}
FormSignIn.propTypes = {
  onToggle: PropTypes.func.isRequired
}

export default FormSignIn
