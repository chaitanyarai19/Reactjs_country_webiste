import { useEffect, useTransition } from "react";
import { getCountryData } from "../api/postApi";

const Country = () => {
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
       startTransition(() => {
            getCountryData();
       });
       
    }, []);

     if(isPending){
            return <h1>Loading...</h1>;
        }
    return(
        <>
            <h1>Country Page</h1>
        </>
    )
}

export default Country;