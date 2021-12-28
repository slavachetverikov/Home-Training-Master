import React from "react";
import { Card, Button } from "react-bootstrap";
import { TrainingItem } from "./TrainingItem";
import "./ListItemComponent";
import { Link } from "react-router-dom";

interface ListItemComponentProps {
  item: TrainingItem;
}

export function ListItemComponent(props: ListItemComponentProps) {
  let item = props.item;

  return (
    <Link className={"link-desc"} to={"/item/" + item.id}>
      <Card className={"list-item"} style={{ width: "18rem" }}>
        <Card.Img
          className={"list-item-img"}
          style={{ height: 186 }}
          variant="top"
          src={item.imageSrc}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.brief1}</Card.Text>
          <Button className={"btn-main"} variant="success">
            Open
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}
