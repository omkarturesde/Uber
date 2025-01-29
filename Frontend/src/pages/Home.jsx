import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [panelOpen, setPanelOpen] = useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
    }
    useGSAP(() => {
        if(panelOpen){
            gsap.to(panelRef.current,{
                height: '70%',
                padding: 24,
                opacity: 1
            })
            gsap.to(panelCloseRef.current,{
                opacity: 1
            })
        }else{
            gsap.to(panelRef.current,{
                height: '0%',
                padding: 0,
                opacity: 0
            })
            gsap.to(panelCloseRef.current,{
                opacity: 0
            })
        }
    },[panelOpen])


    return (
        <div className='h-screen relative overflow-hidden'>
            <img className="w-16 absolute ml-8 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

            <div className='h-screen w-screen'>
                <img className="h-full w-sfull object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-5 bg-white relative'>
                    
                    <h5
                    ref={panelCloseRef}
                    onClick={() => {
                        setPanelOpen(false)
                    }} 
                    className='opacity-0 absolute top-5 right-7 text-3xl font-extrabold'>
                    <i className="ri-arrow-down-double-fill"></i>
                    </h5>
                    <h4 className='text-xl font-semibold'>Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value);
                            }}
                            className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
                            type="text"
                            placeholder='Add a pick-up location' />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                            className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3" 
                            type="text" 
                            placeholder='Enter destination' />
                    </form>
                </div>
                <div ref={panelRef} className='bg-white h-0'>
                        <LocationSearchPanel />
                </div>
            </div>
            
            <div className='fixed w-full z-10 bg-white bottom-0 p-3 py-6 px-3'>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

                    <div className='flex w-full border-2 active:border-black bg-gray-100 rounded-2xl p-3 items-center justify-between mb-2'>
                        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1596627972/assets/e7/e861a8-30ec-4d57-8045-7186f6c5ec35/original/comfort.png" alt="" />
                        <div className='ml-2 w-1/2'>
                            <h4 className='font-medium text-lg'>UberGo <span><i className="ri-user-3-fill"> 4</i></span></h4>
                            <h5 className='font-medium text-sm'>2 mins away </h5>
                            <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                        </div>
                        <h2 className='text-lg font-semibold'>₹193.20</h2>
                    </div>      

                    <div className='flex w-full border-2 active:border-black bg-gray-100 rounded-2xl p-3 items-center justify-between mb-2'>
                        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                        <div className='ml-2 w-1/2'>
                            <h4 className='font-medium text-lg'>Moto <span><i className="ri-user-3-fill"> 1</i></span></h4>
                            <h5 className='font-medium text-sm'>3 mins away </h5>
                            <p className='font-normal text-xs text-gray-600'>Affordable, Motorcycle rides</p>
                        </div>
                        <h2 className='text-lg font-semibold'>₹65.17</h2>
                    </div>   

                    <div className='flex w-full border-2 active:border-black bg-gray-100 rounded-2xl p-3 items-center justify-between mb-2'>
                        <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                        <div className='ml-2 w-1/2'>
                            <h4 className='font-medium text-lg'>UberAuto <span><i className="ri-user-3-fill"> 3</i></span></h4>
                            <h5 className='font-medium text-sm'>3 mins away </h5>
                            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
                        </div>
                        <h2 className='text-lg font-semibold'>₹118.86</h2>
                    </div>  
            </div>
            
        </div>
    );
};

export default Home;