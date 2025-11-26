import countryData from "../../api/countryData.json";

const HeroSection = () => {
    return(
        <section className="section-about container">
                Here are the details about our World Atlas website. We provide comprehensive information about countries around the globe, including maps, cultural insights, and interesting facts to help you explore and learn more about the world we live in.
                <br/>
                We're dedicated to making geographical knowledge accessible and engaging for everyone.

                <div className="gradient-cards">
                    {countryData.map((country) => {
                        return(
                            <div className="card" key={country.id}>
                                <div className="container-card bg-blue-box">
                                    <p className="card-title">{country.countryName}</p>
                                    <p>
                                        <span className="card-description">Capital:</span> {country.capital}<br/>
                                        <span className="card-description">Population:</span> {country.population.toLocaleString()}<br/>
                                        <span className="card-description">Interesting Fact:</span> {country.interestingFact}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
\
                </div>
            </section>
    )
}         

export default HeroSection;