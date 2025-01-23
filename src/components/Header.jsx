import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [count, setCount] = useState('0');
  return (
    <div className=' flex justify-between items-center px-8 fixed top-0 w-full h-[60px] bg-white z-50 shadow-md '>

      <div className=' w-full flex justify-center gap-8 items-center'>

        <div className=''>
          <Link to='/'><img className=' w-[150px] h-[20px] object-cover  ' src="https://images.ctfassets.net/afluk6wxa60f/7HhDnKTmFakdqUVoQdfnIE/3c9c7e2eda4fce39459b93e06c2f4a5d/Tyroola_logo_185x185.png" alt="" />
          </Link>
          
        </div>

        <div className=' flex justify-center items-center gap-2'>
        <Link to='/tyres'>Tyres</Link>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>

        <div className=' flex justify-center items-center gap-2'>
        <Link to='/wheels'>Wheels</Link>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>

        <div className=' flex justify-center items-center gap-2'>
        <Link to='/servicerepairs'>Service/Repairs</Link>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>

        <div className=' flex justify-center items-center gap-2'>
          <p>Deals</p>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>


      </div>

      <div className=' w-full flex justify-end gap-8 items-center '>

        <div className=' flex justify-center items-center gap-2'>
          <p>Fitting/Delivery</p>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>

        <div className=' flex justify-center items-center gap-2'>
          <p>Tyre Guide</p>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>

        <div className=' flex justify-center items-center gap-2'>
          <p>Help</p>
          <p><IoIosArrowDown color='#000000' /></p>

        </div>


        <div className=' flex justify-center items-center gap-2'>

          <p><IoCartOutline size={30} /></p>

          <div className=' fixed flex justify-center items-center  bg-yellow-500 text-white top-1 right-6 rounded-full  w-6 h-6 border border-black'>{count}</div>


        </div>



      </div>

    </div>
  )
}

export default Header
