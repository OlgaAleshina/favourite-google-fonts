import React from "react";
import { Button } from "react-bootstrap";

const MyButton = props => {
  return (
    <Button
      variant="outline-secondary"
      size="lg"
      id={props.id}
      aria-label={props.label}
      onClick={props.action}
    >
      <i className={props.icon}> </i>
      {props.title}
    </Button>
  );
};

export default MyButton;
