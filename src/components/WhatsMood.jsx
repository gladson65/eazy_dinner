

function WhatsMood() {

    return (
        <>
            <div className="whatsMood flex flex-col gap-2 w-full h-auto">

                <h1 className="font-bold text-[18px]">
                    What's Your Mood? | <span className="text-blue-400">See all</span>
                </h1>

                <div className="cuisineContainer flex gap-4 items-center flex-wrap">
                    
                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/north-indian.png" className="h-15"/>
                        <p>North Indian</p>
                    </div>

                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/chinese.png" className="h-15"/>
                        <p>Chinese</p>
                    </div>

                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/south-indiann.png" className="h-15"/>
                        <p>South Indian</p>
                    </div>

                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/italian.png" className="h-15"/>
                        <p>Italian</p>
                    </div>

                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/pan-asian.png" className="h-15"/>
                        <p>Pan Asian</p>
                    </div>

                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/european.png" className="h-15"/>
                        <p>European</p>
                    </div>

                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/casual-eclectic.png" className="h-15"/>
                        <p>Casual Eclectic</p>
                    </div>
                    <div className="cuisineCard w-60 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_2px_gray]">
                        <img src="/japanese.png" className="h-15"/>
                        <p>Japanese</p>
                    </div>
                
                </div>
                

            </div>
        </>
    )
}

export default WhatsMood;