import beautifulwoman from "../assets/img-hint/beautiful-woman-red-lips.png";
import close from "../assets/img-hint/close-up.png";
import man from "../assets/img-hint/muscular-man.png";
import womanpreparing from "../assets/img-hint/woman-preparing.png";
import { IHint } from "../interfaces/products.types";

export const hintData: IHint[] = [
  {
    id: 1,
    category: "MAQUIAGENS",
    img: `${beautifulwoman}`,
  },
  {
    id: 2,
    category: "FRAGRÂNCIAS",
    img: `${womanpreparing}`,
  },
  {
    id: 3,
    category: "ENERGIA & PERFORMANCE",
    img: `${man}`,
  },
  {
    id: 4,
    category: "CORPO & BANHO",
    img: `${close}`,
  },
];
