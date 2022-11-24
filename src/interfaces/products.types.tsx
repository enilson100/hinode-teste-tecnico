export interface IPropsCard {
  name: string;
  price: string;
  infoAdd: string | undefined;
  category: string;
  img: string;
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
