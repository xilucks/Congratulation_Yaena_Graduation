import "../assets/snow/snow.css";
import Sakura from "../assets/sakura/sakura";
import { useEffect } from "react";
import FeedLayout from "../layout/FeedLayout";
import snowFalling from "../assets/snow/snow";
import styled from "@emotion/styled";
import WinterMain from "../assets/images/WinterMain.jpeg";

const Winter = () => {
  useEffect(() => {
    const sakura = new Sakura("body");
    sakura.stop();
    snowFalling();
  }, []);
  return (
    <div className={"h-full w-full bg-[#030179]"}>
      <div className={"section01"}>
        <canvas id={"snow_canvas"}></canvas>
      </div>
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

  padding-top: 30vh;
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
