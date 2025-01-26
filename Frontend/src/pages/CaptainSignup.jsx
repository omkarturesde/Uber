import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [captainData,setCaptainData] = useState({});
    const [vehicleColor,setVehicleColor] = useState('');
    const [vehiclePlate,setVehiclePlate] = useState('');
    const [vehicleCapacity,setVehicleCapacity] = useState('');
    const [vehicleType,setVehicleType] = useState('');

    const navigate = useNavigate();
    const {captain, setCaptain} = React.useContext(CaptainDataContext);
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleType('');
    setVehicleCapacity('');

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
    
    if(response.status === 201){
    const data = response.data
    setCaptain(data.captain)
    localStorage.setItem('token',data.token);
    navigate('/captain-home')
    }
  }  
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img className="w-16 mb-7" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e);
        }}>
          <h3 className="text-base font-medium mb-2">What's our Captain's Name </h3>
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

          <h3 className="text-base font-medium mb-2">What's our Captain's Email </h3>

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

            <h3 className="text-base mb-2 font-medium">Vehicle Information</h3>
          <div className='flex gap-4 mb-1'>
            <input
              required
              className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="text"
              placeholder='Vehicle Color'
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="text"
              placeholder='Vehicle Plate'
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value)
              }}
            />
          </div>
          <div className='flex gap-3 mb-2'>
            <input
              required
              className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              type="number"
              placeholder='Vehicle Capacity'
              value={vehicleCapacity}
              onChange={(e) => {
                setVehicleCapacity(e.target.value)
              }}
            />
            <select
              required
              className='bg-[#EEEEEE] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value)
              }}
            >
              <option value="" disabled>Select Vehicle Type</option>
              <option value="car">car</option>
              <option value="motorcycle">motorcycle</option>
              <option value="auto">auto</option>
            </select>
          </div>
          <button
            className="bg-[#111] text-white font-semibold mb-4 rounded px-4 py-2  w-full text-base placeholder:text-sm">Register</button>
        </form>
        <p className="text-center font-medium">Already have a account ?<Link to="/captain-login" className="text-blue-600"> Login here</Link></p>
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

export default CaptainSignup;