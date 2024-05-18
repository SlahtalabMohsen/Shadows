import styled from "styled-components";

import NavigationBar from "./NavigationBar";
import ReavelSection from "./Sections/ReavelSection";
import SmallContent from "./Sections/SmallContent";
import ExploreSection from "./Sections/ExploreSection";
import PlayItSection from "./Sections/PlayItSection";
import PreOrderSection from "./Sections/PreOrderSection";
import NewsSection from "./Sections/NewsSection";
import FooterSection from "./Sections/FooterSection";

function Home() {
  return (
    <>
      <NavigationBar />
      <Header>
        <ReavelSection />
        <SmallContent />
        <ExploreSection />
        <PlayItSection />
        <PreOrderSection />
        <NewsSection />
        <FooterSection />
      </Header>
    </>
  );
}

export default Home;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;
