import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config.js";
import styled from "@emotion/styled";
import Header from "../components/Header";

const Comments = () => {
  const [comments, setComments] = useState<any[]>([]);
  const commentsCollectionRef = collection(db, "comments");

  const bgColors = ["#FF9900", "#01AE13", "#F89502", "#030179", "#F497FC", "#00A9B4"];
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
                {element.comment}
              </CommentContent>
            </CommentContainer>
          );
        })}
      </CommentArea>
    </Wrapper>
  );
};

export default Comments;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const CommentArea = styled.div`
  width: 80%;
  margin: 80px auto 0 auto;
`;

const CommentContainer = styled.div`
  margin-bottom: 25px;
`;

const CommentOwner = styled.div``;

const CommentContent = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  color: white;
`;
