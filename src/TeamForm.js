import React from 'react'
import './Form.css'
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

const FormSignIn = ({ onToggle }) => {
  const { register: signin, handleSubmit, formState: { errors } } = useForm()
  const userSignin = (userData) => {
    console.log('userData', userData)
  }
  return (
    <div className='form-container'>
      <div className='form-content-right'>
          <form onSubmit={handleSubmit(userSignin)} className='form' >
            <h1 style={{ marginTop: '10px' }}>
              Get started with us today! Sign in your account by filling out the
              information below.
            </h1>

            <div className='form-inputs'>
              <label className='form-label'>Team Name</label>
              <input
                className='form-input'
                type='text'
                placeholder='Enter your team name'
                {...signin('text', {
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
            <label className='form-label' style={{ marginTop: '15px' }}>Team Category :</label>
               <select name="cars" id="cars" style={{ marginLeft: '10px' }}>
                 <option value="volvo">Category A</option>
                 <option value="saab">Category B</option>
                 <option value="opel">Category C</option>
                 <option value="audi">Category D</option>
               </select>
              {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
            </div>
            <label className='form-label' style={{ marginRight: '380px' }}>Team Description</label>
              <textarea
                style={{ width: '500px', height: '100px', marginLeft: '20px' }}
                className='form-input'
                type='email'
                placeholder='Enter your Description'
                {...signin('text', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format'
                  }
                })}
              />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

          <label className='form-label' style={{ marginTop: '15px', marginRight: '400px' }}>Existing Team  :</label>
                 <select name="cars" id="cars" style={{ marginLeft: '10px', marginRight: '425px' }}>
                   <option value="volvo">Team A</option>
                   <option value="saab">Team B</option>
                   <option value="opel">Team C</option>
                   <option value="audi">Team D</option>
                 </select>
                 <div className='form-inputs'>
              <label className='form-label'>Add Team Member</label>
              <input
                className='form-input'
                type='text'
                placeholder='Enter your team name'
                {...signin('text', {
                  required: 'Email is required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format'
                  }
                })}
              />
          {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

          <button className='form-input-btn' type='submit' style={{ width: '68vh' }} onClick={console.log('userdata', userData)}>
              Add Team Member
            </button>
            </div>
          </form>
          </div>
      </div>
  )
}
FormSignIn.propTypes = {
  onToggle: PropTypes.func.isRequired
}

export default FormSignIn
