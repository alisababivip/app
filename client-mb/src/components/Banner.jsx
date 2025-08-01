import { Carousel } from "antd";
function Banner() {
  return (
    <div className="flex flex-col w-full mt-[48px]">
      <Carousel
        dots={false}
        autoplay
        autoplaySpeed={3000}
        children={[
          <img src="./images/banner1.jpg" alt="Banner" key="banner1" />,
          <img src="./images/banner2.jpg" alt="Banner" key="banner2" />,
          <img src="./images/banner3.jpg" alt="Banner" key="banner3" />,
          <img src="./images/banner4.jpg" alt="Banner" key="banner4" />,
          <img src="./images/banner5.jpg" alt="Banner" key="banner5" />,
          <img src="./images/banner6.jpg" alt="Banner" key="banner6" />,
          <img src="./images/banner7.jpg" alt="Banner" key="banner7" />,
          <img src="./images/banner8.jpg" alt="Banner" key="banner8" />,
        ]}
      ></Carousel>
    </div>
  );
}

export default Banner;
