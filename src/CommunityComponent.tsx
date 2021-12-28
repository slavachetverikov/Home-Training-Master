import React from "react";
import { Button, Card, Carousel, Col, Form, Row } from "react-bootstrap";
import "./CommunityComponent.scss";

export function CommunityComponent() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="support-img carousel-item d-block w-100"
            src="https://www.ibm.com/blogs/watson/wp-content/uploads/2021/03/ACDC-33_WA-Cardinal-Health-Post_2000x1006.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="text main">
            <h3 className="text-main-h3">
              Sign up for your medical consultation
            </h3>
            <p className="text-main-p">
              Our healthcare professionalls will give you individual
              recommendations to support your physical transformation
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row className="form-block">
        <Row>
          <h3 className="header">Make an appointment</h3>
        </Row>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-paragraph">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="password mb-3" controlId="formBasicPassword">
              <Form.Label className="text-paragraph">Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                className="text-muted"
                type="checkbox"
                label="I want to receive news from Home Training Master"
              />
            </Form.Group>
            <Button variant="default" className="btn-signin" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col className="block">
          <Card className="text-center">
            <Card.Header>Take care of yourself</Card.Header>
            <Card.Body>
              <Card.Title className="card-title-heading">
                Check your wellbeing score!
              </Card.Title>
              <Card.Text className="text-paragraph">
                Our special wellbeing test will check how well you fell both
                physcially and mentally. This balance is highly important for
                leading a healthy way of life!
              </Card.Text>
              <Button
                className="btn-signin card-title-heading"
                variant="default"
              >
                Take a test
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <h1 className="header center-text">Why is it important?</h1>
        <p className="text-paragraph text-main-paragraph">
          Staying physically active is important to maintaining a healthy
          lifestyle, and regular exercise is a great way to keep your body and
          mind healthy in a variety of ways. Whether you are just starting to
          work out or currently live an active lifestyle and want to challenge
          yourself more, it is always important to talk with your doctor before
          starting a new exercise routine.
        </p>
        <h3 className="header text-main-paragraph">
          Your Doctor Usually Knows What is Best
        </h3>
        <p className="text-paragraph text-main-paragraph">
          While you know your body the best, visiting your doctor before
          exercising can still be helpful because they may be able to identify
          things problems in your body that are difficult to self-diagnose. By
          talking to your doctor, they can advise you on what type of exercise
          program may or may not be the best fit based on your physical ability.
          For instance, if you have never run in your life starting with a
          beginner’s program or a steady jog would be safer than suddenly trying
          to run a 5K.
        </p>
        <p className="text-paragraph text-main-paragraph">
          Additionally, your physician will be able to tell you if you should be
          exercising more based on your current physical condition or if you
          need to slow down to avoid overworking your body.
        </p>
        <p className="text-paragraph text-main-paragraph">
          Keep in mind that moderate physical activity is generally safe for
          most people. For example, a brisk walk would be okay to take every
          day, but anything more strenuous could cause a problem to arise until
          your body gets used to the activity.
        </p>
        <p className="text-paragraph text-main-paragraph">
          To be proactive, here are some tips for when you should talk with your
          doctor before exercising: You have an ongoing or existing medical
          issue like high blood pressure or cholesterol, asthma, diabetes, joint
          pain, et cetera. You just underwent any type of medical procedure. You
          are pregnant or trying to become pregnant. You feel like you are
          significantly overweight. You are regularly being seen by a doctor for
          a medical condition. You are not currently physically active for at
          least 30 minutes two to three days a week.
        </p>
        <h3 className="header text-main-paragraph">
          Still Exercising? You Still Talk to Your Physician
        </h3>
        <p className="text-paragraph text-main-paragraph">
          Keep your doctor’s phone number handy, because every once in a while
          they can provide an assessment to see if it you need to slow down or
          if you can do more. If you are easing back into a regular exercise
          program, you should not be running long distances or lifting extremely
          heavy weights right off the bat.
        </p>
        <p className="text-paragraph text-main-paragraph">
          Likewise, if you are more advanced, listen to your body and take a
          rest and try not to push yourself too far. Sometimes, pushing your
          body too far with exercise can be just as detrimental as not
          exercising at all, so always err on the side of caution.
        </p>
        <p className="text-paragraph text-main-paragraph">
          Here are some situations where you should call your doctor while you
          are working out: You have shortness of breath often or get dizzy and
          lightheaded easy Experience any pain or numbness in muscles or joints
          for an extended amount of time If you get serious headaches during and
          after working out Your heartbeat is very pronounced or rapid You have
          extreme lower back or lower leg pain during normal, everyday
          activities even during rest
        </p>
        <p className="text-paragraph text-main-paragraph">
          It should also go without saying that if you feel like you have hurt
          yourself in any way, shape or form during exercise that you should
          call your doctor immediately. Even if the pain or discomfort of a
          movement is mild or last for a short time that is enough cause to go
          in for a check-up.
        </p>
        <h3 className="header text-main-paragraph">
          Always Listen to Your Body
        </h3>
        <p className="text-paragraph text-main-paragraph">
          At any time if you feel the least bit unhealthy, do not hesitate to
          consult with your doctor. Sometimes when something may not feel like a
          big deal to you, there could be an underlying issue and a simple
          check-up could provide an easy remedy. Stay proactive by listening to
          your body and talk with a physician before you start a new, more
          rigorous program or about using certain equipment.
        </p>
        <p className="text-paragraph text-main-paragraph">
          By talking with your doctor, together you can address any unique
          challenges you may have towards physical activity. Some can even make
          a specialized diet and exercise plan tailored to fit your own needs
          and goals. Your doctor can easily provide you an assessment of your
          current fitness level to help you learn where it is appropriate to
          start. Remember, working with your doctor is a great first step to
          maintaining a healthy lifestyle.
        </p>
        <h3 className="end-page header text-main-paragraph">
          Stay Fit & Healthy With Home Training Master!
        </h3>
      </Row>
    </>
  );
}

// export function CommunityComponent() {
//   return (
//     <Card className="text-center">
//       <Card.Header>Featured</Card.Header>
//       <Card.Body>
//         <Card.Title>Special title treatment</Card.Title>
//         <Card.Text>
//           With supporting text below as a natural lead-in to additional content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//       <Card.Footer className="text-muted">2 days ago</Card.Footer>
//     </Card>
//   );
// }
