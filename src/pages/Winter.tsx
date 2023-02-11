import createSnow from "../assets/snow/snow.js";
import { useEffect } from "react";

const Winter = () => {
  useEffect(() => {
    setInterval(createSnow, 100);
  });
  return <h1>Winter Page</h1>;
};

export default Winter;
