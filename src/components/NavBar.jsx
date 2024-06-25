import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <nav className='flex items-center h-16 border-b text-white bg-gradient-to-r from-black to-black lg:to-gray-800'>
                <div className='flex items-center px-6 lg:px-0 justify-between mx-auto w-full max-w-screen-xl'>
                    <h1 className='font-bold tracking-widest text-xl'>Brix</h1>
                    <ul className='hidden lg:flex text-sm'>
                        <li className='px-4 hover:text-cyan-400'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='px-4 hover:text-cyan-400'>
                            <Link to={'aboutme'}>About Me</Link>
                        </li>
                        <li className='px-4 hover:text-cyan-400'>
                            <Link to={'projects'}>Projects</Link>
                        </li>
                        <li className='px-4 hover:text-cyan-400'>
                            <Link to={'contact'}>Contact Me</Link>
                        </li>
                    </ul>
                    <button className='lg:hidden' onClick={toggleMenu}>
                        <HiOutlineBars3 className='text-3xl' />
                    </button>
                </div>
            </nav>
            <div
                className={`lg:hidden flex items-center justify-center transition-all overflow-hidden bg-black  w-full  ${
                    open ? 'h-fit py-10' : 'h-0 '
                }`}
            >
                <ul onClick={toggleMenu} className='flex flex-col text-white items-center gap-3 text-sm'>
                    <li className='px-4 hover:text-cyan-400'>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li className='px-4 hover:text-cyan-400'>
                        <Link to={'aboutme'}>About Me</Link>
                    </li>
                    <li className='px-4 hover:text-cyan-400'>
                        <Link to={'projects'}>Projects</Link>
                    </li>
                    <li className='px-4 hover:text-cyan-400'>
                        <Link to={'contact'}>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
