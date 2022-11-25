import perfume from "../../../assets/perfume.png";
import { SectionBannerThird } from "./stytes";

const BannerThird = () => {
  return (
    <SectionBannerThird>
      <div className="div-img">
        <figure>
          <img src={perfume} alt="perfume" />
        </figure>
      </div>
      <div className="banner-third-info">
        <div>
          <h1>
            Linha<span>EMPIRE</span>
          </h1>
          <p>
            Escolha a sua fragrância masculina
            <span>favorita e desperte as melhores</span> sensações.
          </p>
          <button>CONHEÇA NOSSOS PRODUTOS</button>
        </div>
      </div>
    </SectionBannerThird>
  );
};
export default BannerThird;
