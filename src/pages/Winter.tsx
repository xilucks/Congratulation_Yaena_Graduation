import { useEffect } from "react";
import FeedLayout from "../layout/FeedLayout";
import styled from "@emotion/styled";
import WinterMain from "../assets/images/WinterMain.jpeg";
import { sakura } from "./Gallery";

const Winter = () => {
  useEffect(() => {
    sakura.settings.colors[0] = {
      // You can add multiple colors (chosen randomly) by adding elements to the array.
      gradientColorStart: "rgba(0, 224, 255, 0.7)", // Gradient color start (rgba).
      gradientColorEnd: "rgba(0, 240, 255, 0.56)", // Gradient color end (rgba).
      gradientColorDegree: 120, // Gradient degree angle.
    };
  }, []);
  return (
    <div className={"h-full w-full"}>
      <FeedLayout>
        <MainContainer>
          <Wrapper>
            <ImageContainer>
              <img src={WinterMain} />
            </ImageContainer>
          </Wrapper>
        </MainContainer>
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
