import { FaMapMarkerAlt } from "react-icons/fa";
import SearchBottom from "./SearchBottom";
import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import HeroImage from "../assets/images/hero-image.png";
import SearchBar from "./SerchBar";
function Hero() {
  const countUpRef1 = useRef(null);
  const countUpRef2 = useRef(null);
  const countUpRef3 = useRef(null);

  useEffect(() => {
    const countUp1 = new CountUp(countUpRef1.current, 9000, { startVal: 8000 });
    const countUp2 = new CountUp(countUpRef2.current, 2000, { startVal: 1500 });
    const countUp3 = new CountUp(countUpRef3.current, 28, { startVal: 20 });

    if (!countUp1.error) countUp1.start();
    else console.error(countUp1.error);

    if (!countUp2.error) countUp2.start();
    else console.error(countUp2.error);

    if (!countUp3.error) countUp3.start();
    else console.error(countUp3.error);
  }, []);

  return (
    <>
      <section className="bg-gray-950 flex justify-around items-center gap-3 pt-2 w-full text-white relative">
        {/* left side */}
        <div className="flex flex-col gap-6">
          {/*  <div className="w-[400px] h-[400px] rounded-full bg-gray-400 shadow-custom-gray opacity-50 absolute top-1 left-" /> */}
          <h1 className="font-bold text-6xl">
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p className="max-w-md text-gray-400">
            Find a variety of Properties that suit you very easily forget all
            difficultes in finding a residencial for you
          </p>

          <SearchBar />

          <div className="flex justify-between items-center gap-3">
            <div>
              <span className="flex-center-text">
                <span ref={countUpRef1}></span>
                <span className="text-orange-400">+</span>
              </span>
              <span className="text-gray-400">Premium Product</span>
            </div>
            <div>
              <span className="flex-center-text">
                <span ref={countUpRef2}> </span>
                <span className="text-orange-400">+</span>
              </span>
              <span className="text-gray-400">Happy Customer</span>
            </div>
            <div>
              <span className="flex-center-text">
                <span ref={countUpRef3}> </span>
                <span className="text-orange-400">+</span>
              </span>
              <span className="text-gray-400">Awards Winning</span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="rounded-t-lg">
          <img
            className="w-[600px] h-[600px] rounded-t-full border-8 border-gray-700 "
            src={HeroImage}
            alt="house hero image"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
