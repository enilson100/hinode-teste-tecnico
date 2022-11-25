import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../ListCard-First/styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";

const ListCardSecond = () => {
  const [mostDesiredData, setMostDesiredData] = useState<IProducts[]>([]);

  const mostDesiredFiltered = (productsData: IProducts[]) => {
    setMostDesiredData(
      productsData.filter((elem) => elem.category === "most desired")
    );
  };

  useEffect(() => {
    mostDesiredFiltered(products);
  }, []);

  return (
    <SectionList>
      <TitleList name="MAIS DESEJADOS" />

      <ul className="container-list">
        {mostDesiredData?.map((elem, index) =>
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
export default ListCardSecond;
