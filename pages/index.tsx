import type { NextPage } from "next";
import SEO from "../components/SEO/SEO";
import MainContainer from "../components/MainContainer/MainContainer";
import Wrapper from "../components/Wrapper/Wrapper";

const Home: NextPage = () => {
  return (
    <>
      <SEO title="Homepage" content="Homepage content" />
      <MainContainer>
        <Wrapper>
          <h1>Hellow World</h1>
        </Wrapper>
      </MainContainer>
    </>
  );
};

export default Home;
