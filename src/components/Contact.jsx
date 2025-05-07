import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Contact = () => {
  useEffect(() => {
      AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: false, // Whether animation should happen only once
        mirror: false, // Whether elements should animate out while scrolling past them
      });
      }, [])
    const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // replace with your Flask endpoint
      await axios.post('/api/contact', form)
      window.alert('Message sent successfully!')
      setForm({ name: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      console.error(err)
      window.alert('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
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
      <div className="col-lg-12">
        <div className="form-wrapper" data-aos="fade-up" data-aos-delay="400">
          <form action=""  onSubmit={handleSubmit} className="">
            <div className="row">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-person"></i></span>
                  <input type="text"  className="form-control" value={form.name} onChange={handleChange} placeholder="Your name" required/>
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                  <input type="email" className="form-control"  placeholder="Email address" value{form.email} onChange={handleChange} required/>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-phone"></i></span>
                  <input type="text" className="form-control" placeholder="Phone number" value={form.phone} onChange={handleChange} required/>
                </div>
              </div>
              <div className="col-md-6 form-group">
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-list"></i></span>
                  <select className="form-control"  value={form.services} onChange={handleChange} required>
                    <option value="">Select service*</option>
                    <option value="Service 1">Skill Sharing & Education</option>
                    <option value="Service 2">Volunteering</option>
                    <option value="Service 3">Social & Mental Well-being</option>
                    <option value="Service 4">Fundraising and advocacy</option>
                  </select>
                </div>
              </div>
              <div className="form-group mt-3">
                <div className="input-group">
                  <span className="input-group-text"><i className="bi bi-chat-dots"></i></span>
                  <textarea className="form-control"  rows="6" placeholder="Write a message" value={form.message} onChange={handleChange} required></textarea>
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" disabled={loading}>{ loading ? 'Sending....': ' Submit Message'}</button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>

  </div>
</section>
{/* <!-- /Contact Section --> */}

</main>
    </div>
  )
}

export default Contact
