import {useState} from 'react'
import logo from '../assets/images/logo-removebg-preview.png'
import { MdManageSearch } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { AiFillDatabase } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import Personal01 from '../Form/PersonalForm/test/Personal01';
import Personal02 from '../Form/PersonalForm/test/Personal02';
import Personal03 from '../Form/PersonalForm/test/Personal03';
import Personal04 from '../Form/PersonalForm/test/Personal04';
import CommunStepContainer from '../utils/CommumStepContainer';
const Deskboard = () => {

   const [nextStep, setNextStep] = useState(0);

   const nextForm = () => {
       switch(nextStep) {
         case 1:
            return <CommunStepContainer><Personal01 next={() => setNextStep(nextStep + 1)} /></CommunStepContainer>;
         break;  
         case 2:
            return <CommunStepContainer><Personal02 next={() => setNextStep(nextStep + 1)} /></CommunStepContainer>;
         break;
         case 3:
            return <CommunStepContainer><Personal03 next={() => setNextStep(nextStep + 1)} /></CommunStepContainer>;
         break;
         case 4:
            return <CommunStepContainer><Personal04 next={() => setNextStep(nextStep + 1)} /></CommunStepContainer>;
         break;       
       }
   }

  return (
    <div className='flex flex-row'>
        <aside className='flex flex-col w-75 bg-gray-200' >
            <li className='mt-10 mb-5'><a href='#'><img src={logo}  alt='logo' className='w-25' /></a></li>
           <nav className='flex flex-col gap-5 p-5.5  '>
             <ul className='list-none flex flex-col gap-10 text-lg font-semibold ml-2.5'>
              <li className='hover:text-green-300 transform-3d cursor-pointer flex flex-row items-center gap-4'> <IoHomeOutline /> deskboard</li>
              <li className='hover:text-green-300 transform-3d cursor-pointer flex flex-row items-center gap-4'><IoMdInformationCircleOutline/> infomation</li>
              <li className='hover:text-green-300 transform-3d cursor-pointer flex flex-row items-center gap-4'> < AiFillDatabase/> Data</li>
              <li className='hover:text-green-300 transform-3d cursor-pointer flex flex-row items-center gap-4'><CgDetailsMore />  details</li>
              <li className='hover:text-green-300 transform-3d cursor-pointer flex flex-row items-center gap-4'><IoMdSettings/> Config</li>
             </ul>
           </nav>
        </aside>
        <main className='flex flex-col w-full h-screen bg-white relative'>
            <div className='absolute top-35 left-80'>
                {nextForm()}
            </div>
            <header className='bg-gray-100 p-4 flex flex-row justify-between items-center'>
                 <form className='flex flex-row gap-5'>
                    <input type='text' className='input w-100' placeholder='search...' />
                    <button type='submit' className='btn'><MdManageSearch/> </button>
                 </form>
                 <div>
                    <button className='btn text-1xl mr-3'><RxExit /></button>
                 </div>
            </header>
            <section className='relative'>
              { nextStep <= 0 && <h2 className='text-center items-center mt-70 text-3xl font-bold'>Not data found</h2>}
               <button className='btn absolute right-7 top-5 btn-sucess rounded-2xl w-[50px] h-[50px]'
               onClick={() => setNextStep(nextStep + 1)}><IoIosAddCircleOutline/></button>
            </section>

        </main>
    </div>
  )
}

export default Deskboard