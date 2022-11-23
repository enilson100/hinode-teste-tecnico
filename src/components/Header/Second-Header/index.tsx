import logo from "../../../assets/logo.svg";
import { RiUserLine, RiShoppingBagLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { SectionSecondHeader } from "./styles";

const SecondHearder = () => {
  return (
    <SectionSecondHeader>
      <div className="div-wrap-second">
        <figure>
          <img src={logo} alt="logo-hinode" />
        </figure>
        <div className="div-center-header">
          <div className="div-input">
            <input
              type="text"
              className="input-header"
              placeholder="Busque aqui o produto do seu interesse"
            />
            <FiSearch className="icon-search" />
          </div>

          <div className="div-rigth-header">
            <div>
              <RiUserLine className="icon-userline" />
              <h2>
                <span>Olá Visitante,</span> ENTRE OU CADASTRE-SE
              </h2>
            </div>
            <div>
              <BsHeart className="icon-heart" />
              <h2>FAVORITOS</h2>
            </div>
            <div className="div-shopping">
              <div>
                <div className="div-amount">
                  <p>0</p>
                </div>
                <RiShoppingBagLine className="icon-shoppingbag" />
              </div>
              <h2>SACOLA</h2>
            </div>
          </div>
        </div>
      </div>
    </SectionSecondHeader>
  );
};

export default SecondHearder;
