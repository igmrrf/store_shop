import React, { Component } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="login">
                <Row>
                    <Col>
                        <div className="login-left p-5">
                            <h1>
                                Keep it Simple <br />
                                But Significant
                            </h1>
                        </div>
                    </Col>

                    <Col>
                    <h6 className="float-right mt-4 mr-4">Not Yet a User? <Link to='/signup'>Register</Link></h6>
                        <div className="login-card mt-5">
                            
                            <Card className="login-box">
                                <Card.Body>
                                    <Card.Title className="text-center">Log In</Card.Title>
                                    <Form>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" placeholder="Email" />
                                        </Form.Group>

                                        <Form.Group>
                                            <Form.Label>Pasword</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <div className="d-flex justify-content-center">
                                            <button>Log in</button>
                                        </div>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Login;
