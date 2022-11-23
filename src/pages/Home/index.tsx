import FirstHeader from "../../components/Header/First-Header";
import SecondHearder from "../../components/Header/Second-Header";
import ThirdHeader from "../../components/Header/Third-Header";
import BannerFirst from "../../components/Banner/Banner-First";

const HomePage = () => {
  return (
    <>
      <header>
        <FirstHeader />
        <SecondHearder />
        <ThirdHeader />
      </header>
      <main>
        <BannerFirst />
      </main>
    </>
  );
};
export default HomePage;
