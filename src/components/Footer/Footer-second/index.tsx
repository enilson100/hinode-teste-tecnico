import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SectionFooterSecond } from "./styles";
import { ButtonFooter } from "./styles";
import logo from "../../../assets/logo.svg";

const FooterSecond = () => {
  return (
    <SectionFooterSecond>
      <div className="div-footer-register">
        <div>
          <h3>
            RECEBA NOSSAS <span>OFERTAS E NOVIDADES</span>
          </h3>
          <form>
            <div></div>
            <input type="text" placeholder="Digite seu nome" />
            <input type="text" placeholder="Digite seu email" />
            <ButtonFooter>CADASTRAR</ButtonFooter>
          </form>
        </div>
      </div>
      <div className="div-footer-info">
        <div className="div-wrap-info">
          <div>
            <h6>GRUPO HINODE</h6>
            <p>A Empresa</p>
            <p>Catálogo Hinode</p>
            <p>Seja um Consultor</p>
            <p>Hinode Prime</p>
            <p>Frete Inteligente</p>
          </div>
          <div>
            <h6>MAIS VENDIDOS</h6>
            <p>Corps Lígnea Body Contour Gel Modelador</p>
            <p>Shake de Vanilla H+ HND</p>
            <p>Shake de Morango H+ HND</p>
            <p>Luva de Silicone Creme para as Mãos Hands</p>
            <p>Empire Gold</p>
            <p>Empire VIP</p>
          </div>
          <div>
            <h6>DÚVIDAS FREQUENTES</h6>
            <p>Fale Conosco</p>
            <p>Entrega, Trocas e Devoluções</p>
            <p>Compra e Venda</p>
            <p>Política de Privacidade</p>
            <p>Remover Consentimento</p>
          </div>
          <div>
            <ButtonFooter>CENTRAL DE ATENDIMENTO</ButtonFooter>
            <p className="parag-end"> De segunda a sexta das 9h às 21h</p>
            <p>Capitas e regiões metropolitanas 4020-2424</p>
            <p>Demais localidades: 0800-144-6633</p>
            <div className="div-icon">
              <FaInstagram className="icon-footer" />
              <AiOutlineYoutube className="icon-footer" />
              <FaFacebookF className="icon-footer" />
            </div>
          </div>
        </div>
      </div>
      <div className="div-info-end">
        <div className="div-img-end">
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <p>
            OBJETIVO - CNPJ n° 30.318.916/0001-55 Presidente Getulio Vargas, 146
            - Centro, Itapeva-MG - CEP:37655-000
          </p>
        </div>
        <div>
          <p>
            As regras, ofertas e condições de pagamento pratcados no e-commerce
            oficial da marca são exclusivas para os pedidos realizados através
            do sit <a href="#######">www.hinode.com.br</a> podendo os preços e
            benefícios divergirem dos{" "}
            <span>que são praticados pelos consutores do grupo Hinode.</span>
          </p>
          <p>
            Todas as promoções, descontos e preços são válidos somente por um
            período limitado e podem ser alterados ou encerrados a qualquer
            momento sem prévio aviso.{" "}
            <strong>
              o desconto ofericido para pagamento por Boleto bancário não se
              aplica aos pedidos com desconto Hinode Prime
            </strong>
          </p>
          <p>
            Com objetivo de personalizar a experiência de compra e oferecer um
            site melhor, cookies e outras tecnologias poderão ser utilizadas
            durante a navegação, para coletar informações técnicas e compilar
            estatísticas de monitoramento de uso do site. Os usuátios que
            pretendam bloquer esses recursos, deverão acessar as configurações
            necessários no navegador de internet ou realizar o procedimento de
            explicitado de Politica de Privacidade do site.
          </p>
        </div>
      </div>
    </SectionFooterSecond>
  );
};
export default FooterSecond;
