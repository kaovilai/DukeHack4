import React from "react";
import logo from "./banner.jpg";
import talent from "./talentshow.jpg";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Maps from "./maps";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class Main extends React.Component {
  render() {
    return (
      <div>
      <Container>
    <Row>
      <Col>Info here</Col>
      <Col>Map Here</Col>
    </Row>
    </Container>

      </div>
    );
  }
}
export default Main;