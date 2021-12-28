import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { DataServiceInstance } from "./DataService";
import { ListItemComponent } from "./ListItemComponent";
import { ItemDuration, TrainingItem } from "./TrainingItem";
import "./MainComponent.scss";

interface MainComponentState {
  items: TrainingItem[];
  duration: string | null;
}

export function MainComponent() {
  let [state, changeState] = useState<MainComponentState>({
    items: [],
    duration: null,
  });

  useEffect(() => {
    // Один раз загружаем все товары
    DataServiceInstance.getData(state.duration).then((value) => {
      changeState({
        items: value,
        duration: state.duration,
      });
    });
  }, [state.duration]);

  function onDurationInputChange(event: React.ChangeEvent<HTMLSelectElement>) {
    let value: string = event.target.value;

    changeState({
      ...state,
      duration: value,
    });
  }

  let items = state.items;

  return (
    <Container>
      <Row>
        <h1 className="main-header">Check out your new workouts for you</h1>
        <h3 className="main-text-paragraph">
          After every workout, you can share your reflection - just write some
          comments at the end of the session just for yourself
        </h3>
        <h3 className="main-text-paragraph">
          Tracking your progress is truly rewarding!
        </h3>

        <Col xs={3}>
          <Form.Select
            className="duration-select"
            onChange={(event) => onDurationInputChange(event)}
          >
            {Object.keys(ItemDuration).map((duration) => {
              // @ts-ignore
              let humanReadable = ItemDuration[duration];
              return (
                <option key={duration} value={duration}>
                  {humanReadable}
                </option>
              );
            })}
            <option selected value="">
              All
            </option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        {items.map((item: TrainingItem) => {
          return (
            <Col xs={3} key={item.id}>
              <ListItemComponent item={item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
