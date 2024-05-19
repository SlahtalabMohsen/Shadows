import styled from "styled-components";

import ButtonAllNews from "../Components/Button/ButtonAllNews";

function NewsSection() {
  return (
    <Container>
      <NewsContent>
        <HeaderText>
          <h1>LATEST NEWS</h1>
        </HeaderText>
        <Cards>
          <PostCard>
            <PostCardBackground>
              <PostCardPhoto1 />
              <PostCardTitle>
                <p>May 16, 2024 3 Min Read</p>
                <h3>Assassin’s Creed Shadows Collector’s Edition</h3>
                <h4>
                  Get the ultimate Assassin’s Creed Shadows experience with the
                  Collector’s Edition – now available for pre-order!
                </h4>
                <p>READ MORE</p>
              </PostCardTitle>
            </PostCardBackground>
          </PostCard>
          <PostCard>
            <PostCardBackground>
              <PostCardPhoto2 />
              <PostCardTitle>
                <p>May 15, 2024</p>
                <h3>
                  Assassins Creed Shadows Explained - Samurai, Shinobi, and
                  Feudal Japan
                </h3>
                <p>WATCH NOW</p>
              </PostCardTitle>
            </PostCardBackground>
          </PostCard>
          <PostCard>
            <PostCardBackground>
              <PostCardPhoto3 />
              <PostCardTitle>
                <p>May 15, 2024</p>
                <h3>Assassins Creed Shadows: Who Are Naoe and Yasuke?</h3>
                <p>WATCH NOW</p>
              </PostCardTitle>
            </PostCardBackground>
          </PostCard>
        </Cards>
        <ButtonContainer>
          <ButtonAllNews />
        </ButtonContainer>
      </NewsContent>
      <h1>Socials</h1>
      <SocialItems>
        <SocialText>Visit Other Assassins Creed Channels:</SocialText>
        <SocialIcons>
          <SocialIcon1 />
          <SocialIcon2 />
          <SocialIcon3 />
          <SocialIcon4 />
          <SocialIcon5 />
        </SocialIcons>
      </SocialItems>
    </Container>
  );
}

export default NewsSection;

const Container = styled.div`
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

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
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

const PostCardBackground = styled.div`
  width: 50vh;
  height: 70vh;
  background-color: #1c1725;
`;

const PostCardPhoto1 = styled.div`
  width: 50vh;
  height: 30vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/NewSection-1.avif");
  /* background-color: #350080; */
`;
const PostCardPhoto2 = styled.div`
  width: 50vh;
  height: 30vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/NewSection-2.jpg");
  /* background-color: #350080; */
`;
const PostCardPhoto3 = styled.div`
  width: 50vh;
  height: 30vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/NewSection-3.jpg");
  /* background-color: #350080; */
`;

const PostCardTitle = styled.div`
  color: white;
  text-align: left;
  margin-top: 5vh;
  padding-left: 2vh;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding-top: 2vh;
  display: flex;
  justify-content: center;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* background-color: aliceblue; */
  width: 110vh;
`;
const SocialItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
const SocialText = styled.div`
  width: 40vh;
  height: 10vh;
  color: white;
  font-size: small;
  padding-left: 5vh;
  padding-top: 1vh;
`;

const SocialIcon1 = styled.div`
  width: 5vh;
  height: 5vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/_Ubisoft__global_facebook_logo.png");
  /* background-color: #350080; */
  margin-left: 4vh;
  margin-right: 4vh;
`;
const SocialIcon2 = styled.div`
  width: 5vh;
  height: 5vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/_Ubisoft__global_instagram_logo.png");
  /* background-color: #350080; */
  margin-left: 4vh;
  margin-right: 4vh;
`;
const SocialIcon3 = styled.div`
  width: 5vh;
  height: 5vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/_Ubisoft__global_twitch_logo.webp");
  /* background-color: #350080; */
  margin-left: 4vh;
  margin-right: 4vh;
`;
const SocialIcon4 = styled.div`
  width: 5vh;
  height: 5vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/_Ubisoft__global_twitter_logo.png");
  /* background-color: #350080; */
  margin-left: 4vh;
  margin-right: 4vh;
`;
const SocialIcon5 = styled.div`
  width: 5vh;
  height: 5vh;
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/_Ubisoft__global_youtube_logo.png");
  /* background-color: #350080; */
  margin-left: 4vh;
  margin-right: 4vh;
`;
