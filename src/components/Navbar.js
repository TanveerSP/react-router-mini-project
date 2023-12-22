import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import {toast} from "react-hot-toast"

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly items-center w-11/12 
    max-w[1160px] py-4 mx-auto '>
      <Link to="/" >
        <img src={logo} alt='Logo' width={160} height={32} loading='lazy' />
      </Link>

      <nav >
        <ul className='flex gap-x-6 text-xl text-[#c2c2c2]  '>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - SignUp - LogOut - Dashbord  */}

      <div className='flex items-center gap-x-4  '>
        {
          !isLoggedIn && // <- this condition for if not logged page
          <Link to="/login">
            <button className='bg-[#171b1f] text-[#c2c2c2] py-[8px] 
            px-[12px] rounded-md border border-[#21262c] '>
              Log In
            </button>
          </Link>
        }

        {
          !isLoggedIn && // <- this same as upper 
          <Link to="/signup">
            <button className='bg-[#171b1f] text-[#c2c2c2] py-[8px] 
            px-[12px] rounded-md border border-[#21262c] '>
              Sing up
            </button>
          </Link>
        }

        {
          isLoggedIn && //<-- if page is login then show logout page 
          <Link to="/">
            <button className='bg-[#171b1f] text-[#c2c2c2] py-[8px] 
            px-[12px] rounded-md border border-[#21262c] '
            onClick={()=> {
              setIsLoggedIn(false);
              toast.success("Logged Out");
              
            }}>
              Log Out
            </button>
          </Link>
        }

        {
          isLoggedIn &&  // <- if page is login then go to Dashboard page
          <Link to="/Dashboard">  
            <button className='bg-[#171b1f] text-[#c2c2c2] py-[8px] 
            px-[12px] rounded-md border border-[#21262c] '>
              Dashboard
            </button>
          </Link>
        }
      </div>

    </div>
  )
}

export default Navbar