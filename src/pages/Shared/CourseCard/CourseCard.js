import React from 'react';
import { FaFilePdf, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();



const CourseCard = ({ course }) => {
    const { img, instructor, title, rating, name, price, id } = course;
    console.log(course);

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }




    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <Link className='className="mb-0 capitalize dark:text-gray-100"'>{name}</Link>
                    </div>

                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={onButtonClick} className='text-red-600 text-3xl mt-2'> <FaFilePdf></FaFilePdf> </button>}
                    </Pdf>




                </div>
                <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="dark:text-gray-100"><span>&#8226;</span> Instructor: {instructor}</p>
                        <p className="dark:text-gray-100"><span>&#8226;</span> <strong>Price: ${price}</strong> </p>
                        <p className="dark:text-gray-100">{rating.number}</p>
                    </div>
                    <Link to={`/courses/${id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Get premium Access</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;