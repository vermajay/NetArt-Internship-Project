import React from 'react'
import _1 from './assets/1.png'
import _2 from './assets/2.png'
import _3 from './assets/3.png'
import logo from './assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const App = () => {
  return (
    <div className='bg-gradient-to-t from-[#FFF9B2] font-serif'>

      <div className='flex justify-center mb-8 mt-2'>
        <img alt='logo' src={logo} width={450}/>
      </div>


      <div className='flex mb-14 flex-wrap md:flex-nowrap'>

        <div>
          <img alt='1' src={_1} width={950}/>
        </div>


        <div>
          <p className='font-bold mb-2 p-4'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul className='list-disc font-medium text-[18px] tracking-tight mx-5 leading-5 pl-5'>
            <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.
            </li>
          </ul>
          <img alt='2' src={_2} className='my-4'/>
          <p className='text-lg leading-5 p-2'>Government of India has awarded the <span className='font-semibold'>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>

      </div>


      <div className='text-center font-semibold tracking-tighter my-4 p-2'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</div>


      <div className='max-w-[77%] mx-auto'>
        <img alt='3' src={_3}/>
      </div>


      <div className='text-center font-medium text-[16.5px] my-4'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</div>


      <div className='h-1 bg-[#B9272B] border mx-5'></div>


      <div className='text-center font-bold my-5'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>


      <div className='text-center px-7 text-[15px] font-medium mb-8'>CHEMICALS & PROCESS <span className='text-red-600'>|</span> POWER <span className='text-red-600'>|</span> WATER & WASTE WATER <span className='text-red-600'>|</span> OILS & GAS <span className='text-red-600'>|</span> PHARMA <span className='text-red-600'>|</span> SUGARS & DISTILLERIES <span className='text-red-600'>|</span> PAPER & PULP <span className='text-red-600'>|</span> MARINE & DEFENCE <span className='text-red-600'>|</span> METAL & MINING <span className='text-red-600'>|</span> FOOD & BEVERAGE <span className='text-red-600'>|</span> PETROCHEMICAL & REFINERIES <span className='text-red-600'>|</span> SOLAR <span className='text-red-600'>|</span> BUILDING <span className='text-red-600'>|</span> HVAC <span className='text-red-600'>|</span> FIRE FIGHTING <span className='text-red-600'>|</span> AGRICULTURE & RESIDENTIAL</div>

      
      <div>
        <div className='bg-[#EC3237] m-2 flex flex-wrap items-center justify-evenly min-h-[15rem] md:min-h-[8rem] text-white font-medium text-lg'>
          <div className='flex flex-wrap sm:-mt-8 items-baseline gap-1'>
            <div className='bg-white rounded-full p-1'>
              <div>
                <MdCall className='text-[#EC3237] text-xl'/>
              </div>
            </div>
          <div>Toll free <span className='font-semibold'>1800 200 1234</span></div>
          </div>
          <div className='flex flex-wrap sm:-mt-8 items-baseline gap-1'>
            <div><FaFacebook className='text-3xl'/></div>
            <div>www.facebook.com/cripumps</div>
          </div>
            <div className='flex flex-wrap sm:-mt-8 items-baseline gap-1'>
              <div><BsGlobe2 className='text-3xl'/></div>
              <div>www.crigroups.com</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App