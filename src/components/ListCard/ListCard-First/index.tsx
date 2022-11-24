import products from "../../../database/data-products";
import { IProducts } from "../../../interfaces/products.types";
import { useEffect, useState } from "react";
import { SectionListFirst } from "./styles";
import { AiOutlineEye } from "react-icons/ai";
import { TitleList } from "../../TitleList/styles";
import Card from "../../Card";

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
        {moreSalesData?.map((elem, index) => {
          return (
            <Card
              key={index}
              name={elem.name}
              price={elem.price}
              infoAdd={elem.infoAdd}
              category={elem.category}
              img={elem.img}
            />
          );
        })}
      </ul>
    </SectionListFirst>
  );
};
export default ListCard;
