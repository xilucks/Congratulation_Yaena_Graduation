import GalleryCard from "../components/GalleryCard";
import styled from "@emotion/styled";
import "../assets/sakura/sakura.css";
import Sakura from "../assets/sakura/sakura";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
        <TittleDiv>Gallery</TittleDiv>
        <CardContainer className={"carousel-center carousel space-x-4 bg-neutral p-4"}>
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
  padding: 150px 0 25vh 0;
`;

const TittleDiv = styled.div`
  text-align: center;
  font-family: "Kalam", cursive;

  font-size: 100px;

  align-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 2500px;
  gap: 30px;
  height: 100%;
  align-items: end;

  padding: 20px 40px;
`;
