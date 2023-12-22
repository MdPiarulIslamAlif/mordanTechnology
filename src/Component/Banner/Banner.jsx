import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import banner1 from "../../assets/bannerImg/baner1 (1).jpg";
import banner2 from "../../assets/bannerImg/baner1 (2).jpg";
import banner3 from "../../assets/bannerImg/baner1 (3).jpg";
import banner4 from "../../assets/bannerImg/baner1 (4).jpg";
import banner5 from "../../assets/bannerImg/baner1 (5).jpg";
import banner6 from "../../assets/bannerImg/baner1 (6).jpg";
import banner7 from "../../assets/bannerImg/baner1 (7).jpg";
import banner8 from "../../assets/bannerImg/baner1 (8).jpg";


const Banner = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div
      style={{
        backgroundColor:"black",
        backgroundBlendMode: "multiply" }}
      className="max-h-screen bg-black/80  "
    >
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={banner1} />
        <div data-src={banner2} />
        <div data-src={banner3} />
        <div data-src={banner4} />
        <div data-src={banner5} />
        <div data-src={banner6} />
        <div data-src={banner7} />
        <div data-src={banner8} />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
