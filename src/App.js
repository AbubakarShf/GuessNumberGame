import { React, useState } from "react";
import styled from "styled-components";
import "./style/index.css";
// import InfoIcon from "@material-ui/icons/Info";
let RandomNumber = Math.round(Math.random() * 100);
let HalfProgrammr = require("./img/halfProgrammr.jpeg");
const App = () => {
  const [UserValue, SetUserValue] = useState("");
  const [Result, SetResult] = useState(<p>#Bot🤖 Wana Game!? Looser🤣</p>);
  console.log(RandomNumber);
  const Func = () => {
    const UserGuess = parseInt(UserValue, SetUserValue);
    let Diff = UserGuess - RandomNumber;
    if (UserValue && UserGuess >= 0 && UserGuess <= 100) {
      if (Diff >= 0 && UserGuess !== RandomNumber) {
        if (Diff >= 0 && Diff <= 5) {
          SetResult(<p>😦Your are very Close😮</p>);
        } else if (Diff >= 6 && Diff <= 10) {
          SetResult(<p>🙄Your are SomeHow Close🥱</p>);
        } else if (Diff >= 10 && Diff <= 15) {
          SetResult(<p>🤣Your Guess Is Greatter😛</p>);
        } else {
          SetResult(<p>🤣Guess Is much Greatter(DiffIs>16)💩</p>);
        }
      } else if (Diff < 0) {
        if (Diff <= -1 && Diff >= -3) {
          SetResult(<p>🤢Your Guess Is Small💩</p>);
        } else if (Diff <= -4 && Diff >= -8) {
          SetResult(<p>😴Your Guess is Very Smaller😶</p>);
        } else if (Diff <= -9 && Diff >= -13) {
          SetResult(<p>😴Your Guess is Very Smaller😶</p>);
        } else {
          SetResult(<p>🐭You are lost(DiffIs> -13)👾</p>);
        }
      } else if (UserGuess === RandomNumber) {
        SetResult(<p>Wow Huu🥳! You Got it {RandomNumber}🥳</p>);
      }
    } else {
      alert("Please enter a number b/w 1 & 100!");
    }
  };
  return (
    <>
      <Container>
        <AppContainer>
          <AppHeading>Guess The Number ❗->💯</AppHeading>
          <AppHeading>APP 👻</AppHeading>
          <InputSec
            type="number"
            value={UserValue}
            placeholder="i.e. 5"
            onChange={(e) => {
              SetUserValue(e.target.value);
            }}
          />
          <ResultText>{Result}</ResultText>
          <AppButton onClick={Func}>Smassh Me😜</AppButton>
          <ImgContainer>
            <a href="https://github.com/AbubakarShf" target="_blank">
              <DevImage src={HalfProgrammr.default} />
            </a>
            <FootHeading href="https://github.com/AbubakarShf" target="_blank">
              #HalfProgrammr
            </FootHeading>
          </ImgContainer>
        </AppContainer>
      </Container>
    </>
  );
};

export default App;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AppContainer = styled.div`
  width: 500px;
  height: 600px;
  background-color: #e0dddd;
  border-radius: 20px;
  margin-top: 3.3%;
  transition: box-shadow 0.3s;
  :hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.7);
  }
`;
const AppHeading = styled.p`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: 700;
  font-style: Italic;
`;
const InputSec = styled.input`
  background-color: #e0dddd;
  border: none;
  outline: none;
  border-bottom: #555555 solid 5px;
  font-size: 30px;
  font-weight: 600;
  margin-left: 5.3em;
  max-width: 6em;
  text-align: center;
  color: #787878;
`;
const ResultText = styled.p`
  color: #787878;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 25px;
  font-weight: 600;
`;
const AppButton = styled.button`
  background-color: INDIANRED;
  color: whitesmoke;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  border: #555555 solid 1px;
  outline: none;
  cursor: pointer;
  margin-left: 5em;
  margin-top: 2em;
  :hover {
    background-color: whitesmoke;
    color: INDIANRED;
  }
`;
const FootHeading = styled.a`
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 30px;
  font-weight: 700;
  font-style: Italic;
  color: #116e11;
`;
const ImgContainer = styled.div`
  margin: 10px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;
const DevImage = styled.img`
  border-radius: 52%;
  max-height: 75px;
  object-fit: contain;
  padding-left: 10px;
`;
