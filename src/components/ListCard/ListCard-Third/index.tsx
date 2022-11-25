import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../ListCard-First/styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCardThird = () => {
  const [healthyLifeData, sethealthyLifeData] = useState<IProducts[]>([]);

  const healthyLifeFiltered = (productsData: IProducts[]) => {
    sethealthyLifeData(
      productsData.filter((elem) => elem.category === "healthy life")
    );
  };

  useEffect(() => {
    healthyLifeFiltered(products);
  }, []);

  return (
    <SectionList>
      <TitleList name="VIDA SAUDÁVEL" />

      <ul className="container-list">
        {healthyLifeData?.map((elem, index) =>
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
export default ListCardThird;
