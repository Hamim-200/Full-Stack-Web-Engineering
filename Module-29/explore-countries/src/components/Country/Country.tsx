import { useState } from "react";
import type { CountryType } from "../../type";
import './Country.css';


export interface CountryProps {
    country: CountryType;
    handleVisitedCountry: (country: CountryType) => void;
    handleVisitedFlag: (flag: string) => void;
}


export default function Country({ country, handleVisitedCountry, handleVisitedFlag }: CountryProps) {


    const [visited, setVisited] = useState<boolean>(false);
    const handleVisited = () => {
        setVisited(!visited);

        handleVisitedCountry(country);
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

            <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>add flag as visited</button>
        </div>
    )
}