import React,{useEffect} from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Form from './Form';
import {Link} from 'react-router-dom'

const FormSignIn = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );
  

  return (

    <div className='form-container'>
    <span className='close-btn'>×</span>
    <div className='form-content-left'>
      <img className='form-img' src='img/img-2.svg' alt='spaceship' />
    </div>
   
 

    <div className='form-content-right'>
      <form onSubmit={e=>handleSubmit(e)}  className='form' noValidate>
        <h1>
          Get started with us today! Sign in your account by filling out the
          information below.
        </h1>
        
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
        
       

<br/>
        <span>
        
  <input type="radio" id="html" name="fav_language" />
  <label for="html" className="employee">Sign in as Employee</label>
        </span>

      <br/>

        <span>
        
  <input type="radio" id="html" name="fav_language" />
  <label for="html" className="employee">Sign in as Employer</label>
        </span>
       
        <span className='form-input-login'>
          Don't have an account? Sign up <Link to="/signup">here</Link>
        </span>
        <span className='form-input-login'>
          Don't have a team ? create team now click <Link to="/teamform">here</Link>
        </span>

        <button className='form-input-btn' type='submit'>
          Sign in
        </button>
        
      </form>
      </div>
    </div>
  );
};

export default FormSignIn;
