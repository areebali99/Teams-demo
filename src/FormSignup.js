import React from 'react'
import './Form.css'
import { Link } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

const FormSignup = ({ onToggle }) => {
  const createUser = (userDetail) => {
    let userData = []
    userData = JSON.parse(localStorage.getItem('UserData'))
    if (userData) {
      userData.push(userDetail)
      localStorage.setItem('UserData', JSON.stringify(userData))
    } else {
      localStorage.setItem('UserData', JSON.stringify([userDetail]))
    }
  }
  const { register: signup, handleSubmit, formState: { errors } } = useForm()

  return (
    <form onSubmit={handleSubmit(createUser)} className="form" noValidate>
      <h1>
        Get started with us today! Create your account by filling out the
        information below.
      </h1>
      <div className="form-inputs">
        <label className="form-label">Username</label>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your username"
          {...signup('username', { required: 'This field is Required' })}
        />
        {errors.username && <span style={{ color: 'red' }}>{errors.username.message}</span>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          placeholder="Enter your email"
          {...signup('email', { required: 'This field is Required' })}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Password</label>
        <input
          className="form-input"
          type="password"
          placeholder="Enter your password"
          {...signup('password', { required: 'This field is Required' })}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
      </div>
      <div className="form-inputs">
        <label className="form-label">Confirm Password</label>
        <input
          className="form-input"
          type="password"
          placeholder="Confirm your password"
          {...signup('confirmPassword', { required: 'This field is Required' })}
        />
        {errors.confirmPassword && <span style={{ color: 'red' }}>{errors.confirmPassword.message}</span>}
      </div>

      <br />
            <span>

              <input type="radio" id="html" name="fav_language" />
              <label htmlFor="html" className="employee">Sign up as Employee</label>
      </span>

      <br />

      <span>

        <input type="radio" id="html" name="fav_language" />
        <label htmlFor="html" className="employee">Sign up as Employer</label>
      </span>

      <span className="form-input-login">
        Already have an account? Sign in
        {' '}
        <Link onClick={() => { onToggle(true) }}>here</Link>
      </span>

      <button className="form-input-btn" type="submit">
        Sign up
      </button>

    </form>
  )
}
FormSignup.propTypes = {
  onToggle: PropTypes.func.isRequired
}

export default FormSignup
