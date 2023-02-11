import { useEffect } from "react";
import Sakura from "../assets/sakura/sakura";
import FeedLayout from "../layout/FeedLayout";
import SpringMain from "../assets/images/SpringMain.jpeg";
import { sakura } from "./Gallery";

const Autumn = () => {
  useEffect(() => {
    sakura.settings.colors[0] = {
      // You can add multiple colors (chosen randomly) by adding elements to the array.
      gradientColorStart: "rgba(248, 149, 2, 1)", // Gradient color start (rgba).
      gradientColorEnd: "rgba(240, 185, 42, 0.56)", // Gradient color end (rgba).
      gradientColorDegree: 120, // Gradient degree angle.
    };
  });
  return <FeedLayout></FeedLayout>;
};

export default Autumn;
