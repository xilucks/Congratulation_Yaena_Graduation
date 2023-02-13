import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import styled from "@emotion/styled";
import Header from "../components/Header";
import SpringBackground from "../assets/images/Spring/SpringBackground.jpeg";
import { useNavigate } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState<any[]>([]);
  const commentsCollectionRef = collection(db, "comments");

  const navigate = useNavigate();

  const bgColors = [
    "rgba(243, 169, 250, 0.557292)",
    "rgba(112, 160, 51, 0.557292)",
    "rgba(240, 185, 42, 0.557292)",
    "rgba(90, 64, 245, 0.557292)",
    "rgba(0, 174, 213, 0.557292)",
  ];
  const messageType = ["start", "end"];

  useEffect(() => {
    const getComments = async () => {
      const data = await getDocs(commentsCollectionRef);
      setComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getComments();
  }, []);
  return (
    <Wrapper>
      <Header />
      <CommentArea>
        {comments.map((element) => {
          return (
            <CommentContainer
              key={element.id}
              className={`chat chat-${messageType[Math.floor(Math.random() * 2)]}`}
            >
              <CommentOwner className={"chat-header"}>{element.name}</CommentOwner>
              <CommentContent
                background={bgColors[Math.floor(Math.random() * (bgColors.length - 1))]}
                className={"chat-bubble"}
              >
                <span className={"block"}>{element.comment}</span>
              </CommentContent>
            </CommentContainer>
          );
        })}
        <WriteCommentButton
          className={"btn"}
          onClick={() => {
            navigate("new");
          }}
        >
          축하글 작성 바로가기
        </WriteCommentButton>
      </CommentArea>
    </Wrapper>
  );
};

export default Comments;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  text-align: center;

  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${SpringBackground});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const WriteCommentButton = styled.button`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 10%;
  width: 50%;
  color: white;

  :hover {
    background: rgba(243, 169, 250, 0.557292);
    border: none;
  }
`;
const CommentArea = styled.div`
  width: 55%;
  height: 70%;
  min-width: 400px;
  margin: 80px auto 0 auto;
  
  overflow: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
`;

const CommentContainer = styled.div`
  margin-bottom: 25px;
  font-weight: bold;
  text-align: left;

  padding-right: 10px;
`;

const CommentOwner = styled.div`
  color: #ffffff;
  font-size: 14px;
  padding: 0 10px;
`;

const CommentContent = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  color: white;
`;
