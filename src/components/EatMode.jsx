

function EatMode() {

    return (

        <>
            <div className="eatMode w-full h-30 flex items-center gap-10">
                <div className="mode w-50 h-20 bg-white flex justify-between items-center drop-shadow-[0px_2px_15px_black]">
                    <p>Book A Table</p>
                    <img src="/home_main_meal_bucket_book-a-table-new.png" className="h-15"/>
                </div>

                <div className="mode w-50 h-20 bg-white flex justify-between items-center drop-shadow-[0px_2px_15px_black]">
                    <p>Walk-in Dining</p>
                    <img src="/home_main_meal_bucket_walkin-dining-new.png" className="h-15"/>
                </div>
            </div>
        </>
    )
}

export default EatMode;