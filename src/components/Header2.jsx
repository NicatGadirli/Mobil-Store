import { Link } from "react-router-dom";

// Svg
import { ReactComponent as ShoppingCartSimple } from "../assets/images/svg/ShoppingCartSimple.svg";
import { ReactComponent as Bell } from "../assets/images/svg/Bell.svg";
import { ReactComponent as User } from "../assets/images/svg/User.svg";
import { ReactComponent as Filter2 } from "../assets/images/svg/filter2.svg";
import { ReactComponent as Search } from "../assets/images/svg/01 align center.svg";


const Header2 = () => {
    return (
        <header className="secondHeader">
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
                                <li className="navListItem">
                                    <Link to="/">Models</Link>
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
                <div className="filterSearch">
                    <input type="text" placeholder="Search" />
                    <Search className="search"/>
                    <Filter2 className="filter2"/>
                </div>
            </div>
            <span></span>
        </header>
    )
}

export default Header2