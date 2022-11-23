import { RiUserHeartLine } from "react-icons/ri";
import { DivHeaderFirst } from "./styles";

const FirstHeader = () => {
  return (
    <DivHeaderFirst>
      <div className="div-wrap">
        <div>
          <p className="paragraph-header">A Empresa</p>
        </div>
        <div className="div-rigth">
          <div className="div-icon">
            <RiUserHeartLine className="icon-user-heart" />
            <p>SEJA UM CONSULTOR</p>
          </div>
          <p className="paragraph-header">Fale Conosco</p>
        </div>
      </div>
    </DivHeaderFirst>
  );
};

export default FirstHeader;
