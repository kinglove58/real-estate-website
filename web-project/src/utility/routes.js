import Residencies from "../component/Residencies";
import OurValue from "../component/OurValue";
import ContactUs from "../component/ContactUs";
import GetStarted from "../component/GetStarted";
import Home from "../component/Home";

export const appRoutes = [
    {
        path: "/",
        Component: Home,
      },
  {
    path: "/residencies",
    Component: Residencies,
  },
  {
    path: "/ourvalue",
    Component: OurValue,
  },
  {
    path: "/contactus",
    Component: ContactUs,
  },
  {
    path: "/getstarted",
    Component: GetStarted,
  },
];
