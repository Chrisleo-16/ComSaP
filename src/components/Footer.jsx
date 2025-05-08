import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div><footer id="footer" className="footer mt-5">

    <div className="container footer-top">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 footer-about">
          <Link to="index.html" className="link logo d-flex align-items-center">
            <span className="sitename">ComSaP</span>
          </Link>
          <div className="footer-contact pt-3">
            <p>Nairobi, Kenya</p>
            <p className="mt-3"><strong>Phone:</strong> <span>+254-108-720-342</span></p>
            <p><strong>Email:</strong> <span>info@comsap.com</span></p>
          </div>
          
        </div>

        <div className="col-lg-4 col-md-3 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link className='link' to="/about">About us</Link></li>
            <li><Link className='link' to="/get-services">Services</Link></li>
            <li><Link className='link' to="/sign-up">Get Started</Link></li>
            <li><Link className='link' to="/sign-in">Sign In</Link></li>
          </ul>
        </div>

        
        <div className="col-lg-4 col-md-3 footer-links">
          <h4>Social Links</h4>
          <div className="social-links d-flex mt-4">
            <a href="https://www.twitter.com/@yourusername" target="_blank" className='link'><i className="bi bi-twitter-x"></i></a>
            <a className='link' href="https://www.facebook.com/yourusername" target="_blank"><i className="bi bi-facebook"></i></a>
            <a className='link' target="_blank" href="https://www.instagram.com/@v.a.wzen_lyf"><i className="bi bi-instagram"></i></a>
            <a
  className="link"
  href="https://wa.me/254108720342?text=Hi%20there!%20I'm%20interested%20in%20your%20services.%20Can%20I%20get%20more%20info%20about%20this?"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="bi bi-whatsapp"></i>
</a>

          </div>
        </div>


      </div>
    </div>

    <div className="container copyright text-center mt-4">
      <p>&copy; {new Date().getFullYear()} &nbsp;&nbsp;| &nbsp;&nbsp;<span>Copyright</span> <strong className="px-1 sitename">ComSaP</strong> <span>All Rights Reserved</span></p>
      <div className="credits">
        {/* <!-- All the links in the footer should remain intact. -->
        <!-- You can delete the links only if you've purchased the pro version. -->
        <!-- Licensing information: https://bootstrapmade.com/license/ -->
        <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] --> */}
        Designed by <Link className='link' to="https://github.com/Chrisleo-16/">Leo Chrisben Evans</Link>
      </div>
    </div>

  </footer></div>
  )
}

export default Footer
