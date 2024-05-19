import styled from "styled-components";

function ExploreSection() {
  return (
    <div>
      <Container>
        <InfoBoxLeft>
          <InfoBoxText>
            <h1>EXPLORE FEUDAL JAPAN</h1>
            <p>
              Discover the captivating open world of feudal Japan, from
              spectacular castle towns and bustling ports to peaceful shrines
              and pastoral landscapes. Adventure through unpredictable weather,
              changing seasons, and reactive environments.
            </p>
          </InfoBoxText>
        </InfoBoxLeft>
      </Container>
      <Container2>
        <InfoBoxRight>
          <InfoBoxText>
            <h1>EXPLORE FEUDAL JAPAN</h1>
            <p>
              Discover the captivating open world of feudal Japan, from
              spectacular castle towns and bustling ports to peaceful shrines
              and pastoral landscapes. Adventure through unpredictable weather,
              changing seasons, and reactive environments.
            </p>
          </InfoBoxText>
        </InfoBoxRight>
      </Container2>
      <Container3>
        <InfoBoxLeft>
          <InfoBoxText>
            <h1>BECOME A LEGENDARY SAMURAI</h1>
            <p>
              As the charismatic samurai Yasuke, strike your foes with brutal
              precision and power. Use his combat-oriented skills to attack,
              block, parry, and defeat your enemies. Master the vast arsenal of
              weapons at your disposal – featuring katana, kanabo, bows,
              naginata, and more – to free Japan from its oppressors.
            </p>
          </InfoBoxText>
        </InfoBoxLeft>
      </Container3>
      <Container4>
        <InfoBoxRight>
          <InfoBoxText>
            <h1>INFORMATION IS YOUR WEAPON</h1>
            <p>
              Travel the world, explore, and scout your surroundings to gather
              vital intel. Build your network of spies to be your eyes and ears
              across locations to unveil new areas and hunt down your next
              target. Along the way, recruit several allies with highly
              specialized skills and abilities to help accomplish your missions.
            </p>
          </InfoBoxText>
        </InfoBoxRight>
      </Container4>
    </div>
  );
}

export default ExploreSection;

const Container = styled.div`
  margin-top: -15vh;
  width: 100%;
  height: 120vh;
  background-image: url("/1_2_AC_RED_Vista_Autumn.png");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Container2 = styled.div`
  margin-top: -15vh;
  width: 100%;
  height: 120vh;
  background-image: url("/3_AC_RED_Naoe_Knife_At_Night.avif");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Container3 = styled.div`
  margin-top: -15vh;
  width: 100%;
  height: 120vh;
  background-image: url("/2_2_AC_RED_Yasuke_Destruction.avif");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
const Container4 = styled.div`
  margin-top: -15vh;
  width: 100%;
  height: 120vh;
  background-image: url("/4_AC_RED_Information.avif");
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const InfoBoxLeft = styled.div`
  position: relative;
  color: #e6e6e6;
  height: 32vh;
  width: 55vh;
  left: 8%;
  top: 55%;
  transform: translateY(-50%);
  background-color: #0000006a;
  backdrop-filter: blur(10px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const InfoBoxRight = styled.div`
  position: relative;
  color: #e6e6e6;
  height: 32vh;
  width: 55vh;
  left: 55%;
  top: 50%;
  transform: translateY(-50%);
  background-color: #0000006a;
  backdrop-filter: blur(10px);
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
`;

const InfoBoxText = styled.div`
  width: 95%;
  text-align: center;
  color: aliceblue;
  font-size: larger;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
