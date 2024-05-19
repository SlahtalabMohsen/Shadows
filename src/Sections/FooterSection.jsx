import styled from "styled-components";

function FooterSection() {
  return (
    <Container>
      <LeftSection>
        <FooterIcon />
        <FooterList>
          <h3>STORE</h3>
          <h3>UBISOFT CONNECT</h3>
          <h3>ABOUT US</h3>
          <h3>NEWS</h3>
          <h3>SUPPORT</h3>
        </FooterList>
        <FooterList>
          <p>CONTACT US</p>
          <p>PRIVACY</p>
          <p>TERMS OF USE</p>
          <p>NOTICE AT COLLECTION</p>
          <p>DO NOT SELL / SHARE MY PERSONAL INFORMATION</p>
          <p>LIMIT USE / DISCLOSURE OF MY SENSITIVE PERSONAL INFORMATION</p>
          <p>SET COOKIES</p>
        </FooterList>
      </LeftSection>
      <RightSection>
        <FooterLogo />
        <FooterIndex>
          <FooterItems>
            <h1>Studios</h1>
            <h3>UBISOFT BELGRADE</h3>
            <h3>UBISOFT BORDEAUX</h3>
            <h3>UBISOFT BUCHAREST</h3>
            <h3>UBISOFT CHENGDU</h3>
            <h3>UBISOFT KYIV</h3>
            <h3>UBISOFT MONTPELLIER</h3>
            <h3>UBISOFT MONTREAL</h3>
            <h3>UBISOFT ODESA</h3>
            <h3>UBISOFT OSAKA</h3>
            <h3>UBISOFT PHILIPPINES</h3>
            <h3>UBISOFT PUNE</h3>
            <h3>UBISOFT SHANGHAI</h3>
            <h3>UBISOFT SINGAPORE</h3>
            <h3>UBISOFT SOFIA</h3>
            <h3>UBISOFT TOKYO</h3>
          </FooterItems>
          <FooterItems>
            <h1>Platforms</h1>
            <h3>XBOX SERIES X|S</h3>
            <h3>PLAYSTATION®5</h3>
            <h3>UBISOFT CONNECT</h3>
            <h3>LUNA</h3>
            <h3>EPIC GAMES</h3>
            <h3>MACOS</h3>
          </FooterItems>
        </FooterIndex>
        <FooterCopyright>
          <FooterText>
            © 2024 Ubisoft Entertainment. All Rights Reserved. Assassin’s Creed,
            Ubisoft, and the Ubisoft logo are registered or unregistered
            trademarks of Ubisoft Entertainment in the US and/or other
            countries. Mac® & MacApp® are trademarks of Apple Inc.
          </FooterText>
          <FooterRpLogo />
        </FooterCopyright>
      </RightSection>
    </Container>
  );
}

export default FooterSection;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background-image: url("src/"); */
  background-image: linear-gradient(#1c1b1b, black);
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
`;

const LeftSection = styled.div`
  width: 25%;
  height: 140vh;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  padding-top: 10vh;
  padding-left: 10vh;
`;
const RightSection = styled.div`
  width: 75%;
  height: 140vh;
  background-color: #0a0103;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: left;
  padding-top: 10vh;
  padding-left: 10vh;
`;

const FooterIcon = styled.div`
  background-image: url("/footer_logo.png");
  width: 36vh;
  height: 30vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const FooterLogo = styled.div`
  margin-top: 10vh;
  width: 40vh;
  height: 10vh;
  background-image: url("/REDlogo_Vertical_AllWhite_NoCrest.png");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10vh;
`;

const FooterList = styled.div`
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  color: white;
`;
const FooterItems = styled.div`
  color: white;
  padding-left: 10vh;
  padding-bottom: 2vh;
`;
const FooterIndex = styled.div`
  display: flex;
  flex-direction: row;
`;
const FooterText = styled.div`
  color: white;
  font-size: smaller;
  text-align: center;
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const FooterRpLogo = styled.div`
  width: 40vh;
  height: 10vh;
  background-image: url("/eng-rp-likely-m17-content-descriptors.avif");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-left: 5vh;
`;
