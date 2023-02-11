import { useEffect } from "react";
import "../assets/sakura/sakura.css";
import Sakura from "../assets/sakura/sakura";
import FeedLayout from "../layout/FeedLayout";
import SpringMain from "../assets/images/SpringMain.jpeg";
import styled from "@emotion/styled";

const Spring = () => {
  useEffect(() => {
    const sakura = new Sakura("body");
  }, []);
  return (
    <FeedLayout>
      <MainContainer>
        <Wrapper>
          <ImageContainer>
            <img src={SpringMain} />
          </ImageContainer>
        </Wrapper>
      </MainContainer>
    </FeedLayout>
  );
};

export default Spring;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    width: auto;
    height: auto;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
