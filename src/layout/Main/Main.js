import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer';
import Header from '../../pages/Shared/Header/Header';
import SideBar from '../../pages/Shared/SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;