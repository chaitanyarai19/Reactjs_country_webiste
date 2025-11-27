import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../Components/UI/Loader";

const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countires, setCountries] = useState([]);

    useEffect(() => {
       startTransition(async() => {
            const res = await getCountryData();
            setCountries(res.data);
       });
       
    }, []);

     if(isPending){
            return <h1><Loader/></h1>;
        }
    return(
        <>
            <section className="country-section">
                <ul className="grid grid-four-cols">
                    {
                        countires.map((country, index) => {
                            return(
                                <li className="country-card card" key={index}>
                                    <div className="container-card bg-white-box">
                                        <img src={country.flags.png} alt={country.name.common} />
                                   
                                    <div className="country-info">
                                        <h3 className="card-title">{country.name.common}</h3>
                                        <p className="card-title">
                                            <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
                                        </p>
                                        <p className="card-title">
                                            <strong>Population:</strong> {country.population.toLocaleString()}
                                        </p>
                                        <p className="card-title">
                                            <strong>Region:</strong> {country.region}
                                        </p>
                                    </div>
                                     </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default Country;