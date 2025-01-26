import React,{ useEffect, useState}  from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const [isLoading,setIsLoading] = useState(false)

    const  token  = localStorage.getItem('token');
    const { captain, setCaptain } = React.useContext(CaptainDataContext)
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!token) {
            navigate('/captain-login');
        }
    }, [token]);

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch(err => {
        localStorage.removeItem('token')
        navigate('/captain-login')
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

export default CaptainProtectWrapper;