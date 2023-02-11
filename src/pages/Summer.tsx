import { useEffect } from "react";
import Sakura from "../assets/sakura/sakura";
import FeedLayout from "../layout/FeedLayout";

const Summer = () => {
  useEffect(() => {
    const sakura = new Sakura("body");
    sakura.stop();
  }, []);
  return <FeedLayout></FeedLayout>;
};

export default Summer;
