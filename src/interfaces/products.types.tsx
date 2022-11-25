export interface IPropsCard {
  name: string;
  price: string;
  infoAdd: string | undefined;
  img: string;
}
export interface IPropsCardPromotion {
  name: string;
  price: string;
  img: string;
  promotion: string | undefined;
  discount: string | undefined;
  infoAdd: string | undefined;
}

export interface IProducts {
  name: string;
  price: string;
  infoAdd: string | undefined;
  promotion?: string | undefined;
  category: string;
  img: string;
  discount?: string | undefined;
  portion: number;
}

export interface IHint {
  id: number;
  category: string;
  img: string;
}
