import React,{useContext,useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/userContext';
import axios from 'axios';

const UserProtectWrapper = ({ children }) => {
    const [isLoading,setIsLoading] = useState(false)
    const  token  = localStorage.getItem('token');
    const {user , setUser} = useContext(UserDataContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200){
            setUser(response.data.user)
            setIsLoading(false)
        }
    }).catch(err => {
        localStorage.removeItem('token')
        navigate('/login')
    })
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    } 
    return (
        <>
            {children}
        </>
    );
};

export default UserProtectWrapper;