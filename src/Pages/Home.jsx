import { faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/Usefetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/Slices/WishlistSlice'
import { addToCart } from '../redux/Slices/CartSlice'

function Home() {
  const dispatch = useDispatch()

  const data = useFetch('https://dummyjson.com/products')


  //console.log(data);
  return (
   <Row className='p-5' style={{marginTop:'100px'}}>
    {data?.length>0? data?.map((items,index)=>(<Col sm={12} md={6} lg={4} xl={3}  className='mb-4' > 
     <Card  className=' rounded' style={{width:'100%' }}>
      <Card.Img variant="top" src={items.thumbnail} width={'100%'} height={'200px'}/>
      <Card.Body>
        <Card.Title><b>{items.title?.slice(0,25)}</b></Card.Title>
        <Card.Text>
         {items.description?.slice(0,50)}....
          <p className='mt-3 fs-5'><b>Price:${items.price}</b></p>
        </Card.Text>
       <div className='d-flex justify-content-between'>
          <Button variant="outline-danger" onClick={()=>dispatch(addToWishlist(items))}><FontAwesomeIcon icon={faHeart} /></Button>
          <Button variant="outline-success" onClick={()=>dispatch(addToCart(items))}><FontAwesomeIcon icon={faCartShopping} /></Button>
          </div>
        </Card.Body>
      
    </Card>
    </Col>)):<p className='text-center texr-primary fs-3 fw-bold'>Loading....</p>}
    
   </Row>
  )
}

export default Home