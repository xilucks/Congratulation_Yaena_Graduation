import styled from "@emotion/styled";
import SpringMain from "../assets/images/Spring/SpringMain.jpeg";
import SummerMain from "../assets/images/Summer/SummerMain.jpeg";
import AutumnMain from "../assets/images/Autumn/AutumnMain.jpeg";
import WinterMain from "../assets/images/Winter/WinterMain.jpeg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sakura } from "../pages/Gallery";

interface GalleryCardProps {
  type: "spring" | "summer" | "autumn" | "winter";
}

const GalleryCard = ({ type }: GalleryCardProps) => {
  const [imageLink, setImageLink] = useState("");
  const [themeColor, setThemeColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    switch (type) {
      case "spring":
        setThemeColor(
          "linear-gradient(180deg, #F497FC 0%, rgba(243, 169, 250, 0.557292) 44.27%, rgba(217, 217, 217, 0) 100%)"
        );
        setImageLink(SpringMain);
        break;
      case "summer":
        setThemeColor(
          "linear-gradient(180deg, #01AE13 0%, rgba(112, 160, 51, 0.557292) 44.27%, rgba(217, 217, 217, 0) 100%)"
        );
        setImageLink(SummerMain);
        break;
      case "autumn":
        setThemeColor(
          "linear-gradient(180deg, #F89502 0%, rgba(240, 185, 42, 0.557292) 44.27%, rgba(217, 217, 217, 0) 100%)"
        );
        setImageLink(AutumnMain);
        break;
      default:
        setThemeColor(
          "linear-gradient(180deg, #030179 0%, rgba(90, 64, 245, 0.557292) 44.27%, rgba(217, 217, 217, 0) 100%)"
        );
        setImageLink(WinterMain);
        break;
    }
  }, []);
  return (
    <Wrapper className="carousel-item">
      <CardContainer>
        <CardFront>
          <MainImage src={imageLink} alt={"메인 이미지"} />
        </CardFront>
        <CardBack
          background={themeColor}
          onClick={() => {
            navigate(`${type}`);
          }}
        >
          <BackTittle>{type}</BackTittle>
        </CardBack>
      </CardContainer>
    </Wrapper>
  );
};

export default GalleryCard;

const Wrapper = styled.div`
  position: relative;
  width: 250px;
  height: 350px;

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

const BackTittle = styled.div`
  margin-top: 30%;

  font-size: 48px;
  color: #ffffff;
  font-weight: bold;
`;
