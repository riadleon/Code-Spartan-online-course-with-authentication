import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Courses = () => {
    const allCourses = useLoaderData();

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
                        <div className="flex items-center p-2 space-x-4">
                            {/* <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" /> */}
                            <div>
                                {/* <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                                <span className="flex items-center space-x-1">
                                    <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                                </span> */}
                            </div>
                        </div>
                        <div className="divide-y divide-gray-700">
                            <ul className="pt-2 pb-4 space-y-1 text-xl">
                                <li className="dark:bg-gray-800 dark:text-gray-50">
                                    {
                                        allCourses.map(course => <p key={course.id}>
                                            <Link to='/courses'>{course.name}</Link>
                                        </p>)
                                    }
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        {
                            allCourses.map(course => <CourseCard
                            key={course.id}
                            course={course}
                            ></CourseCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;