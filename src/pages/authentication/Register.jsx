import React from 'react';
import LRForm from './components/form/LRForm';
import axios from 'axios';

const Register = () => {
  const handleRegister= async (data)=> {
    await axios.post("https://react30.onrender.com/api/user/register",data)
  }
  return (
     <LRForm type='Register' onSubmit={handleRegister} />
  );
};

export default Register;
