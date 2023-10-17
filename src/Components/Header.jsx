import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:"none", color:'black'}}>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn btn-warning border rounded'>
             <Link to={'/wishlist'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-heart text-danger"></i>Wishlist</Link>
            <Badge className='ms-2' bg="dark">0</Badge>
            </Nav.Link>

            <Nav.Link className='btn btn-warning border rounded ms-2'>
             <Link to={'/cart'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-cart-shopping text-warning"></i>Cart</Link>
            <Badge className='ms-2' bg="dark">0</Badge>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header