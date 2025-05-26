import Banner from "../components/Banner";
import EatMode from "../components/EatMode";
import Foodie from "../components/Foodie";
import RestroNear from "../components/RestroNear";
import WhatsMood from "../components/WhatsMood";
import PopularLocations from "../components/PopularLocations";


function Home() {

    return (

        <>
            {/* home container is starting */}
            <div className="home-container w-full h-auto flex flex-col bg-[#eee]">
                {/* for empty space at the top */}
                <div className="w-[100%] h-18 bg-[#eee]"></div>

                {/* banner component */}
                <Banner />
                
                {/* content and selection */}
                <section className="contentSection w-full h-auto flex flex-col gap-6">
                    <EatMode />
                    <Foodie />
                    <RestroNear />
                    <WhatsMood />
                    <PopularLocations />
                </section>
              
                
                
            </div>
        </>
    
    )
}

export default Home;