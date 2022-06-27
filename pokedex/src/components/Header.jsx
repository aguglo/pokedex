import "./header.css"
import pokeball from "../assets/Pokeball.png"
import arrow from "../assets/Arrow.svg"

function Header () {
    return (
        <header>
            <div className="header">
                <div className="title">
                    <img src={pokeball} alt="logo-pokeball"className="pokeball" />
                    <h1>Pokédex</h1>
                </div>
                <div className="title2">
                <span>#</span>
                <img src={arrow} alt="flecha" className="flecha"/>
                </div>
            </div>
            <input type="text" name="" id="" placeholder="Buscar"/>

        </header>
    )
}

export default Header