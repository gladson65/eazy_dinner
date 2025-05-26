

function Foodie() {

    return (

        <>
            <div className="foodieContainer w-full h-30 flex flex-col gap-2">
                
                <h1 className="font-bold text-[18px]">
                    Hi Foodie, Dine Anytime!
                </h1>

                <div className="foodieCards flex gap-4 items-center">

                    <div className="modeFoodie w-45 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_15px_black]">
                        <img src="/lunch.png" className="h-15"/>
                        <p>Lunch</p>
                    </div>

                    <div className="modeFoodie w-45 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_15px_black]">
                        <img src="/dinner.jpg" className="h-15"/>
                        <p>Dinner</p>
                    </div>

                    <div className="modeFoodie w-45 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_15px_black]">
                        <img src="/fast-food.jpg" className="h-15"/>
                        <p>Fast Food</p>
                    </div>

                    <div className="modeFoodie w-45 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_15px_black]">
                        <img src="/near-me.jpg" className="h-15"/>
                        <p>Near Me</p>
                    </div>

                    <div className="modeFoodie w-45 h-18 bg-white flex gap-5 items-center drop-shadow-[0px_2px_15px_black]">
                        <img src="/Breakfast.png" className="h-15"/>
                        <p>Breakfast</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Foodie;