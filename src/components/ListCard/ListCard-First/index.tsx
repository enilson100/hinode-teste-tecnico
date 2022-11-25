import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionListFirst } from "./styles";
import { AiOutlineEye } from "react-icons/ai";
import { TitleList } from "../../TitleList/styles";
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
      <TitleList>
        <div className="div-wrap-title">
          <h1>MAIS VENDIDOS</h1>
          <div>
            <div className="div-end">
              <AiOutlineEye className="icon-eyes" />
              <p>Ver Tudo</p>
            </div>
          </div>
        </div>
      </TitleList>
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
