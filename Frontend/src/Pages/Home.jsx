import React, {useRef, useState} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel'
import VehiclePanel from '../Components/VehiclePanel' 
import ConfirmRide from '../Components/ConfirmRide'
import LookingForDriver from '../Components/LookingForDriver'
import WaitingForDriver from '../Components/WaitingForDriver'



const Home = () => {

      const [ pickup, setPickup ] = useState('')
      const [ destination, setDestination ] = useState('')
      const [panelOpen, setPanelOpen] = useState(false)
      const vehiclePanelRef = useRef(null)
      const confirmRidePanelRef = useRef(null)
      const vehicleFoundRef = useRef(null)
      const waitingForDriverRef = useRef(null)
      const panelRef = useRef(null)
      const panelCloseRef = useRef(null)
      const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
      const [confirmRidePanel, setConfirmRidePanel] = useState(false)

      const [vehicleFound, setVehicleFound] = useState(false)
      const [waitingForDriver, setwaitingForDriver] = useState(false)


  const submitHandler = (e) => {
      e.preventDefault();
  }

  
  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
      height:'70%',
      padding:28,
      // opacity:1
    })
      gsap.to(panelCloseRef.current,{
        opacity:1
      })
    }else{
      gsap.to(panelRef.current,{
      height:'0%',
      padding:0
      // opacity:1
    })
      gsap.to(panelCloseRef.current,{
         opacity:0
      })
    }
  },[panelOpen])



  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)',
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        translateY:'100%',
        // duration:0.5
      })
    }
  },[vehiclePanelOpen])



  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)',
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        translateY:'100%',
        // duration:0.5
      })
    }
  },[confirmRidePanel])


  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)',
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        translateY:'100%',
        // duration:0.5
      })
    }
  },[vehicleFound])



  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform:'translateY(0)',
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        translateY:'100%',
        // duration:0.5
      })
    }
  },[waitingForDriver])



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute left-5 top-5" src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="" />

       <div className=' h-screen w-screen'>
         {/* image for temporary use*/}
         <img className='h-full w-full object-cover' src="https://imgs.search.brave.com/A9FGg0apJw5tFxYaTVZR3XNGO-SbZK-IiQwKcfRzWi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzI4LzMwLzI2/LzM2MF9GXzcyODMw/MjYyMF9YZGRuZjVD/bDBLMUFDWnVyZDZ5/QnlVekhpSE1NSW9l/Ni5qcGc " alt="" />
       </div>

       <div className=' flex flex-col justify-end  absolute h-screen bottom-0 w-full  '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
             <i className="ri-arrow-down-wide-line"></i> 
             </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}>
              <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-700 rounded-full "></div>
              <input 
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e)=>{
                setPickup(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
              type="text" 
              placeholder='Add a pickup location' 
              />
              <input 
              onClick={()=>{
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e)=>{
                setDestination(e.target.value)
              }}
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
              type="text" 
              placeholder='Enter your destination ' 
              />
            </form> 
        </div>
        <div ref={panelRef} className=' h-0 bg-white'>
              <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>
       </div>

       <div ref={vehiclePanelRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white px-3 py-10 pt-12'>
              <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanelOpen={setVehiclePanelOpen} />
       </div>


       <div ref={confirmRidePanelRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white px-3 py-6 pt-12'>
              <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
       </div>


       <div ref={vehicleFoundRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white px-3 py-6 pt-12'>
                <LookingForDriver setVehicleFound={setVehicleFound} />
       </div>

       <div ref={waitingForDriverRef} className='fixed z-10 w-full bottom-0 bg-white px-3 py-6 pt-12'>
                <WaitingForDriver waitingForDriver={waitingForDriver} />
       </div>
    </div>
  )
}

export default Home
