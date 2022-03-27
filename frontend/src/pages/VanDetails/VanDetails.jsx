import "./VanDetails.scss";
import VanImageSlider from "../../components/VanImageSlider/VanImageSlider";
import { VanImagesData } from "../../data/VanImagesData";
import Luna from "../../assets/Images/luna.jpg";
import BehindScenesImageGallery from "../../components/BehindScenesImageGallery/BehindScenesImageGallery";

function VanDetails() {
  return (
    <main>
      <section>
        <h1>The Van</h1>
      </section>
      <section>
        <h2>Photo Gallery</h2>
        <VanImageSlider slides={VanImagesData} />
      </section>

      <section>
        <h2>virtual tour</h2>
        <img src={Luna} alt="" />
      </section>

      <section>
        <h2>behind the scenes</h2>
        <BehindScenesImageGallery />
        {/* <img src={Luna} alt="" />
        <img src={Luna} alt="" />
        <img src={Luna} alt="" />
        <img src={Luna} alt="" />
        <img src={Luna} alt="" />
        <img src={Luna} alt="" /> */}
      </section>
    </main>
  );
}

export default VanDetails;
