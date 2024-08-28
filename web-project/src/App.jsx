import ContactUs from "./component/ContactUs";
import Feacture from "./component/Feacture";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import OurValue from "./component/OurValue";
import Residencies from "./component/Residencies";
import { appRoutes } from "./utility/routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {appRoutes.map((routeItem) => (
          <Route
            key={routeItem.path}
            path={routeItem.path}
            element={<routeItem.Component />}
          />
        ))}
      </Routes>
      <Feacture />
      <Residencies />
      <OurValue />
      {/*  <ContactUs /> */}
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
