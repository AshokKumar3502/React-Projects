import { useState } from "react";
import React from "react";
import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from "./styledComponents";

const GreetUser = () => {
  const [name, setName] = useState("");
  const onChangeName = (event) => setName(event.target.value);
  return (
    <MainContainer style={{ background: "#454545 " }}>
      <NameInput
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={onChangeName}
      />
      <MsgContent>
        <span style={{ color: "lightblue", fontSize: "30px" }}>
          INDIAN FLAG COLORS
        </span>{" "}
        <br />
        <NameText>{name}</NameText>
      </MsgContent>

      <h2 style={{ color: "#FF671F" }}>{name}</h2>
      <br />
      <h3 style={{ color: "#FF671F" }}>{name}</h3>
      <br />
      <h4 style={{ color: "#FFFFFF" }}>{name}</h4>
      <br />
      <h5 style={{ color: "#FFFFFF" }}>{name}</h5>
      <br />
      <h6 style={{ color: "#FFFFFF" }}>{name}</h6>
      <br />
      <h6 style={{ color: " #046A38", fontSize: "15px" }}>{name}</h6>
      <br />
      <h6 style={{ color: " #046A38", fontSize: "14px" }}>{name}</h6>
      <br />
      <h6 style={{ color: " #046A38", fontSize: "13px" }}>{name}</h6>
    </MainContainer>
  );
};

export default GreetUser;
