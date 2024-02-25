import { Link } from "react-router-dom";

//Img
import Productimg from "../assets/images/order/image 44.png"

// Icons
import { ReactComponent as Trash } from "../assets/images/order/Trash.svg";
import { ReactComponent as Price } from "../assets/images/order/₼.svg";
import { ReactComponent as ArrowLeft } from "../assets/images/order/ArrowLeft.svg";

//Component
import Header2 from "../components/Header2"

import React, { useState } from 'react';

const Cart = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    // const isCartEmpty = cart.length === 0;


    return (
        <>
            <Header2 />
            <section className="order">
                <div className="container">
                    <div className="row">
                        <div className="left">
                            <div className="headLine">
                                <h6>Məhsul Təfərrüatları</h6>
                                <p>Miqdar</p>
                                <p>Qiymət</p>
                            </div>
                            <div className="product">
                                <div className="properties">
                                    <div className="productImg">
                                        <img src={Productimg} alt="Productimg" />
                                        <div className="first">
                                            <h6>Iphone 15 Pro</h6>
                                            <b>FineWoven Case</b>
                                            <p>Kod: T545713</p>
                                            <Trash />
                                        </div>
                                    </div>
                                    <div className="quantity">
                                        <button onClick={decreaseQuantity}>-</button>
                                        <input type="text" value={quantity} readOnly />
                                        <button onClick={increaseQuantity}>+</button>
                                    </div>
                                    <div className="price">
                                        <p>15</p>
                                        <Price />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="cartMessage">
                                <p>Səbətdə məhsul yoxdur.</p>
                            </div> */}
                            <div className="backBtn">
                                <Link to="/">
                                    <ArrowLeft />
                                    Geri
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h4>Sizin Sifariş</h4>
                        <div className="sum">
                            <p>Cəmi:</p>
                            <h6>40 ₼</h6>
                        </div>
                        <div className="btn">
                            <Link to="/pay">
                                <button>İRƏLİ</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Cart