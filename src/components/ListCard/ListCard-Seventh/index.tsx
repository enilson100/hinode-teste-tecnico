import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../ListCard-First/styles";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCardSeventh = () => {
  const [fragrancesData, setFragrancesData] = useState<IProducts[]>([]);

  const fragancesFiltered = (productsData: IProducts[]) => {
    setFragrancesData(
      productsData.filter((elem) => elem.category === "fragrances").slice(-4)
    );
  };

  useEffect(() => {
    fragancesFiltered(products);
  }, []);

  return (
    <SectionList>
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
export default ListCardSeventh;
