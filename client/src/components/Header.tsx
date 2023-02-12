import BackIcon from "../assets/icon/BackIcon.svg";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const Header = () => {
  const navigate = useNavigate();
  return (
    <FeedHeader>
      <button
        type={"button"}
        onClick={() => {
          navigate(-1);
        }}
      >
        <img src={BackIcon} alt={"뒤로가기 버튼"} />
      </button>
    </FeedHeader>
  );
};

export default Header;

const FeedHeader = styled.div`
  display: flex;
  position: fixed;
  align-items: center;

  top: 0;
  left: 0;

  height: 60px;
  width: 100%;
  padding: 0 20px;

  button {
    width: 30px;
    height: 100%;
  }

  img {
    height: 25px;
  }
`;
