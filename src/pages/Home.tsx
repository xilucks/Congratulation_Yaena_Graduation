import MainImage from "../assets/images/hero_image.png";
import WhiteArrowDown from "../assets/icon/WhiteArrowDown.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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
            <div>
              <div>
                <span>2023.02.16</span>
              </div>
              <div>
                <span>이예나의 졸업을 축하합니다.</span>
              </div>
            </div>
            <div>
              <div>
                <Link to={"/gallery"}>
                  <button type="button">갤러리</button>
                </Link>
              </div>
              <div>
                <Link to={"/end"}>
                  <button type="button">축하사</button>
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
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 153, 0, 1) 10%, rgba(255, 22, 232, 0.3) 90%);
`;

const Selector = styled.div``;

const TextArea = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 8vh;

  color: #ffffff;
  font-size: 15vw;
  font-family: "Italianno", sans-serif;

  div {
    margin-bottom: 10vw;
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
`;

const GalleryButton = styled.button``;
