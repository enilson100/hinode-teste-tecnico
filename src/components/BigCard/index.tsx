import muilvit from "../../assets/multi-vit.png";
import venyx from "../../assets/venyx.png";
import { BsStarFill } from "react-icons/bs";
import { ContainerBigCard } from "./styles";

const BigCard = () => {
  return (
    <ContainerBigCard>
      <div className="big-card-wrap">
        <div className="big-card-first">
          <figure>
            <img src={venyx} alt="multi vit" />
          </figure>
          <div className="big-card-info">
            <div className="div-big-card">
              <h5>
                Venyx L’Or <span>100ml</span>
              </h5>
              <div className="big-card-info-stars">
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
              </div>
              <p className="big-card-info-price">
                R$ 150,<span>00</span>
              </p>
              <p className="portion">em até 2x de R$ 75,00</p>
            </div>
          </div>
          <button>COMPRAR</button>
        </div>
        <div className="big-card-second">
          <figure>
            <img src={muilvit} alt="venyx" />
          </figure>
          <div className="big-card-info">
            <div className="div-big-card">
              <h5>
                Multi- Vit Complex A-Z Mulheres <span>60 Cápsulas</span>{" "}
              </h5>
              <div className="big-card-info-stars">
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
                <BsStarFill className="star" />
              </div>
              <p className="big-card-info-price">
                R$ 85,<span>00</span>
              </p>
              <p className="portion">em até 2x de R$ 42,50</p>
            </div>
          </div>
          <button>COMPRAR</button>
        </div>
      </div>
    </ContainerBigCard>
  );
};
export default BigCard;
