import React from 'react';
import LRForm from './components/form/LRForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../config';

const Register = () => {
  
  const navigate = useNavigate()
  const handleRegister= async (data)=> {
    try{
      const response = await axios.post(  `${baseUrl}/register`,data)
    console.log(response);
    if(response.status===201){
      navigate('/login')
    }
    else{
      alert("Registration failed")

  }

    }
    catch(error){
    alert(error?.response?.data?.message)
    }
  }
  return (
     <LRForm type='Register' onSubmit={handleRegister} />
  );
};

export default Register;
