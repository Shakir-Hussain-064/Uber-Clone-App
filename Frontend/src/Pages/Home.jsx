import { Link } from 'react-router-dom'
import React, {useRef, useState, useContext, useEffect} from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../Components/LocationSearchPanel'
import VehiclePanel from '../Components/VehiclePanel' 
import ConfirmRide from '../Components/ConfirmRide'
import LookingForDriver from '../Components/LookingForDriver'
import WaitingForDriver from '../Components/WaitingForDriver'
import axios from 'axios'
import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../Components/LiveTracking';


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
      const [vehiclePanel, setVehiclePanel] = useState(false)
      const [confirmRidePanel, setConfirmRidePanel] = useState(false)
      const [vehicleFound, setVehicleFound] = useState(false)
      const [waitingForDriver, setWaitingForDriver] = useState(false)
      const [ pickupSuggestions, setPickupSuggestions ] = useState([])
      const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
      const [ activeField, setActiveField ] = useState(null)
      const [fare, setFare] = useState({})
      const [vehicleType, setVehicleType] = useState(null)
      const [ ride, setRide ] = useState(null)

      const navigate = useNavigate()

      const { socket } = useContext(SocketContext)
      const { user } = useContext(UserDataContext)
    

       useEffect(() => {
            socket.emit("join", { userType: "user", userId: user._id })
        
    }, [ user ])


    socket.on('ride-confirmed', ride => {

        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })
 
    
    socket.on('ride-started', ride => {
        setWaitingForDriver(false)
        navigate('/riding', { state: { ride } }) // Updated navigate to include ride data
    })


       const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
            // handle error
        }
    }

    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            // handle error
        }
    }


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
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)',
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        translateY:'100%',
        // duration:0.5
      })
    }
  },[vehiclePanel])



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


  async function findTrip() {
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        setFare(response.data)
    }


     async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
    }



  return (
    <div className='h-screen relative overflow-hidden'>
      <img className="w-16 absolute left-5 top-5" src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="" />


       <div className=' h-screen w-screen'>
         {/* image for temporary use*/}
                <LiveTracking />
       </div>

       <div className=' flex flex-col justify-end  absolute h-screen bottom-0 w-full  '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={panelCloseRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
             <i className="ri-arrow-down-wide-line"></i> 
             </h5>
          <h4 className='text-2xl font-semibold' >Find a trip...</h4>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}> 
              <div className="line absolute h-19 w-1 top-[50%] -translate-y-1/2 left-10 bg-gray-700 rounded-full"></div>

              <input
                 onClick={() => {
                     setPanelOpen(true)
                     setActiveField('pickup')
                 }}
                 onChange={handlePickupChange}
                 value={pickup}
                 type="text"
                 className=' border-2 border-black bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                 placeholder='Add a pick-up location'
                 />

             <input
                 onClick={() => {
                     setPanelOpen(true)
                     setActiveField('destination')
                 }}
                 value={destination}
                 onChange={handleDestinationChange}
                 className=' border-2 border-black bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3'
                 type="text"
                 placeholder='Enter your destination'
                  />
                            
            </form> 

             <button
                   onClick={findTrip}
                   className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                   Find Trip
             </button>

        </div>
        <div ref={panelRef} className=' h-0 bg-white'>
              <LocationSearchPanel 
                  suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                  setPanelOpen={setPanelOpen}
                  setVehiclePanel={setVehiclePanel}
                  setPickup={setPickup}
                  setDestination={setDestination}
                  activeField={activeField}/>
        </div>
       </div>

       <div ref={vehiclePanelRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white px-3 py-10 pt-12'>
              <VehiclePanel 
              selectVehicle={setVehicleType}
              fare={fare} 
              setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
       </div>


       <div ref={confirmRidePanelRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white px-3 py-6 pt-12'>
              <ConfirmRide
              createRide={createRide}
              pickup={pickup}
              destination={destination}
              fare={fare}
              vehicleType={vehicleType}
              setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
       </div>


       <div ref={vehicleFoundRef} className='fixed z-10 translate-y-full w-full bottom-0 bg-white px-3 py-6 pt-12'>
                <LookingForDriver
                pickup={pickup}
                destination={destination}
                fare={fare}
                vehicleType={vehicleType}
                setVehicleFound={setVehicleFound} />
       </div>

       <div ref={waitingForDriverRef} className='fixed z-10 w-full bottom-0 bg-white px-3 py-6 pt-12'>
                <WaitingForDriver 
                    ride={ride}
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                    waitingForDriver={waitingForDriver} /> 
       </div>
    </div>
  )
}

export default Home
