import styled from "styled-components";

function PlayItSection() {
  return (
    <Container>
      <HeaderText>
        <h1>PLAY IT YOUR WAY</h1>
        <h3>
          You decide whether to play as a shinobi or samurai. Master
          complementary playstyles of two fully realized protagonists, approach
          quests with whichever character you prefer, as each possesses their
          own respective progression, stats, skills, and gear.
        </h3>
      </HeaderText>
      <Cards>
        <PostCard>
          <PostCardPhoto1 />
          <PostCardTitle>
            <h1>----NAOE----</h1>
            <p>
              Trained as a shinobi assassin from Iga Province, Naoe sets out to
              travel through Japan on a quest for revenge to fulfil an
              impossible promise.
            </p>
          </PostCardTitle>
        </PostCard>
        <PostCard>
          <PostCardPhoto2 />
          <PostCardTitle>
            <h1>----Yasuke----</h1>
            <p>
              After completing his training to become a skilled samurai, Yasuke
              finds a new purpose confronting the demons of his past.
            </p>
          </PostCardTitle>
        </PostCard>
      </Cards>
    </Container>
  );
}

export default PlayItSection;

const Container = styled.div`
  margin-top: -15vh;
  width: 100%;
  height: 140vh;
  /* background-image: url("src/"); */
  background-image: linear-gradient(#1c1b1b, black);
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeaderText = styled.div`
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  width: 60vh;
  height: 30vh;
  justify-content: center;
  align-self: center;
  text-align: center;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 20vh;
`;

const PostCardPhoto1 = styled.div`
  width: 40vh;
  height: 60vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("src/assets/1_desktop_2x.jpg");
`;

const PostCardPhoto2 = styled.div`
  width: 40vh;
  height: 60vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("src/assets/2_desktop_2x.jpg");
`;

const PostCardTitle = styled.div`
  color: white;
  text-align: center;
`;
