import { useEffect, useRef } from "react";
import "../assets/sakura/sakura.css";
import FeedLayout from "../layout/FeedLayout";
import styled from "@emotion/styled";
import { sakura } from "./Gallery";
import ImageCard from "../components/ImageCard";
import { springData } from "../Storage/SeasonData";

const Spring = () => {
  const scrollRef = useRef<React.MutableRefObject<any>[]>([]);
  useEffect(() => {
    sakura.settings.colors[0] = {
      gradientColorStart: "rgba(255, 183, 197, 0.9)",
      gradientColorEnd: "rgba(255, 197, 208, 0.9)",
      gradientColorDegree: 120,
    };
    sakura.start();
  }, []);
  return (
    <FeedLayout>
      <div className={"carousel w-full"}>
        {springData.map((element, index) => {
          return (
            <ImageCard
              key={element.title}
              title={element.title}
              index={index}
              imgUrl={element.imgUrl}
              date={element.date}
              photoOwner={element.photoOwner}
              comment={element.comment}
              season={"spring"}
              scrollRef={scrollRef}
            />
          );
        })}
      </div>
    </FeedLayout>
  );
};

export default Spring;

