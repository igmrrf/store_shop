import React, { Component } from "react";
import { Row, Col, Form, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            Phone: "",
            Password: "",
            confirmPassword: "",
            storeName: "",
            storeDescription: "",
            loading: false
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = e => {
        e.prevenetDefault();
        this.setState({ loading: true });
        this.onSubmitRegister();
    };

    onSubmitRegister = () => {
        const {
            firstName,
            lastName,
            email,
            Phone,
            Password,
            confirmPassword,
            storeName,
            storeDescription,
        } = this.state;
        const obj = {
            firstName,
            lastName,
            email,
            Phone,
            Password,
            confirmPassword,
            storeName,
            storeDescription
        };
        axios({
            method: "post",
            url: "https://tranquil-scrubland-32240.herokuapp.com/​api/user/register",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(result => {
                if (result.token) {
                    this.setState({ registered: true, loading: false });
                } else {
                    this.setState({ message: "Please Try Again", loading: false });
                }
            })
            .catch(err => {
                this.setState({ message: "unexpected error occured", loading: false });
            });
    };
    render() {
        return (
            <div className="login p-2">
                <h6 className="mt-2">
                    Already a User? <Link to="/login">Login</Link>
                </h6>
                <div className="d-flex justify-content-center">
                    {this.state.registered && (
                        <Alert className="text-success">User Registered Successfully</Alert>
                    )}
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-center">Sign up</Card.Title>
                            <Form onSubmit={this.handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Firstname</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Firstname"
                                                name="firstName"
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Lastname</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Lastname"
                                                name="lastName"
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        onChange={this.handleChange}
                                        placeholder="Email"
                                        name="email"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Phone no</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Phone no"
                                        name="Phone"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Pasword</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="Password"
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group>
                                            <Form.Label>Confirm Pasword</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="confirmPassword"
                                                onChange={this.handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group>
                                    <Form.Label>Shop Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        name="storeName"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Shop Descriptiom</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Email"
                                        name="storeDescription"
                                        onChange={this.handleChange}
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-center">
                                    <p className="text-danger"> {this.state.message} </p>
                                    <button disabled={this.state.loading} type="submit">
                                       {this.state.loading ? "Loading" : "Sign Up"}
                                    </button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Signup;
