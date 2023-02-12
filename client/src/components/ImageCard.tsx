import styled from "@emotion/styled";
import { SeasonDataType } from "../types/imageCardType";
import { useRef, useState } from "react";

interface ImageCardProps extends SeasonDataType {
  index: number;
  scrollRef: React.MutableRefObject<any>;
}

const ImageCard = ({
  title,
  index,
  imgUrl,
  date,
  photoOwner,
  comment,
  season,
  scrollRef,
}: ImageCardProps) => {
  const [InfoVisible, setInfoVisible] = useState<boolean>(false);

  const handlePhotoClick = () => {
    setInfoVisible(!InfoVisible);
  };

  return (
    <MainContainer
      className={"carousel-item"}
      ref={(element) => (scrollRef.current[index] = element)}
    >
      <Wrapper>
        <ImageContainer onClick={handlePhotoClick}>
          <img src={imgUrl} alt={"이미지"} />
          {InfoVisible && (
            <PhotoInformation season={season} key={title}>
              <div className={"date"}>{date}</div>
              <div className={"comment"}>{comment}</div>
              <div className={"from"}>from {photoOwner}</div>
            </PhotoInformation>
          )}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              className="btn-circle btn"
              onClick={(event) => {
                event.stopPropagation();
                scrollRef.current[index - 1].scrollIntoView({ behavior: "smooth" });
              }}
            >
              ❮
            </a>
            <a
              className="btn-circle btn"
              onClick={(event) => {
                event.stopPropagation();
                scrollRef.current[index + 1].scrollIntoView({ behavior: "smooth" });
              }}
            >
              ❯
            </a>
          </div>
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

  a {
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);

    :hover {
      background: rgba(255, 255, 255, 0.7);
      border: none;
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const PhotoInformation = styled.div<{ season: string | undefined }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  color: white;
  font-size: 36px;
  padding: 30px;

  font-family: "Gaegu", sans-serif;

  .date {
    padding-top: 5%;
    font-size: 28px;
    margin-bottom: 10%;
    width: 100%;
  }

  .comment {
    height: 55%;
    line-height: 45px;
    font-size: 24px;
    width: 100%;
    margin-bottom: 10%;
  }

  .from {
    font-size: 28px;
    width: 100%;
    text-align: right;
  }

  background: ${(props) => {
    if (props.season === "spring") {
      return "linear-gradient(180deg, #F497FC 0%, rgba(243, 169, 250, 0.557292) 82.6%, rgba(217, 217, 217, 0) 100%)";
    } else if (props.season === "summer") {
      return "linear-gradient(180deg, #01AE13 0%, rgba(112, 160, 51, 0.557292) 44.27%, rgba(217, 217, 217, 0) 100%)";
    } else if (props.season === "autumn") {
      return "linear-gradient(180deg, #F89502 0%, rgba(240, 185, 42, 0.557292) 54.27%, rgba(217, 217, 217, 0) 100%)";
    } else {
      return "linear-gradient(180deg, #00A9B4 0%, rgba(0, 174, 213, 0.557292) 44.27%, rgba(217, 217, 217, 0) 100%)";
    }
  }};
`;
