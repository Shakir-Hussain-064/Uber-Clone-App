import React from 'react'

const WaitingForDriver = (props) => {
  return (
     <div>
      <h5 className='p-1 text-center absolute top-0 w-[92%]' onClick={()=>{
            props.waitingForDriver(false)
          }}><i className=' text-3xl text-gray-300 ri-arrow-down-wide-line'></i></h5>

          <div className='flex items-centre justify-between'>
             <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_851/v1707429809/assets/2a/9fe873-1f16-4c89-ba41-2712211380a9/original/UberBlack.png" alt="" /> 
              <div className='text-right'>
               <h2 className='text-lg font medium'>Alok Sharma</h2>
               <h4 className='text-xl font-semibold -mt-1 -mb-1 '>MH 12 AZ 1234</h4>
               <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
              </div>
          </div>

          <div className='flex gap-2 flex-col items-center justify-between' >

                <div className='w-full mt-5' >
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-user-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 test-gray-600 ' >Kankariya Talab, Ghaziabad</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-2-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >562/11-A</h3>
                            <p className='text-sm -mt-1 test-gray-600 ' >Kankariya Talab, Ghaziabad</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3  '>
                         <i className='text-lg ri-currency-line' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >$193.20</h3>
                            <p className='text-sm -mt-1 test-gray-600 ' >Cash Cash</p>
                         </div>
                    </div>
                    
                </div>
          </div>
    </div>
  )
}

export default WaitingForDriver
