import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Popular from "./Popular";
import About from "./About";
import products from "./PopularCon";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../Header/Header";
import Footer from "../Header/Footer";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            products: products
        };
    }
    render() {
        const { products } = this.state;
        return (
            <div>
                <Header />
                <Container fluid>
                    <div className="top-image mt-4 p-5">
                        <h1>
                            Keep it Simple <br />
                            But Significant
                        </h1>
                    </div>

                    <section className="mt-4">
                        <Popular />
                    </section>
                </Container>
                <section className="mt-4">
                    <About />
                </section>

                <Container fluid>
                    <section className="mt-4 mb-5">
                        <Row>
                            {products.slice(0, 4).map((data, i) => {
                                return (
                                    <Col md={3}>
                                        <Card className="card mb-3" border="light">
                                            <Card.Img src={data.image} />
                                            <Card.Text>{data.name}</Card.Text>
                                            <Card.Text>${data.price}</Card.Text>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </section>
                </Container>

                <section className="mt-5">
                    <Footer />
                </section>
            </div>
        );
    }
}

export default Home;
