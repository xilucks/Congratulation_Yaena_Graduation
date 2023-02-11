import WinterMain from "../assets/images/WinterMain.jpeg";
import styled from "@emotion/styled";
import { SeasonDataType } from "../types/imageCardType";

const ImageCard = ({ title, imgUrl, date, photoOwner, comment }: SeasonDataType[]) => {
  return (
    <MainContainer>
      <Wrapper>
        <ImageContainer>
          <img src={WinterMain} />
        </ImageContainer>
      </Wrapper>
    </MainContainer>
  );
};

export default ImageCard;

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
