

function RestroCard(props) {

    const { img, name, address, rating, offer } = props.data

    return (

        <>
            <div className="modeRestro w-72 h-60 bg-white flex flex-col items-center drop-shadow-[0px_2px_2px_gray]">
                <div className="h-50">
                    <img src={img} className="w-full h-[170px] rounded-[8px]"/>
                </div>
                
                <div className="cardContent w-full flex flex-col gap-2">
                    <div className="flex justify-between text-[13px]">
                        <p className="font-bold">{name}</p>
                        <span className="rating text-white w-10 text-center">{rating}</span>
                    </div>

                    <div>
                        <p className="text-[10px]">{address}</p>
                        <p className="text-[14px] text-orange-500">{offer}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default RestroCard;