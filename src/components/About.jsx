import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <main className="main">

{/* <!-- Page Title --> */}
<div className="page-title">
  <div className="breadcrumbs">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="#" className='link'><i className="bi bi-house"></i> Home</Link></li>
        <li className="breadcrumb-item"><Link to="#" className='link'>Category</Link></li>
        <li className="breadcrumb-item active current">About</li>
      </ol>
    </nav>
  </div>

  <div className="title-wrapper">
    <h1>About</h1>
    <p>Uniting Hearts, Changing Lives</p>
  </div>
</div>
{/* <!-- End Page Title --> */}

{/* <!-- About Section --> */}
<section id="about" className="about section">

  <div className="container" data-aos="fade-up" data-aos-delay="100">

    <span className="section-badge"><i className="bi bi-info-circle"></i> About Us</span>
    <div className="row">
      <div className="col-lg-6">
        <h2 className="about-title">Connecting, Collaborating, Caring</h2>
        <p className="about-description">Our goal as an application is to create a digital platform where peple can:
          </p>
      </div>
      <div className="col-lg-6">
        <p className="about-text">Community Service App is all about connecting individuals, organizatiions, and communities to promote volunteerism, collaboration, and social impact</p>
      </div>
    </div>

    <div className="row features-boxes gy-4 mt-3">
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
        <div className="feature-box">
          <div className="icon-box">
            <i className="bi bi-bullseye"></i>
          </div>
          <h3><Link to="#" className="stretched-link link">Find Volunteer Opportunities</Link></h3>
          <p>Users can browse and join initiatives from that match their interests, skills or schedule.</p>
        </div>
      </div>

      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div className="feature-box">
          <div className="icon-box">
            <i className="bi bi-person-check"></i>
          </div>
          <h3><Link to="#" className="stretched-link link">Organize events</Link></h3>
          <p>Communitiy leaders or organizations can use the app to plan and manage events like clean-ups, blood-drives or educational workshops</p>
        </div>
      </div>

      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div className="feature-box">
          <div className="icon-box">
            <i className="bi bi-clipboard-data"></i>
          </div>
          <h3><Link to="#" className="stretched-link link">Foster collaboration</Link></h3>
          <p>The app acts as a hub for individuals and groups to come together to address local or global issues</p>
        </div>
      </div>
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div className="feature-box">
          <div className="icon-box">
            <i className="bi bi-clipboard-data"></i>
          </div>
          <h3><Link to="#" className="stretched-link link">Promote awareness</Link></h3>
          <p>It spreads information about causes, campaigns, or urgent needs to abroader audience</p>
        </div>
      </div>
    </div>

    {/* <div className="row mt-5">
      <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="200">
        <div className="video-box">
          <img src="assets/img/about/about-wide-1.webp" className="img-fluid" alt="Video Thumbnail"/>
          <Link to="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn link"></Link>
        </div>
      </div>
    </div> */}

  </div>

</section>
{/* <!-- /About Section --> */}

{/* <!-- Team Section --> */}
{/* <section id="team" className="team section light-background">

  {/* <!-- Section Title --> */}
  {/* <div className="container section-title" data-aos="fade-up">
    <h2>Team</h2>
    <div><span>Check Our</span> <span className="description-title">Team</span></div>
  </div> */}
  {/* <!-- End Section Title --> */}

  {/* <div className="container" data-aos="fade-up" data-aos-delay="100">

    <div className="row gy-4">

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <div className="team-member d-flex">
          <div className="member-img">
            <img src="assets/img/person/person-m-7.webp" className="img-fluid" alt="" loading="lazy"/>
          </div>
          <div className="member-info flex-grow-1">
            <h4>Walter White</h4>
            <span>Chief Executive Officer</span>
            <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
            <div className="social">
              <Link to="" className='link'><i className="bi bi-facebook"></i></Link>
              <Link to="" className='link'><i className="bi bi-twitter-x"></i></Link>
              <Link to="" className='link'><i className="bi bi-linkedin"></i></Link>
              <Link to="" className='link'><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Team Member --> */}

      {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
        <div className="team-member d-flex">
          <div className="member-img">
            <img src="assets/img/person/person-f-8.webp" className="img-fluid" alt="" loading="lazy"/>
          </div>
          <div className="member-info flex-grow-1">
            <h4>Sarah Jhonson</h4>
            <span>Product Manager</span>
            <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
            <div className="social">
              <Link to="" className='link'><i className="bi bi-facebook"></i></Link>
              <Link to="" className='link'><i className="bi bi-twitter-x"></i></Link>
              <Link to="" className='link'><i className="bi bi-linkedin"></i></Link>
              <Link to="" className='link'><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End Team Member --> */}

      {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
        <div className="team-member d-flex">
          <div className="member-img">
            <img src="assets/img/person/person-m-6.webp" className="img-fluid" alt="" loading="lazy"/>
          </div>
          <div className="member-info flex-grow-1">
            <h4>William Anderson</h4>
            <span>CTO</span>
            <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
            <div className="social">
              <Link to="" className='link'><i className="bi bi-facebook"></i></Link>
              <Link to="" className='link'><i className="bi bi-twitter-x"></i></Link>
              <Link to="" className='link'><i className="bi bi-linkedin"></i></Link>
              <Link to="" className='link'><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End Team Member --> */}

      {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
        <div className="team-member d-flex">
          <div className="member-img">
            <img src="assets/img/person/person-f-4.webp" className="img-fluid" alt="" loading="lazy"/>
          </div>
          <div className="member-info flex-grow-1">
            <h4>Amanda Jepson</h4>
            <span>Accountant</span>
            <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
            <div className="social">
              <Link to="" className='link'><i className="bi bi-facebook"></i></Link>
              <Link to="" className='link'><i className="bi bi-twitter-x"></i></Link>
              <Link to="" className='link'><i className="bi bi-linkedin"></i></Link>
              <Link to="" className='link'><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End Team Member --> */}

      {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="500">
        <div className="team-member d-flex">
          <div className="member-img">
            <img src="assets/img/person/person-m-12.webp" className="img-fluid" alt="" loading="lazy"/>
          </div>
          <div className="member-info flex-grow-1">
            <h4>Brian Doe</h4>
            <span>Marketing</span>
            <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
            <div className="social">
              <Link to="" className='link'><i className="bi bi-facebook"></i></Link>
              <Link to="" className='link'><i className="bi bi-twitter-x"></i></Link>
              <Link to="" className='link'><i className="bi bi-linkedin"></i></Link>
              <Link to="" className='link'><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End Team Member --> */}

      {/* <div className="col-lg-6" data-aos="fade-up" data-aos-delay="600">
        <div className="team-member d-flex">
          <div className="member-img">
            <img src="assets/img/person/person-f-9.webp" className="img-fluid" alt="" loading="lazy"/>
          </div>
          <div className="member-info flex-grow-1">
            <h4>Josepha Palas</h4>
            <span>Operation</span>
            <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
            <div className="social">
              <Link to="" className='link'><i className="bi bi-facebook"></i></Link>
              <Link to="" className='link'><i className="bi bi-twitter-x"></i></Link>
              <Link to="" className='link'><i className="bi bi-linkedin"></i></Link>
              <Link to="" className='link'><i className="bi bi-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- End Team Member --> */}

    {/* </div>

  </div>

</section> */} 
{/* <!-- /Team Section --> */}

</main>
    </div>
  )
}

export default About;