import styled from "@emotion/styled";
import SpringMain from "../assets/images/SpringMain.jpeg";
import SummerMain from "../assets/images/SummerMain.jpeg";
import AutumnMain from "../assets/images/AutumnMain.jpeg";
import WinterMain from "../assets/images/WinterMain.jpeg";
import { useEffect, useState } from "react";

interface GalleryCardProps {
  type: "spring" | "summer" | "autumn" | "winter";
}

const GalleryCard = ({ type }: GalleryCardProps) => {
  const [imageLink, setImageLink] = useState("");
  const [themeColor, setThemeColor] = useState("");

  useEffect(() => {
    switch (type) {
      case "spring":
        setThemeColor("#F497FC");
        setImageLink(SpringMain);
        break;
      case "summer":
        setThemeColor("#00FF19");
        setImageLink(SummerMain);
        break;
      case "autumn":
        setThemeColor("#F89502");
        setImageLink(AutumnMain);
        break;
      default:
        setThemeColor("#030179");
        setImageLink(WinterMain);
        break;
    }
  }, []);
  return (
    <Wrapper>
      <CardContainer>
        <CardFront>
          <MainImage src={imageLink} alt={"메인 이미지"} />
        </CardFront>
        <CardBack background={themeColor}>{type}</CardBack>
      </CardContainer>
    </Wrapper>
  );
};

export default GalleryCard;

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 350px;

  overflow: hidden;

  :hover > div {
    transform: rotateY(180deg);
    cursor: pointer;
  }
`;

const CardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
  transition: all 1s ease;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  background: aqua;

  border-radius: 10px;
  text-align: center;
`;

const CardBack = styled.div<{ background: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  background: ${(props) => props.background};

  border-radius: 10px;

  text-align: center;
  font-family: "Kalam", cursive;
`;

const MainImage = styled.img`
  border-radius: 10px;
  height: 100%;
  width: 100%;

  overflow: hidden;
`;
