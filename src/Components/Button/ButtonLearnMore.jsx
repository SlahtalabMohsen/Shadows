import "../Button/style.css";
import styled from "styled-components";
function ButtonLearnMore() {
  return (
    // <a href="#" class="btn">
    //   <span class="top-border"></span>
    //   <span class="right-border"></span>
    //   <span class="bottom-border"></span>
    //   <span class="left-border"></span> Sabz Learn
    // </a>
    <BTN className="btn">
      <TopBorder />
      <RightBorder />
      <BottomBorder />
      <LeftBorder />
      LEARN MORE
    </BTN>
  );
}

export default ButtonLearnMore;

const BTN = styled.a`
  cursor: pointer;
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding: 20px 40px;
  backdrop-filter: blur(10px);

  background-color: #00000043;
  font-size: 20px;
  text-decoration: none;
  color: rgb(225, 225, 225);
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  overflow: hidden;
`;
const TopBorder = styled.span`
  position: absolute;
  width: 200px;
  height: 3px;
  top: 0;
  left: 0;
  background-color: rgb(225, 225, 225);
  animation: LTR 1s linear infinite;
  animation-delay: 0;
`;

const RightBorder = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 3px;
  height: 80px;
  background-color: rgb(225, 225, 225);
  animation: UTD 1s linear infinite;
  animation-delay: 0.4s;
`;
const BottomBorder = styled.span`
  position: absolute;
  width: 200px;
  height: 3px;
  right: 0;
  bottom: 0;
  background-color: rgb(225, 225, 225);
  animation: RTL 1s linear infinite;
  animation-delay: 1s;
`;
const LeftBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3px;
  height: 80px;
  background-color: rgb(225, 225, 225);
  animation: DTU 1s linear infinite;
  animation-delay: 1.4s;
`;
