import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <Container fluid className="p-5 mb-5">
                        <h3 className="text-center mb-5">What is Store?</h3>
                        <Row>
                            <Col>
                                <article className="text-center">
                                    <h2>A one-of-a-kind <br/> community</h2> <br /> Store is a global online
                                    marketplace, where people come together to make, sell, buy and
                                    collect unique items.
                                </article>
                            </Col>
                            <Col>
                                <article className="text-center">
                                    <h2>Support independent <br/> creators </h2> <br /> There’s no Store warehouse –
                                    just millions of people selling the things they love. We make
                                    the whole process easy, helping you connect directly with makers
                                    to find something extraordinary.
                                </article>
                            </Col>
                            <Col>
                                <article className="text-center">
                                    <h2>Peace of mind </h2> <br/> Your privacy is the highest priority of our
                                    dedicated team. And if you ever need assistance, we are always
                                    ready to step in for support.
                                </article>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default About;
