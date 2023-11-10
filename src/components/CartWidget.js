import cartIcon from "./assets/carrito.svg"

function CartWidget (){

    return (
        <div>
            <img src={cartIcon} width="30px"/>
            0
        </div>
    )
}

export default CartWidget