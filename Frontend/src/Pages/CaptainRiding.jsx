import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, {useState, useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import FinishRiding from '../Components/FinishRiding'

const CaptainRiding = () => {
    const [finishRidingPanel, setFinishRidingPanel] = useState(false)
    const finishRidingPanelRef = useRef(null)
    const location = useLocation()
    const ride = location.state?.ride


    useGSAP(function(){ 
        if(finishRidingPanel){
          gsap.to(finishRidingPanelRef.current,{
            transform:'translateY(0)',
          })
        }else{
          gsap.to(finishRidingPanelRef.current,{
            transform: 'translateY(100%)',
            // duration:0.5
          })
        }
      },[finishRidingPanel])  


  return (
   <div className='h-screen'>

          <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
            <img className='w-16 ' src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="" />

              <Link to='/captain-home' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full ' >
                   <i className=' text-lg font-medium ri-logout-box-r-line'></i>
              </Link>
          </div>

              <div className="h-4/5 ">
                <img className  ="h-full w-full object-cover" alt="" src="https://imgs.search.brave.com/A9FGg0apJw5tFxYaTVZR3XNGO-SbZK-IiQwKcfRzWi8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzI4LzMwLzI2/LzM2MF9GXzcyODMw/MjYyMF9YZGRuZjVD/bDBLMUFDWnVyZDZ5/QnlVekhpSE1NSW9l/Ni5qcGc "/>
              </div>
               
          <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 '

            onClick={()=>{
                setFinishRidingPanel(true)
            }}
            >

            <h5 className='p-1 text-center absolute top-0 w-[95%]' onClick={()=>{

            }}><i className=' text-3xl text-gray-800 ri-arrow-up-wide-line'></i></h5>

                <h4 className='text-xl font-semibold'>{'4 KM away'}</h4>
                <button className='w-[60%] mt-1 bg-green-600 text-white text-lg font-semibold p-3 rounded-lg'>Complete Ride</button>
          </div>

          
           <div ref={finishRidingPanelRef} className='fixed z-[500] w-full translate-y-full bottom-0 bg-white px-3 py-10 pt-12'>
               {ride && (
                   <FinishRiding  
                   ride={ride}
                   setFinishRidingPanel={setFinishRidingPanel} />
               )}
          </div>

              
          {/* <div className='h-screen fixed w-screen top-0 z-[-1]'>
                <LiveTracking />
            </div> */}

      </div>
  )
}

export default CaptainRiding
