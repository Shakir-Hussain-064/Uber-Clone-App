import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div><h5 className='p-1 text-center absolute top-0 w-[92%]' onClick={()=>{
            props.setVehiclePanelOpen(false)
          }}><i className=' text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>
            <h3 className='font-semibold text-2xl mb-5'>Choose a Vehicle</h3>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between '>
                 <img className=' h-12 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png" alt="" />
                 <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-lg'>UberGo <span><i className='ri-user-3-fill'> 4 </i></span> </h4>
                  <h5 className='font-medium text-sm'>2 min away</h5>
                  <p className='font-normal text-xs text-gray-600 ' >Affordable, compact ride.</p>
                 </div>
                 <h2 className='text-lg font-semibold '> $193.20</h2>
              </div>
              <div 
              onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between '>
                 <img className=' h-10 ' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
                 <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-lg'>Moto <span><i className='ri-user-3-fill'> 1 </i></span> </h4>
                  <h5 className='font-medium text-sm'>3 min away</h5>
                  <p className='font-normal text-xs text-gray-600 ' >Affordable, moto rides</p>
                 </div>
                 <h2 className='text-lg font-semibold '> $65.00</h2>
              </div>
              <div onClick={()=>{
                props.setConfirmRidePanel(true)
              }} className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between '>
                 <img className=' h-10 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="" />
                 <div className='ml-2 w-1/2'>
                  <h4 className='font-medium text-lg'>UberAuto <span><i className='ri-user-3-fill'> 3 </i></span> </h4>
                  <h5 className='font-medium text-sm'>2 min away</h5>
                  <p className='font-normal text-xs text-gray-600 ' >Affordable, auto ride.</p>
                 </div>
                 <h2 className='text-lg font-semibold '> $118.68</h2>
              </div></div>
  )
}

export default VehiclePanel