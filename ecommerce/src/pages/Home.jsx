import React from 'react'
import Navbar from "../components/Nabar"
import Announcement from "../components/Announcement"
import Slider from "../components/Slider"



const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />

        </div>
    )
}

export default Home;
