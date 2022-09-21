import './CartWidget.css'
import cart from './Assets/cart-shopping-solid.svg'

const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-icon"/>
            0
        </div>
    )
}

export default CartWidget