import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () =>{
    return (
        <nav> 
            <div class="Title">
               <h1> BayTry</h1> 
            </div>
            <div class="navBar">
                <ul>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Accessories</li>
                    <li>Blog</li>
                    <li>Sale</li>
                </ul>
            </div>
            <div class="Cart">
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar