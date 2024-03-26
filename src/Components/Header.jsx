import { Badge, Button } from 'react-bootstrap';
import React from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const WishlistArray = useSelector((state)=>state.wishListReducer)
  //console.log(WishlistArray);
  const CartArray = useSelector((state)=>state.cartReducer)
  return (
    <Navbar expand="lg" fixed="top" className="bg-primary px-5 py-4">
    <Container fluid>
     <Link to={'/'} className='mb-3'  style={{ textDecoration: "none"}}> <Navbar.Brand href="#" className='text-light '> <FontAwesomeIcon icon={faCartShopping} bounce className='me-3' />E-kart</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className='ms-auto'>
          <Link to={'/wishlist'}  style={{ textDecoration: "none"}} ><Button className='btn btn-outline-light me-5  mb-3 rounded'> <FontAwesomeIcon className='me-2 text-danger'   icon={faHeart} />Wish list <Badge className='ms-2 rounded' bg="secondary">{WishlistArray.length}</Badge></Button></Link>
         <Link to={'/cart'}  style={{ textDecoration: "none"}}> <Button className='btn btn-outline-light rounded me-5'> <FontAwesomeIcon  className='me-2 text-warning' icon={faCartShopping} />Cart <Badge className='ms-2 rounded'  bg="secondary">{CartArray.length}</Badge></Button></Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header