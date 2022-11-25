import { IHint } from "../../interfaces/products.types";
import { LiCardHint } from "./styles";

const CardHint = ({ category, img, id }: IHint) => {
  return (
    <LiCardHint>
      <figure>
        <img src={img} alt={category} />
      </figure>
      <div className="div-hint-hover">
        <h4>{category}</h4>
        <p>VER MAIS</p>
      </div>
      <div>
        <h3 className={id === 3 || id === 4 ? "more-top" : "no-top"}>
          {category}
        </h3>
      </div>
    </LiCardHint>
  );
};
export default CardHint;
