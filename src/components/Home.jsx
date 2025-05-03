import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import Swipe from './Swipe'
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
    }, [])
  return (
    <div> <main className="main">

    {/* <!-- Blog Hero Section --> */}
    <section id="blog-hero" className="blog-hero section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="blog-grid">

          {/* <!-- Featured Post (Large) --> */}
          <article className="blog-item featured" data-aos="fade-up">
            <img src="assets/img/blog/blog-post-3.webp" alt="Blog" className="img-fluid"/>
          </article>
          {/* <!-- End Featured Post --> */}

          {/* <!-- Regular Posts --> */}
          <article className="blog-item" data-aos="fade-up" data-aos-delay="100">
            <img src="assets/img/blog/blog-post-portrait-1.webp" alt="Blog" className="img-fluid"/>
          </article>
          {/* <!-- End Blog Item --> */}

          <article className="blog-item" data-aos="fade-up" data-aos-delay="200">
            <img src="assets/img/blog/blog-post-9.webp" alt="Blog" className="img-fluid"/>
          </article>
          {/* <!-- End Blog Item --> */}

          <article className="blog-item" data-aos="fade-up" data-aos-delay="300">
            <img src="assets/img/blog/blog-post-7.webp" alt="Blog" className="img-fluid"/>
          </article>
          {/* <!-- End Blog Item --> */}

          <article className="blog-item" data-aos="fade-up" data-aos-delay="400">
            <img src="assets/img/blog/blog-post-6.webp" alt="Blog" className="img-fluid"/>
          </article>
          {/* <!-- End Blog Item --> */}

        </div>

      </div>

    </section>
    {/* <!-- /Blog Hero Section --> */}

    {/* <!-- Featured Posts Section --> */}
    <Swipe/>
    {/* <!-- /Featured Posts Section --> */}

    {/* <!-- Category Section Section --> */}
    <section id="category-section" className="category-section section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Category Section</h2>
        <div> <span className="description-title">Category Section</span></div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        {/* <!-- Featured Posts --> */}
        <div className="row gy-4 mb-4">
          <div className="col-lg-4">
            <article className="featured-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-6.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Networking</span>
                  <div className="author-meta">
                    <img src="assets/img/person/person-f-13.webp" alt="" className="author-img"/>
                    <span className="author-name">William G.</span>
                    <span className="post-date">28 April 2024</span>
                  </div>
                </div>
                <h2 className="title">
                  <Link to="/category" className='link'>Opportunities for people to connect, partner on projects and build a supportive  network.</Link>
                </h2>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="featured-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-7.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Engagement</span>
                  <div className="author-meta">
                    <img src="assets/img/person/person-m-10.webp" alt="" className="author-img"/>
                    <span className="author-name">Emma D.</span>
                    <span className="post-date">30 May 2024</span>
                  </div>
                </div>
                <h2 className="title">
                  <Link to="/category" className='link'>Community engagement towards collaboration and volunteerism</Link>
                </h2>
              </div>
            </article>
          </div>

          <div className="col-lg-4">
            <article className="featured-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-5.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Success Stories</span>
                  <div className="author-meta">
                    <img src="assets/img/person/person-f-14.webp" alt="" className="author-img"/>
                    <span className="author-name">James F.</span>
                    <span className="post-date">3 June 2024</span>
                  </div>
                </div>
                <h2 className="title">
                  <Link to="/category" className='link'>Showcasing how community efforts have made difference, inspiring others to get involved.</Link>
                </h2>
              </div>
            </article>
          </div>
        </div>

        {/* <!-- List Posts --> */}
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <article className="list-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-6.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Social Impact</span>
                </div>
                <h3 className="title">
                  <Link to="/category" className='link'>Change, Influence, betterment</Link>
                </h3>
                <div className="post-meta">
                  <span className="read-time">2 mins read</span>
                  <span className="post-date">6 April 2026</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-lg-6">
            <article className="list-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-9.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Volunteering Matters</span>
                </div>
                <h3 className="title">
                  <Link to="/category" className='link'>Giving, helping, betterment</Link>
                </h3>
                <div className="post-meta">
                  <span className="read-time">2 mins read</span>
                  <span className="post-date">12 June 2026</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-lg-6">
            <article className="list-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-10.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Collaboration</span>
                </div>
                <h3 className="title">
                  <Link to="/category" className='link'>Teamwork, patnership, synergy</Link>
                </h3>
                <div className="post-meta">
                  <span className="read-time">2 mins read</span>
                  <span className="post-date">9 May 2026</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-lg-6">
            <article className="list-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-2.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Skill Sharing</span>
                </div>
                <h3 className="title">
                  <Link to="/category" className='link'>Learning, teaching, growing</Link>
                </h3>
                <div className="post-meta">
                  <span className="read-time">2 mins read</span>
                  <span className="post-date">15 July 2026</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-lg-6">
            <article className="list-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-1.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Local Initiatives</span>
                </div>
                <h3 className="title">
                  <Link to="/category" className='link'>Action, development</Link>
                </h3>
                <div className="post-meta">
                  <span className="read-time">2 mins read</span>
                  <span className="post-date">18 August 2026</span>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-lg-6">
            <article className="list-post">
              <div className="post-img">
                <img src="assets/img/blog/blog-post-3.webp" alt="" className="img-fluid" loading="lazy"/>
              </div>
              <div className="post-content">
                <div className="category-meta">
                  <span className="post-category">Empowerment</span>
                </div>
                <h3 className="title">
                  <Link to="/category" className='link'>Strength, confidence, uplift</Link>
                </h3>
                <div className="post-meta">
                  <span className="read-time">2 mins read</span>
                  <span className="post-date">21 September 2026</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
    {/* <!-- /Category Section Section --> */}

    {/* <!-- Call To Action 2 Section --> */}
    <section id="call-to-action-2" className="call-to-action-2 section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="advertise-1 d-flex flex-column flex-lg-row gap-4 align-items-center position-relative">

          <div className="content-left flex-grow-1" data-aos="fade-right" data-aos-delay="200">
            <span className="badge text-uppercase mb-2">Don't Miss</span>
            <h2>Revolutionize Your Digital Experience Today</h2>
            <p className="my-4">Strategia accelerates your business growth through innovative solutions and cutting-edge technology. Join thousands of satisfied customers who have transformed their operations.</p>

            <div className="features d-flex flex-wrap gap-3 mb-4">
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Premium Support</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Cloud Integration</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>Real-time Analytics</span>
              </div>
            </div>

            <div className="cta-buttons d-flex flex-wrap gap-3">
              <Link to="#" className="btn btn-primary link">Start Free Trial</Link>
              <Link to="#" className="btn btn-outline link">Learn More</Link>
            </div>
          </div>

          <div className="content-right position-relative" data-aos="fade-left" data-aos-delay="300">
            <img src="assets/img/misc/misc-1.webp" alt="Digital Platform" className="img-fluid rounded-4"/>
            <div className="floating-card">
              <div className="card-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div className="card-content">
                <span className="stats-number">245%</span>
                <span className="stats-text">Growth Rate</span>
              </div>
            </div>
          </div>

          <div className="decoration">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
          </div>

        </div>

      </div>

    </section>
    {/* <!-- /Call To Action 2 Section --> */}

    {/* <!-- Latest Posts Section --> */}
    <section id="latest-posts" className="latest-posts section">

      {/* <!-- Section Title --> */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Latest Posts</h2>
        <div><span>Check Our</span> <span className="description-title">Latest Posts</span></div>
      </div>
      {/* <!-- End Section Title --> */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">

          <div className="col-lg-4">
            <article>

              <div className="post-img">
                <img src="assets/img/blog/blog-post-1.webp" alt="" className="img-fluid"/>
              </div>

              <p className="post-category">Skill-Sharing & Education</p>

              <h2 className="title">
                <Link to="/category" className='link'>Teaching, learning, growing.</Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/person/person-f-12.webp" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author">Maria Doe</p>
                  <p className="post-date">
                    <time datetime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div className="col-lg-4">
            <article>

              <div className="post-img">
                <img src="assets/img/blog/blog-post-2.webp" alt="" className="img-fluid"/>
              </div>

              <p className="post-category">Local Initiatives</p>

              <h2 className="title">
                <Link to="/category" className='link'>Community, projects,progress</Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/person/person-f-13.webp" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author">Allisa Mayer</p>
                  <p className="post-date">
                    <time datetime="2022-01-01">Jun 5, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div className="col-lg-4">
            <article>

              <div className="post-img">
                <img src="assets/img/blog/blog-post-3.webp" alt="" className="img-fluid"/>
              </div>

              <p className="post-category">Volunteering Stories</p>

              <h2 className="title">
                <Link to="/category" className='link'>Experiences, challenges, impact</Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/person/person-m-10.webp" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author">Mark Dower</p>
                  <p className="post-date">
                    <time datetime="2022-01-01">Jun 22, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div className="col-lg-4">
            <article>

              <div className="post-img">
                <img src="assets/img/blog/blog-post-4.webp" alt="" className="img-fluid"/>
              </div>

              <p className="post-category">Social and Mental WellBeing</p>

              <h2 className="title">
                <Link to="/category" className='link'>Balance, health, mindset</Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/person/person-f-14.webp" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author">Lisa Neymar</p>
                  <p className="post-date">
                    <time datetime="2022-01-01">Jun 30, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div className="col-lg-4">
            <article>

              <div className="post-img">
                <img src="assets/img/blog/blog-post-5.webp" alt="" className="img-fluid"/>
              </div>

              <p className="post-category">Impact and Success Stories</p>

              <h2 className="title">
                <Link to="/category" className='link'>Achievements , transformations, results</Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/person/person-m-11.webp" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author">Denis Peterson</p>
                  <p className="post-date">
                    <time datetime="2022-01-01">Jan 30, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>
          {/* <!-- End post list item --> */}

          <div className="col-lg-4">
            <article>

              <div className="post-img">
                <img src="assets/img/blog/blog-post-6.webp" alt="" className="img-fluid"/>
              </div>

              <p className="post-category">Networking and Collaboration</p>

              <h2 className="title">
                <Link to="/category" className='link'>Connection, teamwork, Opportunities</Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src="assets/img/person/person-f-15.webp" alt="" className="img-fluid post-author-img flex-shrink-0"/>
                <div className="post-meta">
                  <p className="post-author">Mika Lendon</p>
                  <p className="post-date">
                    <time datetime="2022-01-01">Feb 14, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>
          {/* <!-- End post list item --> */}

        </div>
      </div>

    </section>
    {/* <!-- /Latest Posts Section --> */}

    {/* <!-- Call To Action Section --> */}
    <section id="call-to-action" className="call-to-action section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-between align-items-center">
          <div className="col-lg-6">
            <div className="cta-content" data-aos="fade-up" data-aos-delay="200">
              <h2>Subscribe to our newsletter</h2>
              <p>Stay informed by subscribing to our newsleter for he lates updates and community highlights</p>
              <form action="forms/newsletter.php" method="post" className="php-email-form cta-form" data-aos="fade-up" data-aos-delay="300">
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email address..." aria-label="Email address" aria-describedby="button-subscribe"/>
                  <button className="btn btn-primary" type="submit" id="button-subscribe">Subscribe</button>
                </div>
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your subscription request has been sent. Thank you!</div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cta-image" data-aos="zoom-out" data-aos-delay="200">
              <img src="assets/img/cta/cta-1.webp" alt="" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- /Call To Action Section --> */}

  </main></div>
  )
}

export default Home