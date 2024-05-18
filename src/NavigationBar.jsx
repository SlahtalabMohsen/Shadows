// import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  height: 7vh;
  width: 100%;
  background-color: #4646468e;
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: start;
  padding-left: 4vh;
  padding-top: 2vh;
  margin-top: -2vh;
  margin-left: -2vh;
  z-index: 11;
`;
const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vh;
`;
const ListItem = styled.li`
  list-style-type: none;
  color: #e0e0e0;
`;
const NavTitle = styled.div`
  width: 18vh;
  height: 5vh;
  background-image: url("src/assets/ac_franchise_logo_desktop.png");
  background-position: inherit;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 2vh;
`;
const NavigationBar = () => {
  return (
    <NavBar>
      <NavTitle />
      <List>
        <ListItem>Games</ListItem>
        <ListItem>News</ListItem>
        <ListItem>Photo mode</ListItem>
        <ListItem>More than games</ListItem>
        <ListItem>Discovery tour</ListItem>
        <ListItem>Help</ListItem>
      </List>
    </NavBar>
  );
};

export default NavigationBar;
