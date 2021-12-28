import { render } from "@testing-library/react";
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { CartComponent } from "./CartComponent";
import { CommunityComponent } from "./CommunityComponent";
import { HealthyTipsComponent } from "./HealthyTipsComponent";
import { MainComponent } from "./MainComponent";
import { PersProgramComponent } from "./PersProgramComponent";
import { SingleItemComponent } from "./SingleItemComponent";
import { HowItWorksComponent } from "./HowItWorksComponent";

class App extends React.Component<{}, {}> {
  constructor(props: Readonly<{}> | {}) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Home Training Master</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/workout-list">New Workouts</Nav.Link>
                <Nav.Link href="/personal_program">My Training List</Nav.Link>
                <Nav.Link href="/healthy_tips">Healthy Tips</Nav.Link>
                <Nav.Link href="/community">Medical support</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path={""} element={<HowItWorksComponent />} />
          {/* <Route path={""} element={<MainComponent />} /> */}
          <Route path={"workout-list"} element={<MainComponent />} />
          <Route path={"item/:itemId"} element={<SingleItemComponent />} />
          <Route path={"personal_program"} element={<CartComponent />} />
          <Route path={"healthy_tips"} element={<HealthyTipsComponent />} />
          <Route path={"community"} element={<CommunityComponent />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
