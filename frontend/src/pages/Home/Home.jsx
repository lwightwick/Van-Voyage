import "./Home.scss";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeTheVan from "../../components/HomeTheVan/HomeTheVan";
import HomePlacesToGo from "../../components/HomePlacesToGo/HomePlacesToGo";
import HomeReviews from "../../components/HomeReviews/HomeReviews";

function Home() {
  return (
    <main className="home">
      <HomeBanner />
      <HomeTheVan />
      <HomePlacesToGo />
      <HomeReviews />
    </main>
  );
}

export default Home;
