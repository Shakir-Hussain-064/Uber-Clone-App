import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const CaptainSignup = () => {
     const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const [firstname, setfirstname] = useState('')
        const [lastname, setlastname] = useState('')
        const [userData, setuserData] = useState("")
    
    
    
        const submitHandler = (e) => {
            e.preventDefault()
            setuserData({
                fullname:{
                    firstname:firstname,
                    lastname:lastname
                },
                email:email,
                password:password
            })
    
            setemail('')
            setpassword('')
            setfirstname('')
            setlastname('')
        }

  return (
    <div className='p-4 h-screen flex flex-col justify-between'>
            <div>
                <img className="w-20 mb-5" src="https://www.svgrepo.com/show/505031/uber-driver.svg"></img>
            <form onSubmit={(e) => {
                e.preventDefault();
                submitHandler(e)}
            }>
                <h3 className='text-base w-full mb-1 font-medium'>What's our Captain's name </h3>
                <div className='flex gap-3 mb-2'>
                    <input 
                        required 
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
                        type="text"
                        placeholder='First name'
                        value={firstname}
                        onChange={(e)=>{
                            setfirstname(e.target.value)
                        }}
                        />

                    <input 
                        required 
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-base placeholder:text-sm"
                        type="text"
                        placeholder='Last name'
                        value={lastname}
                        onChange={(e)=>{
                            setlastname(e.target.value)
                        }}
                    />
                </div>


                <h3 className='text-base mb-1 font-medium'>What's our Captain's email </h3>
    
                <input 
                required
                className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="email"
                placeholder='example@gmail.com'
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                    }}
                />
    
                <h3 className='text-base mb-1 font-medium' > Enter password</h3>
    
                <input 
                required
                className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                    }}
                />

                <button
                    className=" bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-sm"
                > Sign Up </button>
            </form>
                 <p className='text-center text-[18px]'> Already have an acocunt?  <Link to='/captain-login' className='text-blue-600 '> Login here </Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight '> This site is protected by reCAPTCHA and <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Service apply.</span></p>
            </div>
        </div>
  )
}

export default CaptainSignup
