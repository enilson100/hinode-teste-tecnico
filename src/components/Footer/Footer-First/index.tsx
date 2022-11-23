import { RiBankCard2Line, RiTruckLine } from "react-icons/ri";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { SiDropbox } from "react-icons/si";
import { SectionFooterFirst } from "./styles";

const FooterFirst = () => {
  return (
    <SectionFooterFirst>
      <div>
        <ul>
          <li>
            <RiBankCard2Line className="icon-card" />
            <p>
              Tudo em até <span> 6x sem juros</span>
            </p>
          </li>
          <li>
            <RiTruckLine className="icon-truck" />
            <p>
              FRETE GRÁTIS nas compras acima
              <span>de R$ 49,00 para todo o Brasil</span>
            </p>
          </li>
          <li>
            <MdOutlineSwapHorizontalCircle className="icon-swap" />
            <p>
              Hinode Prime: Receba em <span>casa todo mês com 20% OFF</span>
            </p>
          </li>
          <li>
            <SiDropbox className="icon-dropbox" />
            <p>
              Garanta mais economia <span>com frete inteligente</span>
            </p>
          </li>
        </ul>
      </div>
    </SectionFooterFirst>
  );
};

export default FooterFirst;
