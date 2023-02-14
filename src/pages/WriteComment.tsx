import FeedLayout from "../layout/FeedLayout";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { db } from "../../firebase-config";

import { useNavigate } from "react-router-dom";

const WriteComment = () => {
  const [userName, setUserName] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const commentCollectionRef = collection(db, "comments");
  const navigate = useNavigate();

  const createNewComment = async () => {
    if (userName === "") {
      return alert("이름을 입력해주세요.");
    } else if (comment === "") {
      return alert("축하멘트를 입력해주세요.");
    }
    if (!confirm("정말 등록하시겠습니까? 등록 후에는 수정하실 수 없습니다.")) {
      alert("등록이 취소되었습니다.");
    } else {
      await addDoc(commentCollectionRef, {
        name: userName,
        comment: comment,
        time_stamp: new Date(),
      });
      alert("입력 완료!");
      return navigate(-1);
    }
  };

  return (
    <FeedLayout>
      <Wrapper>
        <h1>축하사 작성하기</h1>
        <InputContainer>
          <div>
            <div className={"mb-2"}>
              <span>이름</span>
            </div>
            <input type={"text"} onChange={(event) => setUserName(event.target.value)} />
          </div>
          <div>
            <div className={"mb-2"}>
              <span>축하 멘트</span>
            </div>
            <textarea onChange={(event) => setComment(event.target.value)} />
          </div>
        </InputContainer>
        <ButtonContainer>
          <button
            className={"btn mr-[2%] w-[49%]"}
            onClick={() => {
              if (!confirm("정말 취소하시겠습니까?")) {
                /* empty */
              } else {
                alert("취소 되었습니다.");
                navigate(-1);
              }
            }}
          >
            취소
          </button>
          <button className={"btn w-[49%]"} onClick={createNewComment}>
            전송
          </button>
        </ButtonContainer>
      </Wrapper>
    </FeedLayout>
  );
};

export default WriteComment;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: #f89502;

  margin-top: 80px;

  text-align: center;

  h1 {
    font-size: 62px;
    margin-bottom: 50px;
    font-family: "Gaegu", sans-serif;
    color: #b46c00;
  }
`;

const InputContainer = styled.div`
  text-align: left;

  input {
    width: 100%;
    border-radius: 10px;
    color: black;

    margin-bottom: 20px;
    border: 1px solid #b46c00;
  }

  textarea {
    width: 100%;
    height: 300px;
    border: 1px solid #b46c00;
    color: black;

    resize: none;
    border-radius: 10px;
    white-space: pre-line;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;

  button {
    color: #f89502;

    :hover {
      background: #f89502;
      border: none;
      color: white;
    }
  }
`;
