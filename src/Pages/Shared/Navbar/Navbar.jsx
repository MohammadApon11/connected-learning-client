import logo from '../../../assets/image 32.png'

const Navbar = () => {

    const navLink = <>
        <li><a className='font-semibold hover:text-blue-500 hover:border-blue-500 border-transparent cursor-pointer border-b-2 w-1/2'>Home</a></li>
        <li><a className='font-semibold hover:text-blue-500 hover:border-blue-500 border-transparent cursor-pointer border-b-2 w-1/2'>About</a></li>
        <li><a className='font-semibold hover:text-blue-500 hover:border-blue-500 border-transparent cursor-pointer border-b-2 w-1/2'>Course</a></li>
        <li><a className='font-semibold hover:text-blue-500 hover:border-blue-500 border-transparent cursor-pointer border-b-2 w-1/2'>Contact</a></li>
    </>
    return (
        <div className="navbar bg-slate-100-100 lg:px-24 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">

                        {navLink}

                    </ul>
                </div>
                <img className='lg:w-32 w-20' src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex items-center justify-center gap-10">

                    {navLink}

                </ul>
            </div>
            <div className="navbar-end flex items-center lg:gap-3 gap-2">
                <button className='border border-blue-600 rounded-2xl px-4 py-1 font-semibold text-blue-600 hover:bg-blue-600 hover:text-white '>Login</button>
                <button className='border border-blue-600 rounded-2xl px-2 lg:px-4 py-1 font-semibold text-white bg-blue-600 '>Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;