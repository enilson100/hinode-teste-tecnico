import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../../SectionList/styles";
import TitleList from "../../TitleList";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";
import Balls from "../../BallSlider";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

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

      <div className="container-list">
        <MdOutlineArrowBackIosNew className="arrow" />
        <ul className="list">
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
                category={elem.category}
              />
            )
          )}
        </ul>
        <MdOutlineArrowForwardIos className="arrow" />
      </div>
      <Balls />
    </SectionList>
  );
};
export default ListCardSixth;
