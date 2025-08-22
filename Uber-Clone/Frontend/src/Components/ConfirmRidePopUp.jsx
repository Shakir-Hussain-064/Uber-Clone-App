import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 
const ConfirmRidePopUp = (props) => {
    const [ otp, setOtp ] = useState('')
    const navigate = useNavigate()

    const submitHander = async (e) => {
        e.preventDefault() 

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
            navigate('/captain-riding', { state: { ride: props.ride } })
        }


    }

  return (
    <div>
        <h5 className='p-1 text-center absolute top-0 w-[92%]' onClick={()=>{
            props.setRidePopupPanel(false)
          }}><i className=' text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>
            <h3 className='font-semibold text-2xl mb-5'>Confirm this ride to Start</h3>

            <div className='flex items-center justify-between p-3 bg-yellow-500 border-2 border-black rounded-lg mt-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/_wnGUcXGnb2p6A2L7P_GpMDWb0j2xLj7n_wtv0ZPgFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2Yz/L2UwL2ZlZjNlMGUz/MmZiNzM0NTdlZTMx/MzI3MjBlZTIxODU4/LmpwZw" alt="" />
                    <h2 className='text-lg font-medium capitalize'> {props.ride?.user.fullname.firstname + ' ' + props.ride?.user.fullname.lastname} </h2>
                </div>
                <div>
                    <h5 className='text-lg font-semibold'> 2.2 KM </h5>
                </div>
            </div>

          <div className='flex gap-2 flex-col items-center justify-between bg-gray-100 rounded-lg mt-2 w-full ' >

                <div className='w-full mt-5' >
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-user-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >Pick-up</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >{props.ride?.pickup}</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-2-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >Destination</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >{props.ride?.destination}</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3  '>
                         <i className='text-lg ri-currency-line' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >To Be Paid</p>
                         </div>
                    </div>
                    
                </div>
                
                <div className='w-full flex items-center justify-center mt-6'>
                    <form onSubmit={submitHander}> 
                            <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="Number" className='bg-[#eee] px-12 font-mono py-2 text-lg rounded-lg w-full mb-4' placeholder='Enter OTP' />
                        <button className='w-full mt-5 text-lg flex justify-center bg-black text-white rounded-lg font-semibold p-3 rounded-lg'>Confirm</button>
                    <button
                     onClick={()=>{
                         props.setConfirmRidePopUpPanel(false)
                         props.setRidePopUpPanel(false)
                     }}
                     className='w-full mt-1 mr-1 bg-red-600 text-gray-800 font-semibold p-3 rounded-lg' >Cancel</button>

                    </form>
                </div>  
          </div>
    </div>
    )
}

export default ConfirmRidePopUp
