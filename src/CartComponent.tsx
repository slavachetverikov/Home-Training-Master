import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { CartItem } from "./CartItem";
import { CartItemComponent } from "./CartItemComponent";
import { cartService } from "./CartService";
import { DataServiceInstance } from "./DataService";
import "./CartComponent.scss";
import ReactPlayer from "react-player";

interface CartComponentState {
  cartItems: CartItem[];
}

export function CartComponent() {
  let [state, changeState] = useState<CartComponentState>({
    cartItems: [],
  });

  useEffect(() => {
    cartService.getCart().then((value) => {
      changeState({
        cartItems: value,
      });
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="cart-header">My workout plan for today</h1>
          {state.cartItems.map((item: CartItem) => {
            return <CartItemComponent cartItem={item} />;
          })}
        </Col>
        <Col>
          <h1 className="cart-header">Before and after training checklist</h1>
          <p className="cart-text-paragraph">
            Here you can write everything you need to do before and after your
            workout session. For example, "drink some water" etc.
          </p>
          <>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <h1 className="cart-header">Check out our inspiration for today</h1>
            <p className="cart-text-paragraph">
              We all need a little bit of inspiration sometimes. Even just to do
              the “simplest” of things like getting out of bed, or applying for
              that job! And during those times, it’s important to remember that
              we are not alone. People have been where we are now and others
              will be there again one day. Check out this video to get yourself
              motivated!
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=p__FXFqGodY"></ReactPlayer>
          </>
        </Col>
      </Row>
    </Container>
  );
}
