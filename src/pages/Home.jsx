import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
    return(
        <main className="hero-section main">
           <div className="container grid grid-two-cols">
            <div className="hero-content">
                <h1 className="heading-xl">
                    Explore the World with Our Comprehensive Atlas  
                </h1>
                <p className="paragraph">
                    Discover detailed maps, country profiles, and cultural insights all in one place. Start your journey today!
                </p>
                <button className="btn btn-darken btn-inline bg-white-box">Get Started<FaLongArrowAltRight/></button>
            </div> 
            <div className="hero-image"></div>
           </div>
        </main>
    )
}

export default Home;