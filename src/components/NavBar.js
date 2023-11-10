import CartWidget from "./CartWidget";
import "bulma/css/bulma.css";

function NavBar (){

    return (
        <nav>
            <h3>Smash Valencia</h3>
            <div>
                <button>Marca</button>
                <button>Tipo</button>
                <button>Material</button>
            </div>
            <CartWidget/>
        </nav>
        
    )
}

export default NavBar;