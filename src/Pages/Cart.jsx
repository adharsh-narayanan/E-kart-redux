import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../redux/Slices/CartSlice'
faTrash

function Cart() {


  //hooks
  const [total, setTotal] = useState(null)
 const navigate = useNavigate()

  const dispatch = useDispatch()

  //function to access the cart state
  const cartArray = useSelector((state) => state.cartReducer)
  //console.log(cartArray);


  //to calculate total price
  const totalPrice = () => {
   cartArray?.length>0 ? setTotal(cartArray.map((item) => item.price).reduce((p1, p2) => p1 + p2)):setTotal('0')
  }


  //to get totalprice when page loads
  useEffect(() => {
    totalPrice()
  }
    , [cartArray])

  // console.log(total);

  //function to checkout
  const checkOut=()=>{
    alert('your order placed successfully')
    navigate('/')
    dispatch(emptyCart())

  }
  return (
    <>
      <h1 className='text-center mt-5'>Cart</h1>
      <div className='row'>
        <div className="col-md-8 p-5 d-flex justify-content-center align-items-center flex-column" style={{ overflowX: 'auto' }}>
          {cartArray?.length > 0 ? <table className='shadow table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartArray?.map((items, index) => (<tr>
                <td>{index + 1}</td>
                <td>{items.title} </td>
                <td><img src={items.thumbnail} width={'100px'} height={'100px'} alt="" /></td>
                <td>${items.price}</td>
                <td>
                  <Button className='bg-transparent border border-light' onClick={() => { dispatch(removeFromCart(items.id)) }}><FontAwesomeIcon icon={faTrash} className='text-danger' /></Button>
                </td>
              </tr>))}
            </tbody>

          </table> : <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src="https://shoppershawk.com/public/front/img/emptycart.png" width={'100%'} alt="" />
            <Link to={'/'}> <Button className='btn-primary'> Add items to cart</Button></Link>
          </div>}
        </div>
        <div className="col-md-4 p-5 d-flex justify-content-center align-items-center ">

          <div className='shadow p-5'>
            <h3 className='mb-3'>Cart Summary</h3>
            <h5 className='mb-3'>Total Number of producst : <span className='text-warning'>{cartArray.length}</span></h5>
            <h5 className='mb-3'>Total Price: <span className='text-warning'>${total}</span></h5>
            <Button className='btn btn-success w-100'  onClick={()=>checkOut()}>Check Out</Button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Cart