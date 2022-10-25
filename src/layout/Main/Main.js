import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';
import './Main.css'

const Main = () => {
    return (
        <div className='body'>
            <Header></Header>

            
                <Outlet></Outlet>


           
            <Footer></Footer>
        </div>
    );
};

export default Main;