import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const LoginFrom = ({ setIsLoggedIn }) => {

    const goToDashboard = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false)

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In");
        goToDashboard("/dashboard");
    }


    return (


        <form onSubmit={submitHandler}
            className='flex flex-col w-full gap-y-4 mt-6  '
        >

            <label className='w-full '>
                <p
                    className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '
                >Email Address
                    <sup className='text-pink-400' >*</sup>
                </p>
                <input
                    className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                     border-b-2 border-gray-200 '
                    required
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email Address'
                    name='email'
                />
            </label>

            <label className='w-full  relative'>
                <p className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '>
                    Password
                    <sup className='text-pink-400' >*</sup>
                </p>
                <input
                    className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                    border-b-2 border-gray-200 '
                    required
                    type={showPassword ? "text" : "password"}  // Fixed type attribute
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    name='password'
                    id='password'  // Added id attribute
                />
                <span
                    className=' absolute right-3 top-[38px] cursor-pointer '
                    onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ?
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                </span>

                <Link to="#">
                    <p
                        className='text-xs mt-1 text-blue-300 max-w-max 
                        ml-auto  '
                    >
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button
                className='bg-yellow-400 rounded-[8px] 
                mt-7 font-medium text-black p-[5px] '
            >
                Sing In
            </button>

        </form>

    )
}

export default LoginFrom