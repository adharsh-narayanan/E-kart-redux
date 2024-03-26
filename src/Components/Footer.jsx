import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
      <div className='w-100 mt-5   d-flex justify-content-center -0 align-items-center flex-column bg-primary text-light'>

        <div className='w-100 row p-5 d-flex justify-content-evenly  ' >


          <div className='col-md-5  mt-5  website' >
            <div className='w-75'>
              <h4> <FontAwesomeIcon icon={faCartShopping}  className='me-3 text-warning' /> E-kart</h4>
              <p style={{ color: 'white', textAlign: `justify` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nemo, magni harum nesciunt reiciendis, consequuntur repellendus ipsam .</p>
            </div>
          </div>

          <div className='col-md-3 mt-5'>
            <h4>Quick Links</h4>

            <ul className='m-0 p-0 ' style={{ listStyle: `none` }}>

              <li><Link style={{ textDecoration: "none", fontSize: '18px' }} to={'/'}>Home</Link></li>
              <li><Link style={{ textDecoration: "none", fontSize: '18px' }} to={'/cart'}>Cart</Link></li>
              <li><Link style={{ textDecoration: "none", fontSize: '18px' }} to={'/wishlist'}>Wish list</Link></li>
            </ul>
          </div>


          <div className=' col-md-4 contact mt-5' >
            <h4>Contact Us</h4>
            <div className='d-flex'>
              <input className='rounded text-dark form-control' type="text" placeholder='enter your email id' />
              <button className='p-2 w-50 btn btn-warning  ms-2 rounded'>Subscribe</button>
              
            </div>
            <div className='d-flex mt-3 fs-4 justify-content-around pt-2'>
                <FontAwesomeIcon style={{cursor:"pointer"}} icon={faInstagram} />
                <FontAwesomeIcon style={{cursor:"pointer"}} icon={faFacebook} />
                <FontAwesomeIcon style={{cursor:"pointer"}} icon={faSquareXTwitter} />
                <FontAwesomeIcon style={{cursor:"pointer"}} icon={faLinkedin} />

              </div>
          </div>

        </div>

        <div>
          <p>Copyright &copy; 2024 E-kart.Built with react</p>
        </div>
      </div>
    </>
  )
}

export default Footer