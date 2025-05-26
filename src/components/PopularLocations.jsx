import { popularLocation } from "../utils/popularLocations.js";
import PopularRstroCard from "./PopularRestroCard.jsx";
import { useState, useEffect } from "react";

function PopularLocations() {

    // to store popular restro location wise
    const [ popularRestro, setPopularRestro ] = useState([]);

    // getting the user location
    let userLocation = 'Delhi NCR';
    
    const restroArray =popularLocation.filter((location) => {
        if (location.location == userLocation) {
            return location;
        }
    })

    useEffect(()=> {
        setPopularRestro(restroArray[0].restro)
        console.log(popularRestro)
    }, [popularRestro])


    return (
        <>
            <div className="popularLocations flex flex-col gap-2 w-full h-auto">

                <h1 className="font-bold text-[18px]">
                    Popular Locations
                </h1>

                <div className="popularRestroContainer flex gap-4 items-center flex-wrap">
                    {
                        popularRestro.length > 0 &&
                        popularRestro.map((restro, i)=> {
                            return <PopularRstroCard key={i} data={restro}/>
                        })
                    
                    }
                </div>
                
            </div>
        </>
    )
}

export default PopularLocations;