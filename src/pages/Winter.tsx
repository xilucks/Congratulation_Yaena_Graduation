import { useEffect, useRef } from "react";
import FeedLayout from "../layout/FeedLayout";
import styled from "@emotion/styled";
import { sakura } from "./Gallery";
import { winterData } from "../Storage/SeasonData";
import ImageCard from "../components/ImageCard";

const Winter = () => {
  const scrollRef = useRef<any>([]);
  useEffect(() => {
    sakura.settings.colors[0] = {
      // You can add multiple colors (chosen randomly) by adding elements to the array.
      gradientColorStart: "rgba(0, 224, 255, 0.7)", // Gradient color start (rgba).
      gradientColorEnd: "rgba(0, 240, 255, 0.56)", // Gradient color end (rgba).
      gradientColorDegree: 120, // Gradient degree angle.
    };
    sakura.start();
  }, []);
  return (
    <div className={"h-full w-full bg-[#030179]"}>
      <FeedLayout>
        <div className={"carousel w-full"}>
          {winterData.map((element, index) => {
            return (
              <ImageCard
                key={element.title}
                title={element.title}
                index={index}
                imgUrl={element.imgUrl}
                date={element.date}
                photoOwner={element.photoOwner}
                comment={element.comment}
                season={"winter"}
                scrollRef={scrollRef}
              />
            );
          })}
        </div>
      </FeedLayout>
    </div>
  );
};

export default Winter;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 25vh;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 20px;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
