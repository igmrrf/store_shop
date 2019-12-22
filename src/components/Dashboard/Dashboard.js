import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Header from "./Header";
import products from "../Home/PopularCon";
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            products: products
        };
    }
    render() {
        const { products } = this.state;
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
                            <Row>
                                {products.map((data, i) => {
                                    return (
                                        <Col md={3} key={i}>
                                            <Card className="mt-5">
                                                <Card.Img src={data.image} />
                                                <Card.Text>{data.name}</Card.Text>
                                                <Card.Text>${data.price}</Card.Text>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
