import { useState } from "react";
import type { CountryType } from "../../type";
import './Country.css';


export interface CountryProps {
    country: CountryType;
}


export default function Country({ country }: CountryProps) {


    const [visited, setVisited] = useState<boolean>(false);
    const handleVisited = () => {
        setVisited(!visited);
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
    }

    return (
        <div className={`country ${visited ? 'country-visited' : ''}`}>
            <h3>{country.name.common} </h3>
            <p>Capital: {country.capital.capital}</p>
            <img src={country.flags.flags.png} alt={country.name.common} />

            <h4>Populations : {country.population.population} </h4>

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Mark as Visited'} </button>
        </div>
    )
}