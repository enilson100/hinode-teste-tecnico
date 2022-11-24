import FirstHeader from "../../components/Header/First-Header";
import SecondHearder from "../../components/Header/Second-Header";
import ThirdHeader from "../../components/Header/Third-Header";
import BannerFirst from "../../components/Banner/Banner-First";
import FooterFirst from "../../components/Footer/Footer-First";
import ListCard from "../../components/ListCard/ListCard-First";

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
          
          <ListCard />
        </section>
      </main>
    </>
  );
};
export default HomePage;
