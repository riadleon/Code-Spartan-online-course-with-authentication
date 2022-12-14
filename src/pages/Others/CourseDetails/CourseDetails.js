import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { img, instructor, title, rating, name, price, id } = courseDetails;
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-200 shadow-xl  justify-between content-center">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className='text-4xl'>{name}</h2>
                    <h1 className='text-6xl'>${price}</h1>
                    <h2 className="card-title ">{title}</h2>

                    <div className="card-actions">
                        <Link to='/courses'> <button className="btn btn-danger">Go Back</button></Link>
                        <Link to='/thankyou'> <button className="btn btn-primary">Buy Now</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;