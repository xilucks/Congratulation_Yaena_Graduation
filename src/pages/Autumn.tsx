import { useEffect, useRef } from "react";
import FeedLayout from "../layout/FeedLayout";
import { sakura } from "./Gallery";
import { autumnData } from "../Storage/SeasonData";
import ImageCard from "../components/ImageCard";

const Autumn = () => {
  const scrollRef = useRef<any>([]);
  useEffect(() => {
    sakura.settings.colors[0] = {
      gradientColorStart: "rgba(248, 149, 2, 1)",
      gradientColorEnd: "rgba(240, 185, 42, 0.56)",
      gradientColorDegree: 120,
    };
    sakura.start();
  });
  return (
    <div className={"h-full w-full bg-[#B46C00]"}>
      <FeedLayout>
        <div className={"carousel w-full"}>
          {autumnData.map((element, index) => {
            return (
              <ImageCard
                key={element.title}
                title={element.title}
                index={index}
                imgUrl={element.imgUrl}
                date={element.date}
                photoOwner={element.photoOwner}
                comment={element.comment}
                season={"autumn"}
                scrollRef={scrollRef}
              />
            );
          })}
        </div>
      </FeedLayout>
    </div>
  );
};

export default Autumn;
