import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const CaptainLogin = () => {
        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [captainData, setcaptainData] = useState({})
    
        const submitHandler = (e) => {
            e.preventDefault();
            setcaptainData({
                email: email,
                password: password
            })
            
            setemail('')
            setpassword('')
        }

    return (
    <div className='p-4 h-screen flex flex-col justify-between'>
        <div>
            <img className="w-20 mb-1" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={(e) => {
            e.preventDefault();
            submitHandler(e)}
        }>
            <h3 className='text-base mb-1 font-medium'>What's your email </h3>

            <input 
            required 
            value={email}
            onChange={(e) => {
                setemail(e.target.value)
            }}
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            placeholder='example@gmail.com'
            />

            <h3 className='text-base mb-1 font-medium' > Enter password</h3>

            <input 
            required
            value={password}
            onChange={(e) => {
                setpassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="password" 
            placeholder='password'
            />
            <button
                className=" bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-base placeholder:text-base"
            > Login </button>
        </form>
             <p className='text-center text-[18px]'> Join a fleet?  <Link to='/captain-signup' className='text-blue-600 '> Register as a Captain </Link></p>
        </div>
        <div>
            <Link to='/login'
                className=" bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >Sign in as User </Link>
        </div>
    </div>
  )
  
}

export default CaptainLogin
