import { useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { DataServiceInstance } from "./DataService";
import { TrainingItem } from "./TrainingItem";
import "./CartItemComponent.scss";
import { Col, Row } from "react-bootstrap";

interface CartItemComponentProps {
  cartItem: CartItem;
}

interface CartItemComponentState {
  item: TrainingItem | null;
}

export function CartItemComponent(props: CartItemComponentProps) {
  let [state, changeState] = useState<CartItemComponentState>({
    item: null,
  });

  useEffect(() => {
    DataServiceInstance.getItem(props.cartItem.id).then((value) => {
      changeState({
        item: value,
      });
    });
  }, []);

  return (
    <div className="cart-item">
      <h3>{state.item?.title}</h3>
      <img src={state.item?.imageSrc} alt="training_item" />
      <Row>
        <Col className="cart-text-paragraph">
          My repetitions: {props.cartItem.quantity}
        </Col>
      </Row>
    </div>
  );
}
