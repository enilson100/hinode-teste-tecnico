import { IPropsCard } from "../../interfaces/products.types";
import { LiCard } from "./styles";
import { BsHeart } from "react-icons/bs";
import { BsStarFill, BsStar } from "react-icons/bs";

const Card = ({ name, price, infoAdd, img }: IPropsCard) => {
  return (
    <LiCard>
      <div className="div-img">
        <div className="div-icon">
          <BsHeart className="icon-heart" />
        </div>
        <figure>
          <img src={img} alt={name} />
        </figure>
      </div>

      <div className="card-info">
        <div className="div-card-info">
          <p className="card-info-desc">{name}</p>
          <p className="card-info-desc">{infoAdd}</p>
        </div>

        <div className="card-info-stars">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStar className="star" />
        </div>
        <p className="card-info-price">
          R$ {`${price.slice(0, 2)}`},<span>{price.slice(-2)}</span>
        </p>
        <div className="div-button">
          <button>COMPRAR</button>
        </div>
      </div>
    </LiCard>
  );
};

export default Card;
