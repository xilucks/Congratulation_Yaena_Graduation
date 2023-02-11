import { useEffect } from "react";
import "../assets/sakura/sakura.css";
import Sakura from "../assets/sakura/sakura";
import SpringMain from "../assets/images/SpringMain.jpeg";
import FeedLayout from "../layout/FeedLayout";
import styled from "@emotion/styled";
import { sakura } from "./Gallery";

const Spring = () => {
  useEffect(() => {
    sakura.start();
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
