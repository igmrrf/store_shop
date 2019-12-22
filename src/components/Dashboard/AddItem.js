import React, { Component } from "react";
import { Row, Col, Card, Form, Container } from "react-bootstrap";
import Header from "./Header";
import { Link } from 'react-router-dom'

class AddItem extends Component {
    render() {
        return (
            <div className="dashboard">
                <Row>
                    <Col sm={3}>
                        <div className="dashboard-header">
                            <div className="dash-title p-3">
                                M & E Clothing
                                <p><Link to="/add/item">Add Item</Link></p>
                                </div>
                            <Header />
                        </div>
                    </Col>

                    <Col>
                    <div className="dash-article">
                        <Container className="mt-5">
                        <Card>
                            <Card.Header>Add Item</Card.Header>
                            <Card.Body>
                                <Form>
                                    <Row>
                                        <Col>
                                        <Form.Group>
                                            <Form.Label>Item Name</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group>
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="number"/>
                                        </Form.Group>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>
                                        <Form.Group>
                                            <Form.Label>Color</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group>
                                            <Form.Label>Size</Form.Label>
                                            <Form.Control type="text"/>
                                            <p className="muted text-muted">Please specify size in terms of L -large, XL - ExtraLarge, M- Meduim,</p>
                                        </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group>
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control as="textarea" rows="6"/>
                                        </Form.Group>
                                </Form>

                                <div className="d-flex justify-content-center">
                                    <button type="submit">Add</button>
                                </div>
                            </Card.Body>
                        </Card>
                        </Container>
                    </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AddItem;
