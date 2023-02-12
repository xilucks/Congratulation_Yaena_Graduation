import { useEffect } from "react";
import Sakura from "../assets/sakura/sakura";
import FeedLayout from "../layout/FeedLayout";
import { sakura } from "./Gallery";
import { summerData } from "../Storage/SeasonData";
import ImageCard from "../components/ImageCard";

const Summer = () => {
  useEffect(() => {
    sakura.settings.colors[0] = {
      // You can add multiple colors (chosen randomly) by adding elements to the array.
      gradientColorStart: "rgba(0, 255, 25, 1)", // Gradient color start (rgba).
      gradientColorEnd: "rgba(180, 255, 85, 0.56)", // Gradient color end (rgba).
      gradientColorDegree: 120, // Gradient degree angle.
    };
    sakura.start();
  }, []);
  return (
    <div className={"h-full w-full bg-[#01780C]"}>
      <FeedLayout>
        <div className={"carousel w-full"}>
          {summerData.map((element) => {
            return (
              <ImageCard
                title={element.title}
                imgUrl={element.imgUrl}
                date={element.date}
                photoOwner={element.photoOwner}
                comment={element.comment}
                season={"summer"}
              />
            );
          })}
        </div>
      </FeedLayout>
    </div>
  );
};

export default Summer;
