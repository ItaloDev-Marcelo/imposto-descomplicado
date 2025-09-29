import logo from '../assets/images/imposto-logo.svg'

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between items-center py-5 px-27'>
        <a><img src={logo} alt='' className='w-[100px]'/></a>
        <ul className='flex flex-row gap-7 list-none font-medium' >
            <li className='text-green-950'>Home</li>
            <li className='text-green-950'>Account</li>
            <li className='text-green-950'>Client</li>
            <li className='text-green-950'>Forms</li>
        </ul>
    </nav>
  )
}

export default Navbar