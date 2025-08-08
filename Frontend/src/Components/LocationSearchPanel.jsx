import React from 'react'

const LocationSearchPanel = (props) => {

        //sample array 
    const locations = [
        "22C, Bannerghatta Road, Bangalore",
        "15D, Sector 17, Gurgaon",
        "5F, Connaught Place, New Delhi",
        "30G, Brigade Road, Bangalore",
    ]

  return (
    <div>
        {/*sample location*/}

        {
            locations.map(function(elem, idx){
                 return <div key={idx} onClick={()=>{
                    props.setVehiclePanelOpen(true)
                    props.setPanelOpen(false)
                 }} className='flex items-center my-2 border-gray-100 active:border-black justify-start gap-4 border-2 p-3 rounded-xl'>
                    <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full'> <i className='ri-map-pin-fill '> </i> </h2>
                    <h4 className='font-medium'>{elem}</h4>
                 </div>
            })
        }
        
        
    </div>
  )
}

export default LocationSearchPanel
