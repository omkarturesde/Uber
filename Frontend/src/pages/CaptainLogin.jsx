import React, { useState } from "react";
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [captainData,setCapatainData] = useState({})
  
    const submitHandler = (e) => {
      e.preventDefault();
      setCapatainData({
        email: email,
        password: password
      })
      setEmail('');
      setPassword('');   
    }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <img className="w-16 mb-7" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e) => {
        submitHandler(e);
      }}>
        <h3 className="text-lg font-medium mb-2">What's your Email ?</h3>
        
        <input 
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-md placeholder:text-sm" 
        type="email" 
        placeholder="email@example.com"/>
        
        <h3  className="text-lg mb-2 font-medium">Enter Password </h3>
        
        <input 
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-md placeholder:text-sm" 
        type="password" placeholder="Password"/>
        
        <button
         className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2  w-full text-md placeholder:text-sm">Login</button>
      </form>
      <p className="text-center font-medium">Join a fleet ?<Link to="/captain-signup" className="text-blue-600"> Register as Captain</Link></p>
      </div>
      <div>
        <Link to={'/login'} className="bg-[#DC602C] flex items-center mb-5 justify-center text-white font-semibold mb-7 rounded px-4 py-2  w-full text-md placeholder:text-sm">Sign in as User</Link>
      </div>
    </div>
  );
}

export default CaptainLogin;