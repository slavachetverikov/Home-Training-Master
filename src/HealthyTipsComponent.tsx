import React, { useState } from "react";
import { Card, Carousel, Col, Figure, Row } from "react-bootstrap";
import "./HealthyTipsComponent.scss";
import "./CommunityComponent.scss";

export function HealthyTipsComponent() {
  return (
    <>
      <Card className="text-white">
        <Card.Img
          src="https://images.unsplash.com/photo-1619426017013-0d6db7b74d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
          alt="Card image"
        />
        <Card.ImgOverlay>
          <Card.Text>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <div className="hide">.</div>
            <Row>
              <Col>
                <h1 className="img-text img-text-main">
                  The Mental Health Benefits of Exercise
                </h1>
                <h6 className="img-text">By Rosa Ronewill, 28 December</h6>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Row></Row>
      <Row>
        <div className="hide">.</div>

        <p className="text-paragraph text-tips-paragraph">
          Exercise is not just about aerobic capacity and muscle size. Sure,
          exercise can improve your physical health and your physique, trim your
          waistline, improve your sex life, and even add years to your life. But
          that’s not what motivates most people to stay active. People who
          exercise regularly tend to do so because it gives them an enormous
          sense of well-being. They feel more energetic throughout the day,
          sleep better at night, have sharper memories, and feel more relaxed
          and positive about themselves and their lives. And it’s also a
          powerful medicine for many common mental health challenges.
        </p>
        <p className="text-paragraph text-tips-paragraph">
          Regular exercise can have a profoundly positive impact on depression,
          anxiety, and ADHD. It also relieves stress, improves memory, helps you
          sleep better, and boosts your overall mood. And you don’t have to be a
          fitness fanatic to reap the benefits. Research indicates that modest
          amounts of exercise can make a real difference. No matter your age or
          fitness level, you can learn to use exercise as a powerful tool to
          deal with mental health problems, improve your energy and outlook, and
          get more out of life.
        </p>
      </Row>
      <Row>
        <Row className="hide">.</Row>
        <Col>
          <Figure>
            <Figure.Image
              className="center"
              src="https://images.pexels.com/photos/841131/pexels-photo-841131.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
            <Figure.Caption className="center text-center">
              Regular exercise have a profoundly positive impact on depression,
              anxiety, and ADHD
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <p className="text-paragraph text-tips-second-paragraph">
            Studies show that exercise can treat mild to moderate depression as
            effectively as antidepressant medication—but without the
            side-effects, of course. As one example, a recent study done by the
            Harvard T.H. Chan School of Public Health found that running for 15
            minutes a day or walking for an hour reduces the risk of major
            depression by 26%. In addition to relieving depression symptoms,
            research also shows that maintaining an exercise schedule can
            prevent you from relapsing.
          </p>
          <p className="text-paragraph text-tips-second-paragraph">
            Exercise is a powerful depression fighter for several reasons. Most
            importantly, it promotes all kinds of changes in the brain,
            including neural growth, reduced inflammation, and new activity
            patterns that promote feelings of calm and well-being. It also
            releases endorphins, powerful chemicals in your brain that energize
            your spirits and make you feel good.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-paragraph text-tips-paragraph">
            Exercise is a natural and effective anti-anxiety treatment. It
            relieves tension and stress, boosts physical and mental energy, and
            enhances well-being through the release of endorphins. Anything that
            gets you moving can help, but you’ll get a bigger benefit if you pay
            attention instead of zoning out.
          </p>
          <p className="text-paragraph text-tips-paragraph">
            Try to notice the sensation of your feet hitting the ground, for
            example, or the rhythm of your breathing, or the feeling of the wind
            on your skin. By adding this mindfulness element—really focusing on
            your body and how it feels as you exercise—you’ll not only improve
            your physical condition faster, but you may also be able to
            interrupt the flow of constant worries running through your head.
            Exercising is an effective way to break this cycle.
            <p className="text-paragraph text-tips-paragraph quote">
              "Know that you’re not alone, there are millions of people across
              the nation and the world who are experiencing the same things that
              you are.” Like Phelps, Beard is a gold medal Olympian. She hid her
              depression for years before getting the courage to speak about it
              publicly.
            </p>
          </p>
        </Col>
        <Col>
          <Figure>
            <Figure.Image
              className="center-second-img"
              src="https://images.pexels.com/photos/221210/pexels-photo-221210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Figure.Caption className="center-second">
              Physical activity immediately boosts the brain’s dopamine,
              norepinephrine, and serotonin levels—all of which affect focus and
              attention
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-paragraph text-tips-paragraph">
            Ever noticed how your body feels when you’re under stress? Your
            muscles may be tense, especially in your face, neck, and shoulders,
            leaving you with back or neck pain, or painful headaches. You may
            feel a tightness in your chest, a pounding pulse, or muscle cramps.
            You may also experience problems such as insomnia, heartburn,
            stomachache, diarrhea, or frequent urination. The worry and
            discomfort of all these physical symptoms can in turn lead to even
            more stress, creating a vicious cycle between your mind and body.
          </p>
          <p className="text-paragraph text-tips-paragraph">
            Exercising regularly is one of the easiest and most effective ways
            to reduce the symptoms of ADHD and improve concentration,
            motivation, memory, and mood. Physical activity immediately boosts
            the brain’s dopamine, norepinephrine, and serotonin levels—all of
            which affect focus and attention. In this way, exercise works in
            much the same way as ADHD medications such as Ritalin and Adderall.
          </p>
          <p className="text-paragraph text-tips-paragraph">
            Evidence suggests that by really focusing on your body and how it
            feels as you exercise, you can actually help your nervous system
            become “unstuck” and begin to move out of the immobilization stress
            response that characterizes PTSD or trauma. Instead of allowing your
            mind to wander, pay close attention to the physical sensations in
            your joints and muscles, even your insides as your body moves.
            Exercises that involve cross movement and that engage both arms and
            legs—such as walking (especially in sand), running, swimming, weight
            training, or dancing—are some of your best choices. Outdoor
            activities like hiking, sailing, mountain biking, rock climbing,
            whitewater rafting, and skiing (downhill and cross-country) have
            also been shown to reduce the symptoms of PTSD.
          </p>
          <div className="hide">.</div>
        </Col>
      </Row>
    </>
  );
}
