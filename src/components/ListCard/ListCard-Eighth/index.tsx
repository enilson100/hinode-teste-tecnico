import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionList } from "../../SectionList/styles";
import Card from "../../Card";
import CardPromotion from "../../CardPromotion";
import TitleList from "../../TitleList";
import { ContainerEighth } from "./styles";
import Balls from "../../BallSlider";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ListCardEighth = () => {
  const [newData, setNewData] = useState<IProducts[]>([]);

  const newFiltered = (productsData: IProducts[]) => {
    setNewData(productsData.filter((elem) => elem.category === "new"));
  };

  useEffect(() => {
    newFiltered(products);
  }, []);

  return (
    <ContainerEighth>
      <SectionList className="section-list-eigtht">
        <TitleList name="ACABARAM DE CHEGAR" />
        <div className="container-list">
          <MdOutlineArrowBackIosNew className="arrow" />
          <ul className="list">
            {newData?.map((elem, index) =>
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
    </ContainerEighth>
  );
};
export default ListCardEighth;
