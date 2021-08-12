import React,{useEffect} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Form from './Form';
import { Link } from '@material-ui/core';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  

  return (
    <div className='form-content-right'>
      <form onSubmit={e=>handleSubmit(e)}  className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
       

<br/>
        <span>
        
  <input type="radio" id="html" name="fav_language" />
  <label for="html" className="employee">Sign up as Employee</label>
        </span>

      <br/>

        <span>
        
  <input type="radio" id="html" name="fav_language" />
  <label for="html" className="employee">Sign up as Employer</label>
        </span>
       
        <span className='form-input-login'>
          Already have an account? Sign in <Link href="/">here</Link>
        </span>

        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;
