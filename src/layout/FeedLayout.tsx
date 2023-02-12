import styled from "@emotion/styled";

import Header from "../components/Header";

const FeedLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header />
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
