import React from "react";
import { Card } from "react-bootstrap";
import Button from "../components/iconButton";

const FontCard = props => {
  const cardTextStyle = {
    fontSize: props.fontSize,
    fontFamily: props.fontFamily
  };

  const cardStyle = {
    minWidth: "15rem",
    minHeight: "10rem"
  };

  const buttonPosition = "d-flex justify-content-between ";

  return (
    <Card border="light" style={cardStyle}>
      <Card.Body>
        <div className={buttonPosition}>
          <Card.Title as="h4">{props.cardTitle}</Card.Title>
          <Button icon={props.icon} />
        </div>
        <Card.Text style={cardTextStyle}> {props.cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FontCard;
