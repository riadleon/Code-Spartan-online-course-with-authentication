import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import logo from '../../../assests/logo/logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const activeLink = 'p-3 rounded-b-xl bg-blue-500 text-black font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400';
    const activeChartLink = 'p-3 rounded-b-xl bg-blue-500 text-black font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
    const normalLink = '';
    return (
        <div className=' text-cyan-300  px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-full-xl md:px-24 lg:px-8 bg-transparent '>
            <div className='relative flex items-center justify-between'>
                <NavLink
                    to='/'
                    aria-label='Code Spartan'
                    title='Quiz Hero'
                    className='inline-flex items-center'
                >
                    <img className='flex-shrink-0 w-8 h-8 rounded-full text-cyan-300' src={logo} alt="" />
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Code Spartan
                    </span>
                </NavLink>
                <ul className='flex items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/home'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => isActive ? activeLink : normalLink}                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink

                            className={({ isActive }) => isActive ? activeLink : normalLink}
                            to='/courses'
                            aria-label='courses'
                            title='courses'

                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/faq'
                            aria-label='faq'
                            title='faq'
                            className={({ isActive }) => isActive ? activeChartLink : normalLink}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            aria-label='blog'
                            title='blog'
                            className={({ isActive }) => isActive ? activeChartLink : normalLink}
                        >
                            BLOG
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/login'
                            aria-label='login'
                            title='login'
                            className={({ isActive }) => isActive ? activeChartLink : normalLink}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/register'
                            aria-label='register'
                            title='register'
                            className={({ isActive }) => isActive ? activeChartLink : normalLink}
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 '
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-cyan-300' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <NavLink
                                            to='/'
                                            aria-label='Company'
                                            title='Company'
                                            className='inline-flex items-center'
                                        >
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 32 32'
                                                fill='currentColor'
                                                className='flex-shrink-0 w-8 h-8 rounded-full text-gray-900'
                                            >
                                                <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                                            </svg>
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                Quiz Hero
                                            </span>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                                                <path
                                                    fill='currentColor'
                                                    d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <NavLink

                                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                                to='/courses'
                                                aria-label='courses'
                                                title='courses'

                                            >
                                                Courses
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/faq'
                                                aria-label='faq'
                                                title='faq'
                                                className={({ isActive }) => isActive ? activeChartLink : normalLink}
                                            >
                                                FAQ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/blog'
                                                aria-label='blog'
                                                title='blog'
                                                className={({ isActive }) => isActive ? activeChartLink : normalLink}
                                            >
                                                BLOG
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/login'
                                                aria-label='login'
                                                title='login'
                                                className={({ isActive }) => isActive ? activeChartLink : normalLink}
                                            >
                                                Login
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/register'
                                                aria-label='register'
                                                title='register'
                                                className={({ isActive }) => isActive ? activeChartLink : normalLink}
                                            >
                                                Register
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;