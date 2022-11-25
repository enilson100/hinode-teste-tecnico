import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "./styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCardFirst = () => {
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
    <SectionList>
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
    </SectionList>
  );
};
export default ListCardFirst;
