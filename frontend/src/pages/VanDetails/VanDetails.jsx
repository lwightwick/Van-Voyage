import "./VanDetails.scss";
import VanImageSlider from "../../components/VanImageSlider/VanImageSlider";
import { VanImagesData } from "../../data/VanImagesData";
import Luna from "../../assets/Images/luna.jpg";
import BehindScenesImageGallery from "../../components/BehindScenesImageGallery/BehindScenesImageGallery";

function VanDetails() {
  return (
    <main className="van-page">
      <h1 className="van-page__title">The Van</h1>
      <section className="image-slider">
        <h2 className="image-slider__subtitle">Photo Gallery</h2>
        <VanImageSlider className="image-slider" slides={VanImagesData} />
      </section>

      <section className="virtual-tour">
        <h2 className="virtual-tour__subtitle">virtual tour</h2>
        <img className="virtual-tour__image" src={Luna} alt="" />
      </section>

      <section className="behind-the-scenes">
        <h2 className="behind-the-scenes__subtitle">behind the scenes</h2>
        <BehindScenesImageGallery />
      </section>
    </main>
  );
}

export default VanDetails;
