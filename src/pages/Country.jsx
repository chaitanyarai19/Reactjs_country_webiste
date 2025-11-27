import { useEffect } from "react";

const Country = () => {
    useEffect(() => {
        document.title = "Country Page";
    }, []);
    return(
        <>
            <h1>Country Page</h1>
        </>
    )
}

export default Country;