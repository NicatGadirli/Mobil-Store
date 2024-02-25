import { Link } from "react-router-dom";

//Component
import Header2 from "../components/Header2"

//Img
import User from "../assets/images/account/image 51.png"

// Icons
import { ReactComponent as UserCircle } from "../assets/images/account/UserCircle.svg";
import { ReactComponent as Cardholder } from "../assets/images/account/Cardholder.svg";
import { ReactComponent as Heart } from "../assets/images/account/Heart.svg";
import { ReactComponent as Group } from "../assets/images/account/Group 4.svg";


const Account = () => {
    return (
        <>
            <Header2 />
            <section className="account">
                <div className="heading">
                    <Link to="/" className="element">
                        <UserCircle />
                        Mənim hesabım
                    </Link>
                    <Link to="/cart" className="element">
                        <Cardholder />
                        Sifarişlərim
                    </Link>
                    <Link to="/favorites" className="element">
                        <Heart />
                        Bəyəndiklərim
                    </Link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="user">
                            <div className="userPhoto">
                                <img src={User} alt="userPhoto" />
                                <Group />
                            </div>
                            <h5>Həsənzadə Musa</h5>
                        </div>
                        <div className="userInputBox">
                            <form>
                                <div className="input">
                                    <label>Ad soyad</label>
                                    <input type="text" />
                                </div>
                                <div className="input">
                                    <label>Telefon</label>
                                    <input type="text" />
                                </div>
                                <div className="input">
                                    <label>Email</label>
                                    <input type="email" />
                                </div>
                                <div className="input">
                                    <label>Müştəri kodu</label>
                                    <input type="text" />
                                </div>
                                <div className="btn">
                                    <button>Yadda Saxla</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Account