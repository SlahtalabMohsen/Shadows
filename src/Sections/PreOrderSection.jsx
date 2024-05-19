import styled from "styled-components";
import Button from "../Components/Button/Button";
import ButtonLearnMore from "../Components/Button/ButtonLearnMore";

function PreOrderSection() {
  return (
    <div>
      <Container>
        <PreOrderText>
          <h1>PRE-ORDER NOW TO GET A BONUS QUEST</h1>
          <p>
            Pre-order now any edition to receive the bonus quest, Thrown to the
            Dogs, available Day 1. Help a loyal dog avenge his late master.
          </p>
          <Button />
        </PreOrderText>
        <PreOrderPhoto />
      </Container>
      <Container>
        <PreOrderPhoto2 />
        <PreOrderText>
          <h1>DISCOVER THE GOLD & ULTIMATE EDITIONS!</h1>
          <p>
            Explore new lands and unravel new mysteries with the Season Pass,
            available in both the Gold and Ultimate Editions. Get even more with
            the Ultimate Edition, which includes additional digital content.
            Play 3 days early by pre-ordering the Gold or the Ultimate Editions!
          </p>
          <Button />
        </PreOrderText>
      </Container>
      <Container>
        <PreOrderText>
          <h1>DISCOVER ASSASSIN’S CREED SHADOWS COLLECTOR’S EDITION</h1>
          <p>
            Get the most premium offer for Assassin’s Creed Shadows with the
            Collector’s Edition, now available for pre-order in limited
            quantities. Play 3 days early, get an Ultimate Edition copy of the
            game with all the digital bonus content included, and enjoy unique
            physical items including a dual character statue.
          </p>
          <ButtonLearnMore />
        </PreOrderText>
        <PreOrderPhoto3 />
      </Container>
    </div>
  );
}

export default PreOrderSection;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  /* background-image: url("src/"); */
  background-image: linear-gradient(#1c1b1b, black);
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const PreOrderPhoto = styled.div`
  width: 50%;
  height: 80%;
  background-image: url("/AC_RED_PREORDER_BONUS_QUEST_WEBSITE_960x540.jpg");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10vh;
  margin-bottom: 4vh;
`;
const PreOrderPhoto2 = styled.div`
  width: 50%;
  height: 80%;
  background-image: url("/RED_MOCKUP_COMPARATIVEGRID_1920x1080_EN.avif");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10vh;
  margin-bottom: 4vh;
`;
const PreOrderPhoto3 = styled.div`
  width: 50%;
  height: 80%;
  background-image: url("/AC_RED_COLLECTOR_WEBSITE_960x540_03.avif");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10vh;
  margin-bottom: 4vh;
`;
const PreOrderText = styled.div`
  width: 35%;
  text-align: left;
  color: aliceblue;
  font-size: larger;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
