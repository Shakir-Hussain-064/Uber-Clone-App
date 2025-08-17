import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center absolute top-0 w-[92%]' onClick={()=>{
            props.setConfirmRidePanel(false)
          }}><i className=' text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>
            <h3 className='font-semibold text-2xl mb-5'>Confirm your Ride</h3>

          <div className='flex gap-2 flex-col items-center justify-between' >
             <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png" alt="" /> 

                <div className='w-full mt-5' >
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-user-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' > {props.pickup} </p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-2-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' > {props.destination} </p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3  '>
                         <i className='text-lg ri-currency-line' ></i>
                         <div>
                            <h3 className='text-xl font-medium' > ₹ {props.fare[ props.vehicleType ]} </h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >Cash</p>
                         </div>
                    </div>
                    
                </div>
                <button onClick={()=>{
                    props.setVehicleFound(true)
                    props.setConfirmRidePanel(false)
                    props.createRide()
                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' >Confirm</button>
          </div>
    </div>
  )
}

export default ConfirmRide
