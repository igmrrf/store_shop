import React, { Component } from "react";
import products from "./PopularCon";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Popular extends Component {
    constructor() {
        super();
        this.state = {
            products: products
        };
    }
    render() {
        const { products } = this.state;
        console.log(products);
        return (
            <div>
                <div className="">
                    <h3 className="text-center">Popular Now</h3>

                    <div className="mt-3">
                        <Row>
                            {products.map((data, i) => {
                                return (
                                    <Col md={3} key={i}>
                                        <Card className="mb-3" border="light">
                                            <Card.Img src={data.image} alt="popular" />
                                            <Card.Text>{data.name}</Card.Text>
                                            <Card.Text>${data.price}</Card.Text>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Popular;
