import CardHint from "../CardHint";
import { hintData } from "../../database/data-hint";
import { SectionListCardHint } from "./styles";

const ListCardHint = () => {
  return (
    <SectionListCardHint>
      <h1> ISSO PODE SER DO SEU INTERECE</h1>
      <ul>
        {hintData.map((elem) => (
          <CardHint
            key={elem.id}
            category={elem.category}
            img={elem.img}
            id={elem.id}
          />
        ))}
      </ul>
    </SectionListCardHint>
  );
};
export default ListCardHint;
