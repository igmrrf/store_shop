import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <Container className='mt-5 p-5'>
                    <Row>
                        <Col>
                            <h6>Shop</h6>
                            <p>Gifts</p>
                            <p>Store Blog</p>
                        </Col>

                        <Col>
                            <h6>Sell</h6>
                            <p>Sell on Store</p>
                            <p>Teams</p>
                            <p>Forums</p>
                            <p>Affiliates</p>
                        </Col>

                        <Col>
                            <h6>About</h6>
                            <p>Store, Inc.</p>
                            <p>Policies</p>
                            <p>Investors</p>
                            <p>Careers</p>
                            <p>Press</p>
                            <p>Impact</p>
                            <p>Legal Imprint</p>
                        </Col>

                        <Col>
                            <h6>Help</h6>
                            <p>Help Centre</p>
                            <p>Privacy settings</p>
                        </Col>
                    </Row>
                    </Container>
                    <div className="footer-bottom d-flex justify-content-between p-4">
                        <div className="d-flex flex-row">
                            <h6 className='float-left'>Bayelsa</h6>
                        </div>

                        <div className="d-flex flex-row">
                            <h6>2019 Store, Inc</h6>
                            <h6 className='ml-3'>Terms of Use</h6>
                            <h6 className='ml-3'>Privacy</h6>
                            <h6 className='mr-5 ml-3'>Interest Based ads</h6>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
