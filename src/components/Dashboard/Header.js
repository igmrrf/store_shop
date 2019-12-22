import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { FaGift } from "react-icons/fa";
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <Nav className="d-flex flex-column">
                    <Nav.Item>
                        <Nav.Link><Link to="/dashboard" className="other-link">DashBoard</Link></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Clothing & Shoes</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Home & Living</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Toys & Entertainment</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Craft & Supplies</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Art & Collectibles</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Vintage</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">Jewelies & Accessoreis</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link className="dash-link">
                            <FaGift className="mr-2" />
                            Gift
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        );
    }
}

export default Header;
