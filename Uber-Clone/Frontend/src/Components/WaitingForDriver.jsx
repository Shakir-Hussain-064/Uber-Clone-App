import React from 'react'

const WaitingForDriver = (props) => {
  return ( 
     <div>
      <h5 className='p-1 text-center absolute top-0 w-[92%]' onClick={()=>{
            props.waitingForDriver(false)
          }}><i className=' text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>

          <div className='flex items-centre justify-between'>
             <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" /> 
              <div className='text-right'>
               <h2 className='text-lg font medium capitalize'>{props.ride?.captain.fullname.firstname + ' ' + props.ride?.captain.fullname.lastname}</h2>
               <h4 className='text-xl font-semibold -mt-1 -mb-1 '>{props.ride?.captain.vehicle.plate}</h4>
               <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
               <h1 className='text-lg font-semibold'>  {props.ride?.otp} </h1>
              </div>
          </div>

          <div className='flex gap-2 flex-col items-center justify-between' >

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
                            <p className='text-sm -mt-1 text-gray-600 ' > To Be Paid </p>
                         </div>
                    </div>
                    
                </div>
          </div>
    </div>
  )
}

export default WaitingForDriver
