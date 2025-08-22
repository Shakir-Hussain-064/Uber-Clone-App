import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { SocketContext } from '../context/SocketContext'
import { useNavigate } from 'react-router-dom'
import LiveTracking from '../Components/LiveTracking'

const Riding = () => {
      const location = useLocation()
      const { ride } = location.state || {} // Retrieve ride data
      const { socket } = useContext(SocketContext)
      const navigate = useNavigate()

                              socket.on("ride-ended", () => {
                                     navigate('/home')
                               }) 
  
 
                               console.log(ride?.captain.fullname.firstname);

      // Razorpay payment handler
      const handlePayment = async () => {
            try {
                  // Call backend to create order
                  const res = await fetch('http://localhost:4000/payment/create-order', {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ amount: ride?.fare }),
                  });
                  const order = await res.json();
                  if (!order.id) throw new Error('Order creation failed');

                  // Load Razorpay script
                  const script = document.createElement('script');
                  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                  script.async = true;
                  document.body.appendChild(script);
                  script.onload = () => {
                        const options = {
                              key: 'rzp_test_R818UMz5yb0GDF', // Replace with your Razorpay Key ID
                              amount: order.amount,
                              currency: order.currency,
                              name: 'Uber Clone Ride Payment',
                              description: 'Pay for your ride',
                              order_id: order.id,
                              handler: async function (response) {
                                    // Verify payment on backend
                                    const verifyRes = await fetch('http://localhost:4000/payment/verify', {
                                          method: 'POST',
                                          headers: {
                                                'Content-Type': 'application/json',
                                          },
                                          body: JSON.stringify({
                                                order_id: order.id,
                                                payment_id: response.razorpay_payment_id,
                                                signature: response.razorpay_signature,
                                          }),
                                    });
                                    const verifyData = await verifyRes.json();
                                    if (verifyData.success) {
                                          alert('Payment Successful!');
                                          navigate('/home');
                                    } else {
                                          alert('Payment Verification Failed!');
                                    }
                              },
                              prefill: {
                                    name: ride?.captain.fullname.firstname,
                                    email: '',
                                    contact: '',
                              },
                              theme: {
                                    color: '#3399cc',
                              },
                              method: {
                                    upi: true,
                                    card: true,
                              },
                        };
                        const rzp = new window.Razorpay(options);
                        rzp.open();
                  };
            } catch (err) {
                  alert('Payment error: ' + err.message);
            }
      };


  return (

    <div className='h-screen'>
          <Link to='/home' className='fixed right-2 top-2  h-10 w-10 bg-white flex items-center justify-center rounded-full ' >
               <i className=' text-lg font-medium ri-home-5-line'></i>
          </Link>
           
          <div className='h-1/2'>
             <LiveTracking />
          </div>
          <div className='h-1/2 p-4'>
               <div className='flex items-centre justify-between'>
             <img className='h-17' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" /> 
              <div className='text-right'>
               <h2 className='text-lg font medium capitalize'>{ride?.captain.fullname.firstname + ' ' + ride?.captain.fullname.lastname}</h2>
               <h4 className='text-xl font-semibold -mt-1 -mb-1 '>{ride?.captain.vehicle.plate}</h4>
               <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
              </div>
          </div>

          <div className='flex gap-2 flex-col items-center justify-between' >
                <div className='w-full mt-5' >
                    
                    <div className='flex items-center gap-5 p-3 border-b-2 '>
                         <i className='text-lg ri-map-pin-2-fill' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >Destination</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >{ride?.destination}</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-5 p-3  '>
                         <i className='text-lg ri-currency-line' ></i>
                         <div>
                            <h3 className='text-lg font-medium' >₹{ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600 ' >To Be Paid</p>
                         </div>
                    </div>
                    
                </div>
          </div>
                <button className='w-full mt-5 bg-blue-600 text-white font-semibold p-2 rounded-lg' onClick={handlePayment}>Make a Payment </button>
          </div>
    </div>
  )
}
export default Riding