import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import TeamForm from './TeamForm';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    teamName:'',
    teamDescription:''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit =  e => {
     e.preventDefault();
    setErrors(validate(values));

    setIsSubmitting(true);
    let userData=[];
    userData=JSON.parse(localStorage.getItem('UserData'));
   return <TeamForm/>
  //  console.log('userData',values)

//    if(userData)
//   { userData.push(userData);
//    localStorage.setItem('UserData',JSON.stringify(userData))}
// else{
//   localStorage.setItem('UserData',JSON.stringify([values]))
// }

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback(true);
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
