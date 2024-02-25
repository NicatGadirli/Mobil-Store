//Img
import contactUs from "../assets/images/sectionImgs/ContactUs.png"

// Icons
import { ReactComponent as Vector } from "../assets/images/svg/Vector.svg";
import { ReactComponent as Phone } from "../assets/images/svg/Phone.svg";

//Components
import Header from "../components/Header";


const ContactUs = () => {
    return (
        <>
            <Header />
            <section className='contactUs'>
                <div className="container">
                    <div className="title">
                        <h2>Contact Us!</h2>
                    </div>
                    <div className="row">
                        <div className="left">
                            <div className="contact">
                                <Phone />
                                <a href="tel:+994 72 548 65 68">+994 72 548 65 68</a>
                            </div>
                            <div className="contact">
                                <Vector />
                                <a href="/">aaaaa.asffaff@gmail.com</a>
                            </div>
                            <div className="imgBox">
                                <img src={contactUs} alt="contactUs" />
                            </div>
                        </div>
                        <div className="right">
                            <div className="inputBox">
                                <input type="text" placeholder="Ad" required />
                                <input type="text" placeholder="Nömrə" required />
                                <textarea
                                    placeholder="Məktub"
                                    cols="30"
                                    rows="10"
                                    required></textarea>
                            </div>
                            <div className="btnBox">
                                <button>Göndər</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs