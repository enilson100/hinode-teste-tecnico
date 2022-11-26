import { AiOutlineEye } from "react-icons/ai";
import { TitleListStyle } from "./styles";
import { ITitleProps } from "../../interfaces/products.types";

const TitleList = ({ name }: ITitleProps) => {
  return (
    <TitleListStyle>
      <div
        className={
          name === "ACABARAM DE CHEGAR"
            ? "div-wrap-title-new"
            : "div-wrap-title"
        }
      >
        <h1>{name}</h1>
        <div>
          <div className="div-end">
            <AiOutlineEye className="icon-eyes" />
            <p>Ver Tudo</p>
          </div>
        </div>
      </div>
    </TitleListStyle>
  );
};
export default TitleList;
