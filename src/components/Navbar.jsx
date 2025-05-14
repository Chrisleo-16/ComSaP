import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css'; // Ensure Animate.css is available

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Load user from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        if (parsedData.users) {
          setUserName(parsedData.users);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const toggleMobileNav = useCallback(() => {
    setIsMobileNavActive(prev => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    if (isMobileNavActive) toggleMobileNav();
  }, [isMobileNavActive, toggleMobileNav]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserName('');
    setIsLoggedIn(false);
    setShowDropdown(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // Close mobile nav on link click
  useEffect(() => {
    const links = document.querySelectorAll('#navmenu .link');
    links.forEach(link => link.addEventListener('click', handleLinkClick));
    return () => links.forEach(link => link.removeEventListener('click', handleLinkClick));
  }, [handleLinkClick]);


  return (
    <div>
      <header id="header" className="header position-relative">
        {/* ... (your existing header content remains the same) ... */} <div className="container-fluid container-xl position-relative">
          <div className="top-row d-flex align-items-center justify-content-between">
            <Link to="/" className='link'>
              <img
                src="/images/svg/logo-no-background.svg"
                style={{ width: "800px", marginLeft: '-230px' }}
                alt="Logo"
                className="desk-logo"
              />
              <img 
                src="/images/-high-resolution-logo-grayscale-transparent.png"
                alt="Logo"
                style={{width:"75px"}}
                className="mobile-name"/>
            </Link>
            <div className="d-flex align-items-center">
              <div className="social-links" style={{ marginLeft: "-200px" }}>
                <Link to="https://www.facebook.com/yourusername" className="facebook link"><i className="bi bi-facebook"></i></Link>
                <Link to="https://www.twitter.com/@yourusername" className="twitter link"><i className="bi bi-twitter"></i></Link>
                <Link to="https://www.instagram.com/@v.a.wzen_lyf" className="instagram link"><i className="bi bi-instagram"></i></Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`nav-wrap ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
          <div className="container d-flex justify-content-center position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
              <li><Link to="/" className="active link">Home</Link></li>
                <li><Link to="/about" className='link'>About</Link></li>
                <li><Link to="/category" className='link'>Category</Link></li>
                {/* <li><Link to="/blog-details" className='link'>Blog Details</Link></li> */}
                <li><Link to="/get-services" className='link'>Get Services</Link></li>
                {/* <li className="dropdown">
                  <Link to="#" className='link'>
                    <span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/category" className='link'>Category</Link></li>
                    <li><Link to="/blog-details" className='link'>Blog Details</Link></li>
                    <li><Link to="/author-profile" className='link'>Author Profile</Link></li>
                    <li><Link to="/search-results" className='link'>Search Results</Link></li>
                    <li><Link to="/404" className='link'>404 Not Found Page</Link></li>
                    <li className="dropdown">
                      <Link to="#" className='link'>
                        <span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                      </Link>
                      <ul>
                        <li><Link to="#" className='link'>Deep Dropdown 1</Link></li>
                        <li><Link to="#" className='link'>Deep Dropdown 2</Link></li>
                        <li><Link to="#" className='link'>Deep Dropdown 3</Link></li>
                        <li><Link to="#" className='link'>Deep Dropdown 4</Link></li>
                        <li><Link to="#" className='link'>Deep Dropdown 5</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                <li><Link to="/contact" className='link'>Contact</Link></li>
                
                <div className="buttos d-flex flex-wrap gap-3" style={{ marginLeft: '30px' }}>
  {isLoggedIn ? (
    <>
      <div className="position-relative" ref={dropdownRef}>
        <i
          className="bi bi-person-circle fs-3"
          style={{ cursor: 'pointer', color: '#f75815' }}
          title={userName}
          onClick={() => setShowDropdown(prev => !prev)}
        />
        {showDropdown && (
          <div
            className="position-absolute start-100 top-0 mt-2 ms-2 p-3 shadow-sm animate__animated animate__fadeInDown"
            style={{
              backgroundColor: '#fff7f7',
              borderRadius: '0.5rem',
              minWidth: '220px',
              zIndex: 1000,
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          >
            {/* User info */}
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-star-fill text-warning me-2"></i>
              <span className="fw-semibold">{userName}</span>
            </div>

            <hr className="my-2" />

            {/* Change Name */}
            <div className="mb-2">
              <label className="form-label small fw-semibold mb-1">Change Name</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Change Name"
                disabled
              />
            </div>

            {/* Change Password */}
            <div className="mb-3">
              <label className="form-label small fw-semibold mb-1">Change Password</label>
              <input
                type="password"
                className="form-control form-control-sm"
                placeholder="Change Password"
                disabled
              />
            </div>

            <button
              onClick={handleLogout}
              className="btn w-100 shadow-sm"
              style={{
                backgroundColor: '#f75815',
                color: '#fff',
                borderRadius: '2rem',
                padding: '0.5rem',
              }}
            >
              <i className="bi bi-box-arrow-right me-2"></i>Logout
            </button>
          </div>
        )}
      </div>
    </>
  ) : null}
  </div>
</>
                  
                  ) : (
                    <>
                      <Link to="/sign-up" className="link btn btn-primary">
                        Get Started
                      </Link>
                      <Link to="/sign-in" className="link btn btn-outline">
                        Sign In
                      </Link>
                    </>
                  )}
                </div>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list" onClick={toggleMobileNav}></i>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
