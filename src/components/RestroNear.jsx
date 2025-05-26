import { restroNear } from "../utils/restroNear.js";
import RestroCard from "./RestroCard.jsx";


function RestroNear() {

    return (

        <>
            <div className="restroNearContainer w-full h-auto flex flex-col gap-2">
                
                <h1 className="font-bold text-[18px]">
                    Restaurants Near You | <span className="text-blue-400">See all</span>
                </h1>

                <div className="restroCards flex gap-4 items-center">
                    
                    {
                        restroNear &&
                        restroNear.map((restro) => {
                            return <RestroCard key={restro.id} data={restro}/>
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default RestroNear;