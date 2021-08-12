import React from 'react'
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


const TeamForm = ({ submitForm }) => {
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
      <form onSubmit={handleSubmit}  className='form' noValidate>
        <h1>
          Get started with us today! Make Your Team by filling out the
          information below.
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Team Name</label>
          <input
            className='form-input'
            type='text'
            name='team-name'
            placeholder='Enter your Team Name'
            value={values.teamName}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label' style={{marginTop:"15px"}}>Team Category :</label>
          <select name="cars" id="cars" style={{marginLeft:"10px"}}>
    <option value="volvo">Category A</option>
    <option value="saab">Category B</option>
    <option value="opel">Category C</option>
    <option value="audi">Category D</option>
  </select>
          {errors.email && <p>{errors.email}</p>}
        </div>


        <div className='form-inputs'>
          <label className='form-label' >Team Description</label>
          <textarea
            className='form-input'
            type='text'
            rows="4"
            style={{ height:"100px"}}
            name='team-description'
            placeholder='Enter your Team Description'
            value={values.teamDescription}
            onChange={handleChange}
          />

<div className='form-inputs'>
          <label className='form-label' style={{marginTop:"15px"}}>Existing Team  :</label>
          <select name="cars" id="cars" style={{marginLeft:"10px"}}>
    <option value="volvo">Team A</option>
    <option value="saab">Team B</option>
    <option value="opel">Team C</option>
    <option value="audi">Team D</option>
  </select>
          {errors.email && <p>{errors.email}</p>}
        </div>
          
        </div>
        <div className='form-inputs'>
       
        <label className='form-label'>Add Member</label>
          <input
            className='form-input'
            type='text'
            name='team-name'
            placeholder='Add Your Member'
            value={values.teamName}
            onChange={handleChange}
          />
          <button className='form-input-btn' style={{width:"100px" , height:"45px" }} type='submit'>
            Add Team Member
        </button>
        </div>

        
        
       

<br/>
        {/* <span>
        
  <input type="radio" id="html" name="fav_language" />
  <label for="html" className="employee">Sign in as Employee</label>
        </span>

      <br/>

        <span>
        
  <input type="radio" id="html" name="fav_language" />
  <label for="html" className="employee">Sign in as Employer</label>
        </span> */}
       
        <span className='form-input-login'>
          Already have an account? Sign up <Link to="/signup">here</Link>
        </span>

        {/* <button className='form-input-btn' type='submit'>
          Sign in
        </button>
         */}
      </form>
      </div>
    </div>
    )
}

export default TeamForm
