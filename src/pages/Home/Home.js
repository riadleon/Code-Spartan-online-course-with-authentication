import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useLoaderData } from 'react-router-dom';


const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1665208447105-fe9abd5f0e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-extrabold  ">Hello there</h1>
                        <p className="mb-5 text-xl">Welcome to the most efficient learning site in Bangladesh Right now. People are now get more privilege. Code Spartan Academy Helped it so much.</p>
                        <Link to='/courses'><button className="btn btn-primary">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home