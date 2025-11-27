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
                                <li className="country-card" key={index}>
                                    <div className="country-flag">
                                        <img src={country.flags.png} alt={country.name.common} />
                                    </div>
                                    <div className="country-info">
                                        <h3 className="country-name">{country.name.common}</h3>
                                        <p>
                                            <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
                                        </p>
                                        <p>
                                            <strong>Population:</strong> {country.population.toLocaleString()}
                                        </p>
                                        <p>
                                            <strong>Region:</strong> {country.region}
                                        </p>
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