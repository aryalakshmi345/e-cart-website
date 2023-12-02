import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <>
     <Navbar style={{zIndex:'1'}}  expand="lg" className="bg-secondary position-fixed top-0 w-100 mb-5">
      <Container>
        <Navbar.Brand><Link to={'/'} style={{textDecoration:"none", color:'black'}}>Teerex</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id=" basic-navbar-nav">
        <input type="text" className='ms-auto form-control w-25' placeholder='Search...'/>
          <Nav className="ms-auto">
            <Nav.Link className='btn bg-light  btn-light border rounded'>
             <Link to={'/wishlist'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-heart text-danger"></i>Wishlist</Link>
            <Badge className='ms-2' bg="dark">{wishlist.length}</Badge>
            </Nav.Link>

            <Nav.Link className='btn bg-light btn-light border rounded ms-2'>
             <Link to={'/cart'} style={{textDecoration:"none", color:'black'}}><i class="me-2 fa-solid fa-cart-shopping text-dark"></i>Cart</Link>
            <Badge className='ms-2' bg="dark">{cart.length}</Badge>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header