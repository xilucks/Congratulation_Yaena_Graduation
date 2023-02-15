import GalleryCard from "../components/GalleryCard";
import styled from "@emotion/styled";
import "../assets/sakura/sakura.css";
// @ts-ignore
import Sakura from "../assets/sakura/sakura";
import { useEffect } from "react";
import Header from "../components/Header";

export const sakura = new Sakura("body");

const Gallery = () => {
  useEffect(() => {
    sakura.start();
  }, []);
  return (
    <>
      <Header />
      <Wrapper>
        <TitleDiv>
          <Title>Gallery</Title>
          <Script className={"text-xl"}>카드를 클릭해서 사진을 확인해보세요</Script>
        </TitleDiv>

        <CardContainer className={"carousel-center carousel space-x-4 bg-neutral"}>
          <GalleryCard type={"spring"} />
          <GalleryCard type={"summer"} />
          <GalleryCard type={"autumn"} />
          <GalleryCard type={"winter"} />
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default Gallery;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;

  padding-top: 10vh;
`;

const TitleDiv = styled.div`
  text-align: center;
  font-family: "Kalam", cursive;

  font-size: 100px;

  align-content: center;
`;

const Title = styled.div`
  width: 100%;
  line-height: 80px;
`;

const Script = styled.div`
  display: inline-block;

  font-size: 16px;
  color: #c0c0c0;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 2500px;
  gap: 30px;

  padding: 0 40px;
  margin-top: 10vh;
`;
