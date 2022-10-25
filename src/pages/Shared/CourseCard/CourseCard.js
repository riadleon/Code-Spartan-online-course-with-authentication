import React from 'react';

const CourseCard = ({ course }) => {
    const { img, instructor, title, rating, name, price } = course;
    console.log(course);
    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">{title}</p>
                        <p className="dark:text-gray-100"> Instructor: {instructor}</p>
                        <p className="dark:text-gray-100">{rating.number}</p>
                        <p className="dark:text-gray-100"> <strong>Price: ${price}</strong> </p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Get premium Access</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;