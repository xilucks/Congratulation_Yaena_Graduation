import MainImage from "../assets/images/hero_image.png";
import WhiteArrowDown from "../assets/icon/WhiteArrowDown.svg";
import NaviMainImg from "../assets/images/NaviMainImg.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className={"carousel-vertical carousel h-full w-full"}>
      <Wrapper>
        <Selector className={"carousel-item h-full"}>
          <TextArea>
            <div>Congratulation</div>
            <div>on</div>
            <div>graduation</div>
          </TextArea>
          <ScrollArea>
            <img src={MainImage} alt={"메인 이미지"} />
            <div>
              <span>
                <label>Scroll</label>
                <img src={WhiteArrowDown} alt={"스크롤 안내 아이콘"} />
              </span>
            </div>
          </ScrollArea>
        </Selector>
        <Selector className={"carousel-item h-full"}>
          <ContentArea>
            <div className={"commentContainer"}>
              <div className={"date"}>
                <span>2023.02.16</span>
              </div>
              <div className={"comment"}>
                <div className={"w-full"}>
                  <span>축</span>
                </div>
                <div>
                  <span className={"w-full"}>이예나 졸업</span>
                </div>
              </div>
            </div>
            <div className={"w-full"}>
              <img src={NaviMainImg} alt={"메인 이미지"} />
            </div>
            <div>
              <div>
                <Link to={"/gallery"}>
                  <GalleryButton type="button" className={"btn"}>
                    갤러리 바로가기
                  </GalleryButton>
                </Link>
              </div>
              <div>
                <Link to={"/comment"}>
                  <GalleryButton type="button" className={"btn"}>
                    축하사 바로가기
                  </GalleryButton>
                </Link>
              </div>
            </div>
          </ContentArea>
        </Selector>
      </Wrapper>
    </div>
  );
};

export default Home;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, rgba(255, 153, 0, 1) 10%, rgba(255, 22, 232, 0.3) 90%);

  color: #ffffff;

  font-family: "Gaegu", sans-serif;
`;

const Selector = styled.div``;

const TextArea = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 8vh;

  color: #ffffff;
  font-size: 10vh;
  font-family: "Italianno", sans-serif;

  div {
    margin-bottom: 6vh;
  }
`;

const ScrollArea = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding-bottom: 10vh;

  img {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-height: 550px;
    max-width: 750px;
  }

  div {
    position: absolute;
    width: 100%;
    height: 10vh;
    min-height: 95px;
    bottom: 0;
  }

  span {
    position: absolute;
    bottom: 50%;
    left: 49%;
    color: white;
    margin-left: -12px;
    width: 40px;
    height: 40px;
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
  }
  @-webkit-keyframes sdb {
    0% {
      -webkit-transform: translate(0, 0);
    }
    20% {
      -webkit-transform: translate(0, 10px);
    }
    40% {
      -webkit-transform: translate(0, 0);
    }
  }
  @keyframes sdb {
    0% {
      transform: translate(0, 0);
    }
    20% {
      transform: translate(0px, 10px);
    }
    40% {
      transform: translate(0, 0);
    }
  }
`;

const ContentArea = styled.div`
  width: 100%;
  height: 100%;

  background-color: #fed1a7;

  text-align: center;

  .date {
    font-size: 5vh;
    line-height: 7vh;
  }

  .comment {
    font-size: 8vh;
    line-height: 9vh;
  }

  .commentContainer {
    height: 30%;
  }

  img {
    width: 39vw;
    height: 40vh;
    max-width: 250px;
    max-height: 900px;

    margin: 20px auto 5vh auto;
  }
`;

const GalleryButton = styled.button`
  font-size: 36px;
  margin-bottom: 10px;

  color: white;

  :hover {
    background: rgba(240, 185, 42, 0.557292) 44.27%;
    border: none;
  }
`;
