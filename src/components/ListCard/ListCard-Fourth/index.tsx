import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../ListCard-First/styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCardFourth = () => {
  const [bodyBathData, setBoreBathData] = useState<IProducts[]>([]);

  const boreBathFiltered = (productsData: IProducts[]) => {
    setBoreBathData(
      productsData
        .filter((elem) => elem.category === "body and bath")
        .slice(0, 4)
    );
  };

  useEffect(() => {
    boreBathFiltered(products);
  }, []);

  return (
    <SectionList>
      <TitleList name="CORPO E BANHO" />

      <ul className="container-list">
        {bodyBathData?.map((elem, index) =>
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
export default ListCardFourth;
