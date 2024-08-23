import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feactureItem } from "../utility/fectureItem";

const Feacture = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-orange-300 text-xl">Number can't be wrong</h3>
        <h2 className="text-blue text-4xl font-semibold">
          We are tursted by these company
        </h2>
      </div>
      <Slider {...settings}>
        {feactureItem.map((img, index) => (
          <div key={index} className="p-2">
            <div className="flex justify-center items-center">
              <img
                src={img.image}
                alt={img.details}
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Feacture;
