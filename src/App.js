import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "bulma/css/bulma.css";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting="Bienvenidos a Smash Valencia"/>
        </div>
    )
}

export default App;