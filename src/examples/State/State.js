import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled, { css } from "styled-components";
import { useMedia } from "../../hooks/useMedia";
import { H2 } from "../../presentation";
function State() {
  const [menuToggled, setMenuToggled] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [buttonClicks, setButtonClicks] = useState(0);
  const isSmallScreen = useMedia([`(max-width: 850px)`], [true], false);
  return (
    <Wrapper isSmallScreen={isSmallScreen} bgColor={bgColor}>
      <H2 isSmallScreen={isSmallScreen} style={{ color: "#000" }}>
        State
      </H2>
      <Label>
        Background color
        <Input value={bgColor} onChange={e => setBgColor(e.target.value)} />
      </Label>
      <Label style={{}}>
        Toggle menu
        <CheckboxContainer>
          <input
            type="checkbox"
            checked={menuToggled}
            onChange={() => setMenuToggled(!menuToggled)}
          />
          <span />
        </CheckboxContainer>
      </Label>
      <Button onClick={() => setButtonClicks(buttonClicks + 1)}>
        Klik mig
      </Button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          margin: "100px 0"
        }}
      >
        <div style={{ fontWeight: 600, borderBottom: "solid 1px black" }}>
          State
        </div>
        <div style={{ fontWeight: 600, borderBottom: "solid 1px black" }}>
          Value
        </div>
        <div>bgColor</div>
        <div>{bgColor}</div>
        <div>menuToggled</div>
        <div>{menuToggled.toString()}</div>
        <div>buttonClicks</div>
        <div>{buttonClicks}</div>
      </div>
      <Menu toggled={menuToggled} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  text-align: start;
  transition: background-color 0.3s;
  ${props =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `};
  ${props =>
    props.isSmallScreen &&
    css`
      font-size: 1rem;
      padding: 10px;
    `};
`;

const Button = styled.button`
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
  height: 60px;
  background-color: #eee;
  outline: none;
  border: solid 1px #ccc;
  box-shadow: 0 4px 12px 0 rgba(16, 42, 67, 0.2);
  transition: background-color 0.3s;
  :hover {
    background-color: #eef;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  line-height: 40px;
`;

const Input = styled.input`
  margin-left: 10px;
`;

const CheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  /* margin-top: 5px; */
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom checkbox */
  span {
    position: absolute;
    top: -12px;
    left: 30px;
    height: 30px;
    width: 30px;
    background-color: #fff;
    transition: background-color 0.3s;
    border: solid 2px #000;
    border-radius: 3px;
    /* Create the checkmark/indicator (hidden when not checked) */
    ::after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  /* On mouse-over, add a grey background color */
  :hover input ~ span {
    border: solid 3px #000;
  }

  /* When the checkbox is checked, add a blue background */
  input:checked ~ span {
    background-color: #000;
    border: none;
  }

  /* Show the checkmark when checked */
  input:checked ~ span::after {
    display: block;
  }

  /* Style the checkmark/indicator */
  span:after {
    left: 10px;
    top: 5px;
    width: 7px;
    height: 13px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(42deg);
    -ms-transform: rotate(42deg);
    transform: rotate(42deg);
  }
`;

function Menu(props) {
  const { toggled } = props;
  const isSmallScreen = useMedia([`(max-width: 600px)`], [true], false);
  const style = {
    position: "fixed",
    right: 0,
    bottom: 0,
    top: isSmallScreen ? "unset" : 0,
    height: isSmallScreen ? 150 : "unset",
    left: isSmallScreen ? 0 : "unset",
    width: isSmallScreen ? "100vw" : 300,
    boxShadow: "0 4px 12px 0 rgba(16, 42, 67, 0.2)",
    padding: "1em 2em",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "hsl(210, 36%, 96%)"
  };
  const animation = useSpring({
    transform: toggled
      ? "translate3d(0%, 0%, 0)"
      : isSmallScreen
      ? "translate3d(0%, 100%, 0)"
      : "translate3d(100%, 0%, 0)"
  });
  return (
    <animated.div style={{ ...style, ...animation }}>
      <h2>Menu</h2>
      <List>
        <Item>Home</Item>
        <Item>About</Item>
        <Item>Contact</Item>
      </List>
    </animated.div>
  );
}
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
const Item = styled.li``;

export default State;
