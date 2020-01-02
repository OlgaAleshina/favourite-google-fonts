import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import FontCard from "../components/fontCard";

const FontTable = props => {
  const cardText = props.cardText;
  const fontSize = props.fontSize;
  const icon = props.plusIcon;

  return (
    <CardDeck className="container-fluid">
      {props.fonts.map(item => (
        <FontCard
          key={item.family}
          cardTitle={item.family}
          cardText={cardText}
          fontSize={fontSize}
          fontFamily={item.family}
          icon={icon}
        />
      ))}
    </CardDeck>
  );
};

export default FontTable;
