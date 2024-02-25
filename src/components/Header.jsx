import { Link } from "react-router-dom";

// Svg
import { ReactComponent as ShoppingCartSimple } from "../assets/images/svg/ShoppingCartSimple.svg";
import { ReactComponent as Bell } from "../assets/images/svg/Bell.svg";
import { ReactComponent as User } from "../assets/images/svg/User.svg";


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="logo">
                        <Link to="/"><h4>Kabrom</h4></Link>
                    </div>
                    <div className="navBar">
                        <nav>
                            <ul className="navList">
                                <li className="navListItem">
                                    <Link to="/about-page">About us</Link>
                                </li>
                                <li className="navListItem">
                                    <Link to="/contact-us">Contact us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="navBox">
                        <div className="navBoxElement">
                            <Link to="/cart">
                                <ShoppingCartSimple />
                            </Link>
                        </div>
                        <div className="navBoxElement">
                            <Link to="/">
                                <Bell />
                            </Link>
                        </div>
                        <div className="navBoxElement">
                            <Link to="/account">
                                <User />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header