import styled from "styled-components";

const SmallSection = styled.div`
  width: 100%;
  height: 50vh;
  color: #483e32;
  background-color: #000000;
  z-index: 10;
  margin-left: -2vh;
  padding-right: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const SmallContentImage = styled.div`
  width: 60%;
  height: 100%;
  background-image: url("src/assets/dagger.jpg");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SmallContentText = styled.div`
  /* background-color: aliceblue; */
  width: 30%;
  text-align: center;
  color: aliceblue;
  font-size: larger;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SmallContent() {
  return (
    <SmallSection>
      <SmallContentImage />

      <SmallContentText>
        <h1>A NEW CREED RISES</h1>
        <p>
          Live the intertwined stories of Naoe, an adept shinobi Assassin from
          Iga Province, and Yasuke, the powerful African samurai of historical
          legend. Against the backdrop of the turbulent late Sengoku period,
          this remarkable duo will discover their common destiny as they usher
          in a new era for Japan.
        </p>
      </SmallContentText>
      <SmallContentText />
    </SmallSection>
  );
}

export default SmallContent;
