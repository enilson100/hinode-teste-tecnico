import { IProducts } from "../interfaces/products.types";
import baseLiquida from "../assets/img-cards/base-líquida.svg";
import grace from "../assets/img-cards/grace-la-rose.svg";
import poCompacto from "../assets/img-cards/po-compacto.svg";
import corps from "../assets/img-cards/corps.svg";
import shakevanilha from "../assets/img-cards/shake-vanilha.svg";
import shakemorango from "../assets/img-cards/shake-morango.svg";
import esponja from "../assets/img-cards/esponja.svg";
import luvasilicone from "../assets/img-cards/luva-silicone.svg";
import cafeverde from "../assets/img-cards/cafe-verde.svg";
import acido from "../assets/img-cards/acido.svg";
import slim from "../assets/img-cards/slim.svg";
import chah from "../assets/img-cards/cha-h.svg";
import oleopernas from "../assets/img-cards/oleo-pernas.svg";
import esfoliante2 from "../assets/img-cards/esfoliante2.svg";
import gelhot from "../assets/img-cards/gel-hot.svg";
import oleo140ml from "../assets/img-cards/oleo-pernas140ml.svg";
import gel1 from "../assets/img-cards/gel1.svg";
import gel2 from "../assets/img-cards/gel2.svg";
import gel3 from "../assets/img-cards/gel3.svg";
import gel4 from "../assets/img-cards/gel4.svg";

const products: IProducts[] = [
  {
    name: "Esponja 3D Dazzle",
    infoAdd: undefined,
    price: "36,90",
    promotion: "29,90",
    category: "more sales",
    img: `${esponja}`,
    discount: "-20",
    portion: 2,
  },
  {
    name: "Base Líquida Hyaluronic Hydra Dazzle ",
    infoAdd: "Escuro 2 - 500g",
    price: "89,90",
    promotion: undefined,
    category: "more sales",
    img: `${baseLiquida}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Grace La Rose Sublime Deo Colônia Pocket",
    price: "39,90",
    infoAdd: "15ml",
    promotion: undefined,
    category: "more sales",
    img: `${grace}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Pó Compacto HD Cover ",
    price: "46,90",
    infoAdd: "Claro 2 Dazzle - 12g",
    promotion: undefined,
    category: "more sales",
    img: `${poCompacto}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Body Contour Gel Modelador",
    price: "60,00",
    infoAdd: "500g",
    promotion: undefined,
    category: "most desired",
    img: `${corps}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Shake de Vanilla H+ HND -",
    price: "99,90",
    infoAdd: "550g",
    promotion: "79,90",
    category: "most desired",
    img: `${shakevanilha}`,
    discount: "-20",
    portion: 2,
  },
  {
    name: "Shake de Morango H+ HND - ",
    price: "99,90",
    infoAdd: "550g",
    promotion: "79,90",
    category: "most desired",
    img: `${shakemorango}`,
    discount: "-20",
    portion: 2,
  },
  {
    name: "Luva de Silicone Creme para as Hands",
    price: "25,90",
    infoAdd: "100g",
    promotion: undefined,
    category: "most desired",
    img: `${luvasilicone}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Café Verde ",
    price: "69,90",
    infoAdd: "120 cápsulas",
    promotion: undefined,
    category: "healthy life",
    img: `${cafeverde}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Ácido Hialurônico com Colágeno HND",
    price: "175,00",
    infoAdd: " 30 Sachês de 4g",
    promotion: undefined,
    category: "healthy life",
    img: `${acido}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Slim Max HND ",
    price: "140,00",
    infoAdd: "120 Cápsulas",
    promotion: undefined,
    category: "healthy life",
    img: `${slim}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Chá H+ Frutas Vermelhas ",
    price: "45,00",
    infoAdd: " 150g",
    promotion: undefined,
    category: "healthy life",
    img: `${chah}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Wonderful Gold Óleo para as ",
    price: "45,00",
    infoAdd: "Pernas - 150ml",
    promotion: undefined,
    category: "body and bath",
    img: `${oleopernas}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Body Contour Esfoliante ",
    price: "49,00",
    infoAdd: "Corporal - 200g",
    promotion: undefined,
    category: "body and bath",
    img: `${esfoliante2}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Gel para Massagem Feelin Hot Morango ",
    price: "27,00",
    infoAdd: "60ml",
    promotion: undefined,
    category: "body and bath",
    img: `${gelhot}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Óleo para as Pernas Wonderful ",
    price: "39,90",
    infoAdd: "140ml",
    promotion: undefined,
    category: "body and bath",
    img: `${oleo140ml}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Body Contour Gel Modelador",
    price: "60,00",
    infoAdd: "500g",
    promotion: undefined,
    category: "body and bath",
    img: `${gel1}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Body Contour Gel Modelador ",
    price: "60,00",
    infoAdd: "500g",
    promotion: undefined,
    category: "body and bath",
    img: `${gel2}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Body Contour Gel Modelador ",
    price: "60,00",
    infoAdd: "500g",
    promotion: undefined,
    category: "body and bath",
    img: `${gel3}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Corps Lígnea Body Contour Gel Modelador ",
    price: "60,00",
    infoAdd: "500g",
    promotion: undefined,
    category: "body and bath",
    img: `${gel4}`,
    discount: undefined,
    portion: 2,
  },
  {
    name: "Lattitude Expedition ",
    price: "129,00",
    infoAdd: "100ML",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/lattitude-exp.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Empire VIP ",
    price: "150,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/empire-vip.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Empire ",
    price: "150,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/empire.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Lattitude Stamina ",
    price: "129,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/lattitude-stamina.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Empire Gold ",
    price: "150,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/empire-gold.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Colônia Lattitude Origini ",
    price: "129,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/lattitude-col.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Colônia Ella Juicy ",
    price: "129,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/ella.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Spot For Her ",
    price: "129,00",
    infoAdd: "75ml",
    promotion: undefined,
    category: "fragrances",
    img: "../assets/img-cards/spot.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Deo Colônia Venyx L'Or ",
    price: "150,00",
    infoAdd: "100ml",
    promotion: undefined,
    category: "new",
    img: "../assets/img-cards/deo.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Desodorante Roll On Dynamic",
    price: "17,90",
    infoAdd: undefined,
    promotion: undefined,
    category: "new",
    img: "../assets/img-cards/deso.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "Erva Doce Sabonete Cremoso Facial Hinode ",
    price: "33,40",
    infoAdd: "250ml",
    promotion: undefined,
    category: "new",
    img: "../assets/img-cards/erva.svg",
    discount: undefined,
    portion: 2,
  },
  {
    name: "HND Shake Triple Chocolate",
    price: "109,90",
    infoAdd: " 450g",
    promotion: undefined,
    category: "new",
    img: "../assets/img-cards/hnd.svg",
    discount: undefined,
    portion: 2,
  },
];

export default products;
