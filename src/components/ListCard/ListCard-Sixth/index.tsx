import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../ListCard-First/styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCardSixth = () => {
  const [fragrancesData, setFragrancesData] = useState<IProducts[]>([]);

  const fragancesFiltered = (productsData: IProducts[]) => {
    setFragrancesData(
      productsData.filter((elem) => elem.category === "fragrances").slice(0, 4)
    );
  };

  useEffect(() => {
    fragancesFiltered(products);
  }, []);

  return (
    <SectionList>
      <TitleList name="FRAGRÂNCIAS" />

      <ul className="container-list">
        {fragrancesData?.map((elem, index) =>
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
export default ListCardSixth;
