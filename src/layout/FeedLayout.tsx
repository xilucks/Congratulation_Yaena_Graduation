import styled from "@emotion/styled";
import BackIcon from "../assets/icon/BackIcon.svg";
import { useNavigate } from "react-router-dom";

const FeedLayout = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <Layout>
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
      {children}
    </Layout>
  );
};

export default FeedLayout;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;

  margin-left: auto;
  margin-right: auto;
`;

const FeedHeader = styled.div`
  display: flex;
  position: fixed;
  align-items: center;

  top: 0;
  left: 0;

  height: 50px;
  width: 100%;
  padding: 0 20px;

  button {
    width: 30px;
    height: 30px;
  }

  img {
    height: 25px;
  }
`;
