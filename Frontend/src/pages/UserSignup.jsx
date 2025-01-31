import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [userData,setUserData] = useState({});
  
  const navigate = useNavigate();

  const {user , setUser} = React.useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    const newUser = {
    fullname:{
      firstname: firstName,
      lastname: lastName
    },
    email: email,
    password: password
  }  
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
  if(response.status === 201){
    const data = response.data;
    setUser(data.user)
    localStorage.setItem('token',data.token);
    navigate('/home');
  }
   
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-7" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className="text-base font-medium mb-2">What's your Name </h3>
          <div className="flex gap-4 mb-5 ">
            <input
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
              className="bg-[#EEEEEE] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="First name" />
            <input
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
              className="bg-[#EEEEEE] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
              type="text"
              placeholder="Last name" />
          </div>

          <h3 className="text-base font-medium mb-2">What's your Email </h3>

          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="email"
            placeholder="email@example.com" />

          <h3 className="text-base mb-2 font-medium">Enter Password </h3>

          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
            type="password" placeholder="Password" />

          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2  w-full text-base placeholder:text-sm">Create Account</button>
        </form>
        <p className="text-center font-medium">Already have a account ?<Link to="/login" className="text-blue-600"> Login here</Link></p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy
          Policy</span> and <span className="underline">Terms of Service</span>  apply.
        </p>

      </div>
    </div>
  );
}
export default UserSignup;