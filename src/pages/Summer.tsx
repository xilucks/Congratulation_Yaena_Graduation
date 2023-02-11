import { useEffect } from "react";
import Sakura from "../assets/sakura/sakura";
import FeedLayout from "../layout/FeedLayout";
import { sakura } from "./Gallery";

const Summer = () => {
  useEffect(() => {
    sakura.settings.colors[0] = {
      // You can add multiple colors (chosen randomly) by adding elements to the array.
      gradientColorStart: "rgba(0, 255, 25, 1)", // Gradient color start (rgba).
      gradientColorEnd: "rgba(180, 255, 85, 0.56)", // Gradient color end (rgba).
      gradientColorDegree: 120, // Gradient degree angle.
    };
  }, []);
  return <FeedLayout></FeedLayout>;
};

export default Summer;
