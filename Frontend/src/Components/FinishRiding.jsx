import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FinishRiding = (props) => {

    const navigate = useNavigate()

     async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

            rideId: props.ride._id


        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        if (response.status === 200) {
            navigate('/captain-home')
        }

    }

  return (
      <div>
        <h5 className='p-1 text-center absolute top-0 w-[92%]' onClick={()=>{
            props.setFinishRidingPanel(false)
          }}><i className=' text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>
            <h3 className='font-semibold text-2xl mb-5'>Finish this Ride</h3>

            <div className='flex items-center justify-between p-4 border-2 border-yellow-500 rounded-lg mt-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full object-cover' src="https://imgs.search.brave.com/_wnGUcXGnb2p6A2L7P_GpMDWb0j2xLj7n_wtv0ZPgFM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2Yz/L2UwL2ZlZjNlMGUz/MmZiNzM0NTdlZTMx/MzI3MjBlZTIxODU4/LmpwZw" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
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
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >{props.ride?.pickup}</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-2-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >{props.ride?.destination}</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3  '>
                         <i className='text-lg ri-currency-line' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >Cash</p>
                         </div>
                    </div>
                    
                </div>
                
                <div className='w-full mt-6'>
                        <button
                        onClick={endRide}
                        className='w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>

                           

                </div>  
          </div>
    </div>
)
}

export default FinishRiding