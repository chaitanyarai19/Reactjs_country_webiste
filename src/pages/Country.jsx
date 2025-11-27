import { useEffect, useTransition } from "react";

const Country = () => {
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
       
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