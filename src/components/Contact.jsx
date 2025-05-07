import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    })
  }, [])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault()
    setLoading("Please wait as we configure your request")
    try {
      const formData = new FormData()
      formData.append('name',name);
      formData.append('email',email);
      formData.append('phone', phone);
      formData.append('service', service);
      formData.append('message',message);
      const response = await axios.post(
        'https://community.pythonanywhere.com/api/contact_us',
        formData
      )
      setSuccess(response.data.Message)
      setTimeout(() => setSuccess(''), 5000)
      
      
    
    } catch (err) {
      console.error(err)
      window.alert('Failed to send message. Please try again.')
    }
      setLoading("")
      setName("")
      setEmail("")
      setPhone("")
      setService("")
      setMessage("")
  }
  const alertStyle = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    minWidth: '300px',
    background: 'rgba(40,167,69,0.9)', // Bootstrap success green
    color: 'white',
    padding: '1rem',
    borderRadius: '0.75rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 9999
  }
  const iconStyle = { fontSize: '1.5rem', marginRight: '0.5rem' }
  const closeBtnStyle = {
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    opacity: 0.8
  }

  return (
    <main className="main">

{/* <!-- Page Title --> */}
<div className="page-title">
  <div className="breadcrumbs">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="#"><i className="bi bi-house"></i> Home</Link></li>
        <li className="breadcrumb-item"><Link to="#">Category</Link></li>
        <li className="breadcrumb-item active current">Contact</li>
      </ol>
    </nav>
  </div>

  <div className="title-wrapper">
    <h1>Contact</h1>
    <p>We would love to hear from you! Whether you have questions, feedback, or ideas to improve our community, feel free to reach out.</p>
  </div>
</div>
{/* <!-- End Page Title --> */}

{/* <!-- Contact Section --> */}
<section id="contact" className="contact section">

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4 mb-5">
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="info-card">
          <div className="icon-box">
            <i className="bi bi-geo-alt"></i>
          </div>
          <h3>Our Address</h3>
          <p>Nairobi, Kenya</p>
        </div>
      </div>

      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
        <div className="info-card">
          <div className="icon-box">
            <i className="bi bi-telephone"></i>
          </div>
          <h3>Contact Number</h3>
          <p>Mobile: +254 (108) 720-342<br/>
            Email: info@comsap.com</p>
        </div>
      </div>

      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div className="info-card">
          <div className="icon-box">
            <i className="bi bi-clock"></i>
          </div>
          <h3>Opening Hour</h3>
          <p>Monday - Saturday: 9:00 - 18:00<br/>
            Sunday: Closed</p>
        </div>
      </div>
    </div>

          <div className="row">
            {showSuccess && (
        <div
          style={alertStyle}
          className="animate__animated animate__bounceInDown"
          data-aos="zoom-in"
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-check-circle-fill" style={iconStyle} />
            <span style={{ fontSize: '1rem' }}>
              ✅ Thanks! {success}
            </span>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            style={closeBtnStyle}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
            <div className="col-lg-12">
              <div className="form-wrapper" data-aos="fade-up" data-aos-delay="400">
                <form onSubmit={submit}>
                  <div className="row">
                    {/* Name */}
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          name="name"                           // ← add name
                          className="form-control"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {/* Email */}
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          name="email"                          // ← add name
                          className="form-control"
                          placeholder="Email address"
                          value={email}                   // ← proper syntax
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    {/* Phone */}
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-phone"></i>
                        </span>
                        <input
                          type="text"
                          name="phone"                          // ← add name
                          className="form-control"
                          placeholder="Phone number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    {/* Service */}
                    <div className="col-md-6 form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <i className="bi bi-list"></i>
                        </span>
                        <select
                          name="service"                        // ← add name
                          className="form-control"
                          value={service}                  // ← match state key
                          onChange={(e) => setService(e.target.value)}
                          required
                        >
                          <option value="">Select service*</option>
                          <option value="Skill Sharing & Education">
                            Skill Sharing & Education
                          </option>
                          <option value="Volunteering">
                            Volunteering
                          </option>
                          <option value="Social & Mental Well-being">
                            Social & Mental Well-being
                          </option>
                          <option value="Fundraising and advocacy">
                            Fundraising and advocacy
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group mt-3">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-chat-dots"></i>
                      </span>
                      <textarea
                        name="message"                            // ← add name
                        className="form-control"
                        rows="6"
                        placeholder="Write a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-center mt-3">
                    <button type="submit" disabled={loading}>
                      {loading ? 'Sending…' : 'Submit Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact

