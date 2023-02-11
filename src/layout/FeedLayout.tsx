import styled from "@emotion/styled";

const FeedLayout = ({ children }: any) => {
  return <Layout>{children}</Layout>;
};

export default FeedLayout;

const Layout = styled.div`
  width: 100%;
  max-width: 400px;

  margin-left: auto;
  margin-right: auto;
`;
