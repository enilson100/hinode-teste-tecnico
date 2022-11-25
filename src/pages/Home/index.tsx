import FirstHeader from "../../components/Header/First-Header";
import SecondHearder from "../../components/Header/Second-Header";
import ThirdHeader from "../../components/Header/Third-Header";
import BannerFirst from "../../components/Banner/Banner-First";
import FooterFirst from "../../components/Footer/Footer-First";
import ListCardFirst from "../../components/ListCard/ListCard-First";
import ListCardHint from "../../components/ListCardHint";
import BigCard from "../../components/BigCard";
import ListCardSecond from "../../components/ListCard/ListCard-Second";
import ListCardThird from "../../components/ListCard/ListCard-Third";

const HomePage = () => {
  return (
    <>
      <header>
        <FirstHeader />
        <SecondHearder />
        <ThirdHeader />
      </header>
      <main>
        <section>
          <BannerFirst />
          <FooterFirst />
        </section>
        <section>
          <ListCardFirst />
        </section>
        <section>
          <ListCardHint />
        </section>
        <section>
          <BigCard />
        </section>
        <section>
          <ListCardSecond />
          <ListCardThird />
        </section>
      </main>
    </>
  );
};
export default HomePage;
