import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { TrainingItem } from "./TrainingItem";
import ReactPlayer from "react-player";
import "./SingleItemComponent.scss";
import "./ListItemComponent.scss";
import { DataService, DataServiceInstance } from "./DataService";
import { useParams } from "react-router";
import { cartItemFromTrainingItem } from "./CartItem";
import { cartService } from "./CartService";
import {
  Description,
  ImageDescription,
  TextDescription,
  VideoDescription,
} from "./Descriptions";
import { CommentItem } from "./CommentItem";

interface SingleItemComponentState {
  item: TrainingItem | null;
  comments: CommentItem[];
}

export function SingleItemComponent() {
  let { itemId } = useParams();

  let textAreaRef = useRef<HTMLTextAreaElement>(null);

  let [state, changeState] = useState<SingleItemComponentState>({
    item: null,
    comments: [],
  });

  useEffect(() => {
    // Один раз загружаем информацию о товаре
    if (itemId) {
      let itemPromise = DataServiceInstance.getItem(+itemId);

      let commentsPromise = DataServiceInstance.getAllComments(+itemId);

      Promise.all([itemPromise, commentsPromise]).then(([item, comments]) => {
        changeState({
          item: item,
          comments: comments,
        });
      });
    }
  }, []);

  let item = state.item;

  function addToCart() {
    if (item != null) {
      cartService.addCartItem(cartItemFromTrainingItem(item));
    }
  }

  function renderText(desc: TextDescription) {
    return <p>{desc.text}</p>;
  }

  function renderImage(desc: ImageDescription) {
    return <img src={desc.imageSrc} />;
  }

  function renderVideo(desc: VideoDescription) {
    return <ReactPlayer url={desc.videoSrc}></ReactPlayer>;
  }

  /* <ReactPlayer url="https://www.youtube.com/watch?v=2LWiGWtB_l4&ab_channel=POPSUGARFitness"></ReactPlayer> */

  function renderDescription_video(descriptions: Description[]) {
    if (!descriptions) {
      return <div></div>;
    }

    return descriptions.map((description: Description) => {
      if (description.type === "video") {
        return renderVideo(description as VideoDescription);
      }
    });
  }

  function renderDescription_details(descriptions: Description[]) {
    if (!descriptions) {
      return <div></div>;
    }

    return descriptions.map((description: Description) => {
      if (description.type === "text") {
        return renderText(description as TextDescription);
      }
    });
  }

  function renderDescription_img(descriptions: Description[]) {
    if (!descriptions) {
      return <div></div>;
    }

    return descriptions.map((description: Description) => {
      if (description.type === "image") {
        return renderImage(description as ImageDescription);
      }
    });
  }

  function renderDescription4(descriptions: Description[]) {
    if (!descriptions) {
      return <div></div>;
    }

    return descriptions.map((description: Description) => {
      if (description.type === "text") {
        return renderText(description as TextDescription);
      } else if (description.type === "image") {
        return renderImage(description as ImageDescription);
      } else if (description.type === "video") {
        return renderVideo(description as VideoDescription);
      }
    });
  }

  async function submitComment() {
    let current: HTMLTextAreaElement | null = textAreaRef.current;

    if (!current) {
      return;
    }

    let textContent = current.value;

    if (!textContent) {
      return;
    }

    let itemId = state.item?.id;

    if (!itemId) {
      return;
    }

    await DataServiceInstance.submitComment(itemId, textContent);

    current.value = "";

    state.comments.push({
      text: textContent,
      trainingItemId: 0,
    });

    changeState({
      ...state,
      comments: state.comments,
    });
  }

  function renderItem(item: TrainingItem | null) {
    if (!item) {
      return <div></div>;
    }

    return (
      <Container>
        <Row>
          <Col>
            <img className={"item-image"} src={item.imageSrc} />
          </Col>
          <Col>
            <h1 className="name-card">{item.title}</h1>
            <p className="text-paragraph">{item.brief1}</p>
            <p className="text-paragraph">{item.brief2}</p>
            <Card style={{ width: "39rem" }}>
              <Card.Header>How it works?</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  If you enjoy the training, add it to your personal list in
                  order not to forget
                </ListGroup.Item>
                <ListGroup.Item>
                  Contact our trainers for additional offline training
                  experience
                </ListGroup.Item>
                <ListGroup.Item>
                  Combine online trainings with offline practice to solidfy your
                  transformation!
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="hide">.</Row>
        <Row className="hide">.</Row>
        <Row>
          <Col>
            {renderDescription_video(item.description)}
            <Button
              onClick={() => addToCart()}
              className={"item-btn"}
              variant="success"
            >
              Add to my training list
            </Button>
          </Col>
          <Col className="text-paragraph">
            {renderDescription_details(item.description)}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>{renderDescription_img(item.description)}</Col>
        </Row>

        <div className="comment-block ">
          {state.comments.map((comment) => {
            return (
              <Row>
                <Col>
                  <p className="comment">{comment.text}</p>
                </Col>
              </Row>
            );
          })}
        </div>

        <Row>
          <Col>
            <textarea className="comment-input" ref={textAreaRef} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => submitComment()}>Submit</Button>
          </Col>
        </Row>
      </Container>
    );
  }

  return renderItem(item);
}
