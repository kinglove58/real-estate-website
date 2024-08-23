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
        id="our value"
        className="bg-white flex justify-around items-center gap-3 pt-2 w-full text-white relative mt-16"
      >
        {/* left side */}
        <div className="rounded-t-lg">
          <img
            className="w-[500px] h-[500px] rounded-t-full border-8 border-gray-300 "
            src={valueImage}
            alt="house hero image"
          />
        </div>

        {/* right side */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-2xl text-orange-600">Our Value</h3>
            <h1 className="font-bold text-4xl text-blue">
              Value We Give to You
            </h1>
            <p className="max-w-md text-gray-400">
              We always ready to help by providing the best services for you we
              believe a good place to live can make your life better
            </p>
          </div>

          <Accordion allowZeroExpanded>
            {data.map((item, index) => (
              <AccordionItem key={index} className="shadow-lg mb-4">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex items-center gap-2 p-4 bg-white rounded-lg">
                    {item.icon}
                    <span className="font-bold text-lg text-gray-800">
                      {item.heading}
                    </span>
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
