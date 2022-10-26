import React from 'react';
import { FaFacebook, FaGitAlt, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assests/logo/logo.png'


const Footer = () => {
    return (
        <div>
            <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <Link className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                                <img className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900" src={logo} alt="" />
                            </div>
                            <span className="self-center text-2xl font-semibold">Code Spartan</span>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link to='/blog'>Feature</Link>
                                </li>
                                <li>
                                    <Link to='/courses'>Courses</Link>
                                </li>
                                <li>
                                    <Link to='/courses'>Pricing</Link>
                                </li>
                                <li>
                                    <Link to='/faq'>F.A.Q</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase dark:text-gray-50">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link to='/blog'>Blog</Link>
                                </li>
                                <li>
                                    <Link>Feature</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase dark:text-gray-50">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link>Leo</Link>
                                </li>
                                <li>
                                    <Link>Hero</Link>
                                </li>
                                <li>
                                    <Link>Jhankar</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase dark:text-gray-50">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <Link to='/register'> <FaFacebook></FaFacebook> </Link>
                                <Link to='/register'> <FaTwitter></FaTwitter> </Link>
                                <Link to='/register'> <FaGithub></FaGithub> </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-400">© 2022 riadleon. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;