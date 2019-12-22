import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import { FaGift } from 'react-icons/fa'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="">
                    <Container fluid className="d-flex flex-row justify-content-between">
                    <div className="mt-3">
                        <h6><Link to='/'>The Store</Link></h6>
                    </div>

                    <Form inline>
                        <Form.Group>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <button className="ml-3">Search</button>
                    </Form>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link><Link to='/login' className='nav-link'>Log in</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to='/signup'><button>Sell on Store</button></Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Container>
                    
                    <Nav className="nav d-flex justify-content-between">
                        <Nav.Item>
                            <Nav.Link className='link'>Clothing & Shoes</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='link'>Home & Living</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='link'>Toys & Entertainment</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='link'>Craft & Supplies</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='link'>Art & Collectibles</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='link'>Vintage</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className='link'>Jewelies & Accessoreis</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link className='link'><FaGift className='mr-2'/>Gift</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </header>
                
            </div>
        );
    }
}

export default Header;
