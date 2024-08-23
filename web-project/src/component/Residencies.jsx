import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "../utility/slider.json";

function Residencies() {
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
    <>
      <section id="residencies" className=" my-10 w-full relative">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-orange-300 text-xl">Best Choice</h3>
          <h2 className="text-blue text-4xl font-semibold">
            Popular Residencies
          </h2>
        </div>
        <div className="container mx-auto ">
          <Slider {...settings}>
            {slider.map((item, index) => (
              <div key={index} className="p-4 hover:scale-105">
                <div className="bg-white rounded-lg flex flex-col shadow-xl p-3  ">
                  <img
                    src={item.image}
                    alt={item.details}
                    className="w-60 h-60 object-contain"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold mb-1">
                      <span className="text-orange-500 pr-1">$</span>
                      <span>{item.price}</span>
                    </div>
                    <div className="text-xl font-bold mb-1">{item.name}</div>
                    <div className="text-gray-600 max-w-60">{item.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Residencies;
