import '../styling/Header.css';


function Header() {

    return (
        <>
            {/* navigation menu of the webapp */}
            <nav className='fixed'>
                <div className='firstContent'>
                    {/* here is the app logo */}
                    <h1>eazydinner</h1>
                    
                    {/* location input */}
                    <div className='logoLocation'>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>your location</p>
                        <i className="fa-solid fa-caret-down"></i>  
                    </div>

                    {/* Search resturants */}
                    <div className='searchDiv'>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p>Search resturants, locations or cuisines</p>
                    </div>
                </div>

                <div className='secondContent'>
                    <button>Be Prime!</button>
                    <button>Contact Us</button>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}

export default Header;