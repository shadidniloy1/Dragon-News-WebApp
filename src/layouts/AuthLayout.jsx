import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const AuthLayout = () => {
  return (
    <div className='bg-[#F3F3F3] font-poppins'>
        <header className='w-11/12 mx-auto py-3'>
            <Navbar />
        </header>
        <Outlet />
    </div>
  )
}

export default AuthLayout