import React from "react";

const About = () => {
    return(
        <>
            <section className="section-about container">
                Here are the details about our World Atlas website. We provide comprehensive information about countries around the globe, including maps, cultural insights, and interesting facts to help you explore and learn more about the world we live in.
                <br/>
                We're dedicated to making geographical knowledge accessible and engaging for everyone.

                <div className="gradient-cards">
                    <div className="card">
                        <div className="container bg-blue-box">
                            <p className="card-title">India</p>
                            <p>
                                <span className="card-description">Capital:</span> New Delhi<br/>
                                <span className="card-description">Population:</span> 1,393,409,038<br/>
                                <span className="card-description">Interesting Fact:</span> India is the world's largest democracy, with over 1.3 billion people.
                            

                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;