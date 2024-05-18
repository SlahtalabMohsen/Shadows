import styled from "styled-components";

import Button from "../Components/Button/Button";

const Contents = styled.div`
  width: 100%;
  height: 120vh;
`;

const RevealSection = styled.div`
  padding-top: 5vh;
  width: 100%;
  height: 120vh;
  margin-top: 5vh;
  text-align: center;
  background-image: url("src/assets/acf-ac-red-header-bg-desktop.avif");
  background-repeat: no-repeat;
  background-position: center;
`;

const BlurSection = styled.div`
  width: 55%;
  height: 160vh;
  margin-left: -30vh;
  margin-top: -40vh;
  background-color: #ff2f2f68;
  backdrop-filter: blur(10px);
  transform: rotate(20deg);
  z-index: -1;
`;
const InfoBox = styled.div`
  color: #e6e6e6;
  width: 40vh;
  position: absolute;
  left: 12%;
  top: 50%;
  transform: translateY(-50%);
  /* background-color: #f0808018; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoBoxImage = styled.div`
  margin-top: 15vh;
  width: 36vh;
  height: 10vh;
  background-image: url("src/assets/REDlogo_Vertical_AllWhite_NoCrest.png");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const BoxImage = styled.div`
  width: 45vh;
  height: 30vh;
  background-image: url("src/assets/Ac-Shadow.jpg");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

function ReavelSection() {
  return (
    <Contents>
      <RevealSection>
        <BlurSection />
        <InfoBox>
          <InfoBoxImage />
          <h1>ASSASSINS CREED SHADOWS</h1>
          <BoxImage />
          <p>
            Coming November 15 on Xbox Series X|S & PlayStation®5, Ubisoft+,
            Amazon Luna, Macs with Apple Silicon via the Mac App Store, as well
            as Windows PC through the Ubisoft Store and the Epic Games Store.
            Play 3 days early by pre-ordering any Premium Edition.
          </p>
          <br />
          <p href="#">WATCH TRAILER</p>
          <Button />
        </InfoBox>
      </RevealSection>
    </Contents>
  );
}

export default ReavelSection;
