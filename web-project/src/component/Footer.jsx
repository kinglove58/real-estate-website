import logo from "../assets/images/logo2.png";

function Footer() {
  return (
    <footer id="getstarted" className="container mx-auto w-full mt-16 p-4">
      <div className="w-full flex flex-col items-center justify-center mb-3 md:mb-4 bg-blue-600 p-4 rounded-lg">
        <h1 className="text-2xl text-white mb-2">Get Started with Homyz</h1>
        <p className="text-gray-200 mb-4 mx-auto text-center">
          Subscribe and find super attractive homes from us
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md border-4 border-white hover:scale-[0.9] transition-all">
          Get Started
        </button>
      </div>
      <div className="flex flex-col md:flex-row mb-3 md:mb-4 justify-between items-center">
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img src={logo} alt="Homyz logo" className="mb-2" />
          <p className="text-gray-500 text-center">
            Our vision is to make you smile
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-blue-500 text-3xl font-bold mb-2">Information</h1>
          <p className="text-gray-500">125 New York</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
