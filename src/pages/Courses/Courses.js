import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import logo from '../../assests/logo/logo.png'

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div className='flex align-middle content-center '>
            <div className=" ">
                <div className="hero-content ">

                    <div className='w-4/5 h-auto  grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                        {
                            allCourses.map(course => <CourseCard
                                key={course.id}
                                course={course}
                            ></CourseCard>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="w-full h- p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                    <div className="">
                        <img className="text-center w-12 h-12 rounded-full dark:bg-gray-500" src={logo} alt="" />
                        <div>
                            <h2 className="text-lg font-semibold">Code Spartans</h2>

                        </div>
                    </div>
                    <div className="divide-y divide-gray-700 items-center">
                        <ul className="pt-2 pb-4 space-y-1 text-xl">
                            <li className="dark:bg-gray-800 dark:text-gray-50 ">
                                {
                                    allCourses.map(course => <p key={course.id}>
                                        <Link className='hover:bg-gray-100 text-cyan-300 hover:text-cyan-900' to={`/courses/${course.id}`}>{course.name}</Link>
                                    </p>)
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;