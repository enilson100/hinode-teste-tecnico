import base from "../../../assets/base.svg";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

import { SectionBannerFirst } from "./styles";

const BannerFirst = () => {
  return (
    <SectionBannerFirst>
      <div className="div-banner-first">
        <div>
          <MdOutlineArrowBackIosNew className="icon-arrow" />
        </div>
        <div className="div-banner-info">
          <figure>
            <img className="img-base" src={base} alt="base" />
          </figure>

          <div>
            <div>
              <h1>
                Base Líquida <span>DAZZLE</span>
              </h1>
            </div>
            <div>
              <button>Comprar</button>
            </div>
          </div>
        </div>
        <div>
          <MdOutlineArrowForwardIos className="icon-arrow" />
        </div>
      </div>
      <div className="ball-slider">
        <div className="ball-checked"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </SectionBannerFirst>
  );
};

export default BannerFirst;
