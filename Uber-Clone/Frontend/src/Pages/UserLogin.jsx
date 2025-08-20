import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {UserDataContext} from '../context/UserContext.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})    

    const {user , setUser} = useContext(UserDataContext)
    const navigate = useNavigate()



    const submitHandler = async (e) => {
        e.preventDefault();
        
        const userData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        
        setEmail('')
        setPassword('')
    }

  return (
    <div className='p-5 h-screen flex flex-col justify-between'>
        <div>
            <img className="w-16 mb-5" src="https://imgs.search.brave.com/02_P5YeSyy1WG204Yw6PXZE4H8vIFyB9wYtRYd1r_uI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTEyMHg2Ny5wbmc" alt="" />

        <form onSubmit={(e) => {    
            submitHandler(e)}
        }>
            <h3 className='text-base mb-1 font-medium'>What's your email </h3>

            <input 
            required 
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
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
                setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="password" 
            placeholder='password'
            />
            <button
                className=" bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-base placeholder:text-base"
            > Login </button>
        </form>
             <p className='text-center text-[18px]'> New Here?  <Link to='/signup' className='text-blue-600 '> Create new account </Link></p>
        </div>
        <div>
            <Link to='/captain-login'
                className=" bg-[#10b461] flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >Sign in as Captain </Link>
        </div>
    </div>
  )
}

export default UserLogin
 