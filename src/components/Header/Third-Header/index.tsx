import { FaBars } from "react-icons/fa";
import { SectionThirdHeader } from "./styles";

const ThirdHeader = () => {
  return (
    <SectionThirdHeader>
      <nav>
        <ul>
          <li>
            <FaBars className="icon-bars" />
            <a href="##">Todas as categorias</a>
          </li>
          <li>
            <a href="##">FRAGRÂNCIAS</a>
          </li>
          <li>
            <a href="##">MAQUIAGEM</a>
          </li>
          <li>
            <a href="##">CORPO & BANHO</a>
          </li>
          <li>
            <a href="##">VIDA SAUDÁVEL</a>
          </li>
          <li>
            <a href="##">ENERGIA E PERFORMANCE</a>
          </li>
        </ul>
      </nav>
    </SectionThirdHeader>
  );
};

export default ThirdHeader;
