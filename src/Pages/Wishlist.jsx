import {  faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/Slices/WishlistSlice'
import { addToCart } from '../redux/Slices/CartSlice'
import { Link } from 'react-router-dom'

function Wishlist() {
  const dispatch=useDispatch()
  const WishlistArray = useSelector((state)=>state.wishListReducer)
  //console.log(WishlistArray);

  const handleCart =(item)=>{
    dispatch(removeFromWishlist(item.id))
    dispatch(addToCart(item))
  }

  return (
   <> 
  <div  style={{marginTop:'100px'}}>
     <h1 className='text-center mt-5'>Wishlist</h1>
       {WishlistArray?.length>0? <Row className='p-5'>
        {WishlistArray?.map((items)=><Col sm={12} md={6} lg={4} xl={3} className='mb-4' > 
         <Card  className=' rounded' style={{width:'100%' }}>
          <Card.Img variant="top" src={items.thumbnail} width={'100%'} height={'200px'} />
          <Card.Body>
            <Card.Title> {items.title}</Card.Title>
            <Card.Text>
            {items.description?.slice(0,50)}....
              <p className='mt-3 fs-5'><b>Price:${items.price}</b></p>
            </Card.Text>
           <div className='d-flex justify-content-between'>
              <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(items.id))}><FontAwesomeIcon icon={faTrash} /></Button>
              <Button variant="outline-success" onClick={()=>handleCart(items)}><FontAwesomeIcon icon={faCartShopping} /></Button>
              </div>
            </Card.Body>
          
        </Card>
        </Col>)}
        
       </Row>:
  
       <div className='d-flex justify-content-center align-items-center flex-column'>
        <img src="https://2.bp.blogspot.com/-QfSOClZc8r0/XNr6srFlzjI/AAAAAAAAGlA/lzs505eFFiEdyAytzKkMabdUTihKywcqwCLcBGAs/s1600/EXAM360%2B-%2BNo%2BWishlist.png" width={'30%'}  alt="" />
       <Link to={'/'}> <Button className='btn-primary'> Back to home</Button></Link>
       </div>}
  </div>
   </>
  )
}

export default Wishlist