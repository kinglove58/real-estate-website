import valueImage from "../../src/assets/images/value.png";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../utility/accord";

function OurValue() {
  return (
    <>
      <section
        id="ourvalue"
        className="bg-white flex flex-col md:flex-row justify-around items-center gap-6 p-4 w-full text-black relative mt-16"
      >
        {/* left side */}
        <div className="rounded-t-lg flex justify-center md:justify-start">
          <img
            className="w-full max-w-xs md:max-w-md h-auto rounded-t-full border-8 border-gray-300"
            src={valueImage}
            alt="house hero image"
          />
        </div>

        {/* right side */}
        <div className="flex flex-col gap-6 max-w-lg">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h3 className="font-bold text-2xl text-orange-600">Our Value</h3>
            <h1 className="font-bold text-4xl text-blue-600">
              Value We Give to You
            </h1>
            <p className="text-gray-400">
              We always ready to help by providing the best services for you we
              believe a good place to live can make your life better
            </p>
          </div>

          <Accordion allowZeroExpanded>
            {data.map((item, index) => (
              <AccordionItem key={index} className="shadow-lg mb-4">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center justify-between gap-2 p-4 bg-white rounded-lg w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-blue-500 rounded">
                          {item.icon}
                        </div>
                      </div>
                      <span className="font-bold text-lg text-gray-800 flex-grow text-center">
                        {item.heading}
                      </span>
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-blue-500 rounded">
                        {item.iconEnd}
                      </div>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="p-4 bg-white rounded-lg">
                  <p className="text-gray-600">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}

export default OurValue;
