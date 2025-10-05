import logo from '../assets/images/logo-removebg-preview.png'
import { MdManageSearch } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { AiFillDatabase } from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";

const Deskboard = () => {
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
        <main className='flex flex-col w-full h-screen bg-white'>
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
               <h2 className='text-center items-center mt-70 text-3xl font-bold'>Not data found</h2>
               <button className='btn absolute right-7 top-5 btn-sucess rounded-2xl w-[50px] h-[50px]  '><IoIosAddCircleOutline/></button>
            </section>

        </main>
    </div>
  )
}

export default Deskboard