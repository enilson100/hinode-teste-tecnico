import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionListFirst } from "./styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCard = () => {
  const [moreSalesData, setMoreSaleData] = useState<IProducts[]>([]);

  const moreSalesFiltered = (productsData: IProducts[]) => {
    setMoreSaleData(
      productsData.filter((elem) => elem.category === "more sales")
    );
  };

  useEffect(() => {
    moreSalesFiltered(products);
  }, []);

  return (
    <SectionListFirst>
      <TitleList name="MAIS VENDIDOS" />

      <ul className="container-list">
        {moreSalesData?.map((elem, index) =>
          elem.promotion ? (
            <CardPromotion
              key={index}
              name={elem.name}
              price={elem.price}
              promotion={elem.promotion}
              discount={elem.discount}
              img={elem.img}
              infoAdd={elem.infoAdd}
            />
          ) : (
            <Card
              key={index}
              name={elem.name}
              price={elem.price}
              infoAdd={elem.infoAdd}
              img={elem.img}
            />
          )
        )}
      </ul>
    </SectionListFirst>
  );
};
export default ListCard;
