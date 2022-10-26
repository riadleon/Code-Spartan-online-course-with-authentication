import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useState } from 'react';


const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);



    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },
        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }



    return (
        <div className=''>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1665208447105-fe9abd5f0e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-extrabold text-cyan-300 ">Hello there</h1>
                        <p className="mb-5 text-xl ">Welcome to the most efficient learning site in Bangladesh Right now. People are now get more privilege. Code Spartan Academy Helped it so much.</p>
                        <Link to='/courses'><button className="btn btn-primary">Get Started</button></Link>
                    </div>

                </div>
            </div>

            <div className=''>
                <MapContainer
                    center={{ lat: 51.505, lng: -0.09 }}
                    zoom={13}
                    scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />
                </MapContainer>,
            </div>

        </div>
    );
};

export default Home