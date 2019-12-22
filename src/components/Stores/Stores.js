import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Header from "../Header/Header";
import products from "../Home/PopularCon";
import { Card, Row, Col } from "react-bootstrap";

class Stores extends Component {
    constructor() {
        super();
        this.state = {
            stores: [],
        };
    }

    componentDidMount() {
        this.setState({ stores: products });
    }
    render() {
        console.log(this.state.stores);
        return (
            <div>
                <Header />
                <Container fluid className="mt-5">
                    <h6 className="text-center">Stores</h6>

                    <div className="mt-2">
                        <Row>
                            {this.state.stores.map((data, i) => {
                                return (
                                    <Col md={12}>
                                        <Card>
                                            <img src={data.image}/>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Stores;
