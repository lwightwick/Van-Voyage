import "./Home.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeTheVan from "../../components/HomeTheVan/HomeTheVan";
import HomePlacesToGo from "../../components/HomePlacesToGo/HomePlacesToGo";
import Reviews from "../../components/Reviews/Reviews";

function Home() {
  return (
    <main className="home">
      <HomeBanner />
      <HomeTheVan />
      <Reviews />
      <HomePlacesToGo />
    </main>
  );
}

export default Home;
