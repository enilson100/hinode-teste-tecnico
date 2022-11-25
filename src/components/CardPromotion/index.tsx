import { IPropsCardPromotion } from "../../interfaces/products.types";
import { LiCard } from "../Card/styles";
import { BsHeart } from "react-icons/bs";
import { BsStarFill, BsStar } from "react-icons/bs";
import { Price, DivDiscount } from "./styles";

const CardPromotion = ({
  name,
  price,
  promotion,
  discount,
  infoAdd,
  img,
}: IPropsCardPromotion) => {
  return (
    <LiCard>
      <div className="div-img">
        <div className="div-icon">
          <BsHeart className="icon-heart" />
        </div>
        <figure>
          <img src={img} alt={name} />
          <DivDiscount>
            <p>{discount}%</p>
          </DivDiscount>
        </figure>
      </div>

      <div className="card-info">
        <div className="div-card-info">
          <p className="card-info-desc">
            {name} {infoAdd}
          </p>
        </div>

        <div className="card-info-stars">
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStarFill className="star" />
          <BsStar className="star" />
        </div>
        <Price className="card-info-price-promocion">
          R$ {`${price.slice(0, 2)}`},<span>{price.slice(-2)}</span>
        </Price>
        <p className="card-info-price">R$ {promotion}</p>
        <div className="div-button">
          <button>COMPRAR</button>
        </div>
      </div>
    </LiCard>
  );
};

export default CardPromotion;
