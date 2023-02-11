import { useEffect } from "react";
import Sakura from "../assets/sakura/sakura";
import FeedLayout from "../layout/FeedLayout";
import SpringMain from "../assets/images/SpringMain.jpeg";

const Autumn = () => {
  useEffect(() => {
    const sakura = new Sakura("body");
    sakura.stop();
  });
  return <FeedLayout></FeedLayout>;
};

export default Autumn;
