import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
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
   console.log('userData',userData)

   if(userData)
  { userData.push(userData);
   localStorage.setItem('UserData',JSON.stringify(userData))}
else{
  localStorage.setItem('UserData',JSON.stringify([values]))
}

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