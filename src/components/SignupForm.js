import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'


const SignupForm = ({ setIsLoggedIn }) => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student")

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
    if (formData.password != formData.confirmPassword) {
      toast.error("passwords do no match");
      return
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData
    }

    const finalData = {
      ...accountData,
      accountType 
    }

    console.log("printing final account data")
    console.log(finalData)

    navigate("/dashboard");
  }


  return (
    <div>
      {/* student-instructor tab  */}

      <div className='flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
        <button
          className={`${accountType === "student" ?
            " bg-gray-900 text-white " : " bg-transparent text-gray-200 "} py-2 
        px-5 rounded-full transition-all duration-200 `}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${accountType === "instructor" ?
            " bg-gray-900 text-white " : " bg-transparent text-gray-200 "} py-2 
        px-5 rounded-full transition-all duration-200 `}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and last name div  */}
        <div className='flex gap-x-4 mt-10 mb-4'>
          <label className='w-full '>
            <p
              className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '
            >First Name
              <sup className='text-pink-400' >*</sup>
            </p>

            <input type="text"
              required
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
              className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                     border-b-2 border-gray-200 '
            />
          </label>
          <label className='w-full '>
            <p
              className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '
            >Last Name
              <sup className='text-pink-400' >*</sup>
            </p>
            <input type="text"
              required
              name='lastName'
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                     border-b-2 border-gray-200 '
            />
          </label>
        </div>

        {/* email Add */}
        <label className='w-full mt-4 '>
          <p
            className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '
          >Enter Your Email
            <sup className='text-pink-400' >*</sup>
          </p>
          <input type="email"
            required
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email}
            className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                     border-b-2 border-gray-200 '
          />
        </label>

        {/* createPassword and confirm password  */}
        <div className='flex gap-x-4 mt-4' >
          <label className='w-full relative '>
            <p
              className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '
            >Create Password
              <sup className='text-pink-400' >*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                     border-b-2 border-gray-200 '
            />
            <span
              className=' absolute right-3 top-[38px] cursor-pointer '
              onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>

          <label className='w-full relative '>
            <p
              className='text-[0.875rem] text-white mb-1 leading-[1.375rem] '
            >Confirm Password
              <sup className='text-pink-400' >*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              className='bg-gray-800 rounded-[0.5rem] text-white w-full p-[12px]
                     border-b-2 border-gray-200 '
            />
            <span
              className=' absolute right-3 top-[38px] cursor-pointer '
              onClick={() => setshowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
            </span>
          </label>
        </div>

        <button
          className='w-full bg-yellow-400 rounded-[8px] 
         mt-7 font-medium text-black p-[5px] '
        >
          Create Account
        </button>
      </form>

    </div>
  )
}

export default SignupForm