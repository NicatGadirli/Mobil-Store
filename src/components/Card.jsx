//Img
import cardImg from "../assets/images/sectionImgs/card.jpeg"

// Icons
import { FaRegStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const Card = () => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={cardImg} alt="cardImg" />
        <div className="cardIcon">
          <FaRegHeart />
        </div>
      </div>
      <div className="cardInfo">
        <h3>Iphone 11 Pro</h3>
        <div className="starBox">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <div className="btnBox">
          <p>10 Azn</p>
          <button>Indi Al</button>
        </div>
      </div>
    </div>
  )
}

export default Card