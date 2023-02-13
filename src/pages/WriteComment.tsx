import FeedLayout from "../layout/FeedLayout";
import styled from "@emotion/styled";

const WriteComment = () => {
  return (
    <FeedLayout>
      <Wrapper>
        <h1>축하사 작성하기</h1>
        <InputContainer>
          <div>
            <div>
              <span>이름</span>
            </div>
            <input type={"text"} />
          </div>
          <div>
            <div>
              <span>축하 멘트</span>
            </div>
            <textarea />
          </div>
        </InputContainer>
      </Wrapper>
    </FeedLayout>
  );
};

export default WriteComment;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  margin-top: 80px;

  text-align: center;

  h1 {
    font-size: 48px;
    margin-bottom: 50px;
  }
`;

const InputContainer = styled.div`
  text-align: left;

  input {
    width: 100%;
    border-radius: 10px;

    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 300px;

    resize: none;
    border-radius: 10px;
  }
`;
