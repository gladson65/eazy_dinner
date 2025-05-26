

function PopularRstroCard(props) {

    
    return (
        <>
            
               
            <div className="restroCard w-60 h-20 text-white flex flex-col items-center justify-center bg-[url(/eatout_location-2.png)] drop-shadow-[0px_2px_2px_gray]">
                <p>{props.data.name}</p>
                <p>{props.data.number} Restaurants</p>
            </div>
            
            
        </>
    )
}

export default PopularRstroCard;