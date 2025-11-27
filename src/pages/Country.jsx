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
            <h1>Country Page</h1>
        </>
    )
}

export default Country;