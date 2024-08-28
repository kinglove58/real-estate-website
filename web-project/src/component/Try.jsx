import contactImage from "../../src/assets/images/r1.png";
import { IoCall, IoChatbubble, IoVideocam, IoMail } from "react-icons/io5";

/* const ContactOption = ({ Icon, title, number, action }) => (
  <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-start">
    <div className="flex items-center mb-2">
      <Icon className="text-blue-600 mr-2" size={20} />
      <span className="text-gray-700">{title}</span>
    </div>
    <span className="text-gray-500 text-sm mb-2">{number}</span>
    <button className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-full">
      {action}
    </button>
  </div>
); */

const ContactOption = ({ Icon, title, number, action }) => {
  return (
    <div className="flex flex-col rounded-lg p-4 items-start bg-gray-100 ">
      <div className="flex justify-between">
        <div className="mr-4 w-10 h-10 flex items-center justify-center bg-gray-200 text-blue-500 rounded p-2">
          <Icon size={20} />
        </div>

        <div className="flex items-start center flex-col mb-2">
          <span className="text-gray-700 text-lg font-bold">{title}</span>
          <span className="text-md mb-2 text-gray-500">{number}</span>
        </div>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:scale-[0.9] transition-all">
        {action}
      </button>
    </div>
  );
};

const TryOut = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-2xl font-bold text-yellow-500 mb-2">
            Our Contact Us
          </h2>
          <h1 className="text-4xl font-bold text-blue-800 mb-4">
            Easy to contact us
          </h1>
          <p className="text-gray-600 mb-6">
            We are always ready to help by providing the best services for you.
            We believe a good place to live can make your life better.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ContactOption
              Icon={IoCall}
              title="Call"
              number="021 123 145 14"
              action="Call now"
            />
            <ContactOption
              Icon={IoChatbubble}
              title="Chat"
              number="021 123 145 14"
              action="Chat now"
            />
            <ContactOption
              Icon={IoVideocam}
              title="Video Call"
              number="021 123 145 14"
              action="Video Call now"
            />
            <ContactOption
              Icon={IoMail}
              title="Message"
              number="021 123 145 14"
              action="Message now"
            />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <img
            className="w-[500px] h-[500px] rounded-t-full border-8 border-gray-300 "
            src={contactImage}
            alt="house hero image"
          />
        </div>
      </div>
    </div>
  );
};

export default TryOut;
