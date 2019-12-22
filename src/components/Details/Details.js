import React, { Component } from "react";
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Header from "../Header/Header";
import products from "../Home/PopularCon";
import Footer from "../Header/Footer";

class Details extends Component {
    constructor(){
        super()
        this.state = {
            products: products,
        }
    }
    render() {
        const { products } = this.state
        return (
            <div>
                <Header />
                <Container className="mt-5 mb-5 shadow">
                    <Row>
                        <Col>
                            <div className="p-4">
                                <img
                                    src="https://i.pinimg.com/564x/4b/79/1e/4b791e5bace7cb45c784ff97d65267a1.jpg"
                                    alt="details-image"
                                    className="img-fluid"
                                />
                            </div>
                        </Col>

                        <Col>
                            <div className="p-4">
                                <h1>
                                    We Bring You The Best <br /> Simple, Stylish and <br />{" "}
                                    Fashionable Outfit Ideas <br />
                                    For Men That Every Men <br />
                                    Would Love
                                </h1>

                                <h3>USD 45.00</h3>
                            </div>

                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Select Size</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                </Form.Group>

                                <button className="details-btn mt-3">
                                    Buy item Now
                                </button>
                            </Form>
                        </Col>
                    </Row>

                    
                </Container>
                <Container fluid className="pb-5">
                <div className="other">
                        <h4 className="mb-5">Related Products</h4>

                        <Row>
                            {products.slice(0, 4).map((data, i)=>{
                                return (
                                    <Col md={3}>
                                        <Card>
                                            <Card.Img src={data.image}/>
                                <Card.Text>{data.name}</Card.Text>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    </Container>

                    <Footer/>
            </div>
        );
    }
}

export default Details;
