import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className=" bg-cover bg-right bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-5 flex justify-between flex-col w-full">
        <img className="w-14 ml-8" src="https://imgs.search.brave.com/f9koJdeyfoOEVaO8Y12H2Hhx12j6MZ9OPrq21HTFzrk/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZWRpZ2l0YWxhZ2Vu/Y3kuY29tLmF1L3dw/LWNvbnRlbnQvdXBs/b2Fkcy9uZXctVWJl/ci1sb2dvLXdoaXRl/LXBuZy1zbWFsbC1z/aXplLnBuZw" alt="" />
        <div className='bg-white pb-5 py-4 px-4'>
            <h2 className="text-[30px] font-bold"> Get Started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center  w-full bg-black text-white py-3 rounded-lg mt-5 '> Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
