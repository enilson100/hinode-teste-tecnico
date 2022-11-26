import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../../SectionList/styles";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";
import Balls from "../../BallSlider";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ListCardFifth = () => {
  const [bodyBathData, setBoreBathData] = useState<IProducts[]>([]);

  const boreBathFiltered = (productsData: IProducts[]) => {
    setBoreBathData(
      productsData.filter((elem) => elem.category === "body and bath").slice(-4)
    );
  };

  useEffect(() => {
    boreBathFiltered(products);
  }, []);

  return (
    <SectionList>
      <div className="container-list">
        <MdOutlineArrowBackIosNew className="arrow" />
        <ul className="list">
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
export default ListCardFifth;
