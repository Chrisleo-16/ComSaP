import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div><main className="main">

    {/* <!-- Page Title --> */}
    <div className="page-title position-relative">
      <div className="breadcrumbs">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="#" className='link'><i className="bi bi-house"></i> Home</Link></li>
            <li className="breadcrumb-item"><Link className='link' to="#">Category</Link></li>
            <li className="breadcrumb-item active current">Category</li>
          </ol>
        </nav>
      </div>

      <div className="title-wrapper">
        <h1>Blog Category</h1>
        <p>Building a Stronger Community Through Collaboration</p>
      </div>
    </div>
    {/* <!-- End Page Title --> */}

    <div className="container">
      <div className="row">

        <div className="col-lg-8">

          {/* <!-- Category Postst Section --> */}
          <section id="category-postst" className="category-postst section">

            <div className="container" data-aos="fade-up" data-aos-delay="100">
              <div className="row gy-4">

                <div className="col-lg-6">
                  <article>

                    <div className="post-img">
                      <img src="assets/img/blog/blog-post-1.webp" alt="" className="img-fluid"/>
                    </div>

                    <p className="post-category">Skill-Sharing & Education</p>

                    <h2 className="title">
                      <Link to="blog-details.html" className='link'>Tutorials, tips, and knowledge-sharing on topics relevant to the community.</Link>
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

                <div className="col-lg-6">
                  <article>

                    <div className="post-img">
                      <img src="assets/img/blog/blog-post-2.webp" alt="" className="img-fluid"/>
                    </div>

                    <p className="post-category">Local Initiatives</p>

                    <h2 className="title">
                      <Link to="blog-details.html" className='link'>Updates on community projects, events, and programs aimed at making a positive impact.</Link>
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

                <div className="col-lg-6">
                  <article>

                    <div className="post-img">
                      <img src="assets/img/blog/blog-post-3.webp" alt="" className="img-fluid"/>
                    </div>

                    <p className="post-category">Volunteer Stories</p>

                    <h2 className="title">
                      <Link to="blog-details.html" className='link'>Personal experiences from volunteers,highlighting challenges, successes, and lessons learned</Link>
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

                <div className="col-lg-6">
                  <article>

                    <div className="post-img">
                      <img src="assets/img/blog/blog-post-4.webp" alt="" className="img-fluid"/>
                    </div>

                    <p className="post-category">Social & Menatl Well-Being</p>

                    <h2 className="title">
                      <Link to="blog-details.html" className='link'>Advice on personal development, teamwork, productivity, and maintaining a balanced mindset while contributing to community work.</Link>
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

                <div className="col-lg-6">
                  <article>

                    <div className="post-img">
                      <img src="assets/img/blog/blog-post-5.webp" alt="" className="img-fluid"/>
                    </div>

                    <p className="post-category">Impact & Success Stories</p>

                    <h2 className="title">
                      <Link to="blog-details.html" className='link'>Showcasing how community efforts have made difference, inspiring others to get involved.</Link>
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

                <div className="col-lg-6">
                  <article>

                    <div className="post-img">
                      <img src="assets/img/blog/blog-post-6.webp" alt="" className="img-fluid"/>
                    </div>

                    <p className="post-category">Networking & Collaboration</p>

                    <h2 className="title">
                      <Link to="blog-details.html" className='link'>Opportunities for people to connect, partner on projects and build a supportive  network.</Link>
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
          {/* <!-- /Category Postst Section --> */}

          {/* <!-- Pagination 2 Section --> */}
          {/* <section id="pagination-2" className="pagination-2 section">

            <div className="container">
              <div className="d-flex justify-content-center">
                <ul>
                  <li><Link className='link' to="#"><i className="bi bi-chevron-left"></i></Link></li>
                  <li><Link className='link' to="#">1</Link></li>
                  <li><Link  to="#" className="active link">2</a></li>
                  <li><a to="#">3</a></li>
                  <li><a to="#">4</a></li>
                  <li>...</li>
                  <li><a to="#">10</a></li>
                  <li><a to="#"><i className="bi bi-chevron-right"></i></a></li>
                </ul>
              </div>
            </div>

          </section> */}
         {/*  <!-- /Pagination 2 Section --> */}

        </div>

        <div className="col-lg-4 sidebar">

          <div className="widgets-container" data-aos="fade-up" data-aos-delay="200">

            {/* <!-- Search Widget --> */}
            <div className="search-widget widget-item">

              <h3 className="widget-title">Search</h3>
              <form action="">
                <input type="text"/>
                <button type="submit" title="Search"><i className="bi bi-search"></i></button>
              </form>

            </div>
            {/* <!--/Search Widget --> */}

            {/* <!-- Categories Widget --> */}
            <div className="categories-widget widget-item">

              <h3 className="widget-title">Categories</h3>
              <ul className="mt-3">
                <li><Link to="#" className='link'>General <span>(25)</span></Link></li>
                <li><Link to="#" className='link'>Lifestyle <span>(12)</span></Link></li>
                <li><Link className='link' to="#">Travel <span>(5)</span></Link></li>
                <li><Link className='link' to="#">Design <span>(22)</span></Link></li>
                <li><Link to="#" className='link'>Creative <span>(8)</span></Link></li>
                <li><Link to="#" className='link'>Education <span>(14)</span></Link></li>
              </ul>

            </div>
            {/* <!--/Categories Widget --> */}

            {/* <!-- Recent Posts Widget --> */}
            <div className="recent-posts-widget widget-item">

              <h3 className="widget-title">Recent Posts</h3>

              <div className="post-item">
                <img src="assets/img/blog/blog-post-square-1.webp" alt="" className="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html" className='link'>Awareness Campaigns</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div className="post-item">
                <img src="assets/img/blog/blog-post-square-2.webp" alt="" className="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html" className='link'>Donation drives</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div className="post-item">
                <img src="assets/img/blog/blog-post-square-3.webp" alt="" className="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html" className='link'>Productivity</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div className="post-item">
                <img src="assets/img/blog/blog-post-square-4.webp" alt="" className="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html" className='link'>Orphanage Visiting</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

              <div className="post-item">
                <img src="assets/img/blog/blog-post-square-5.webp" alt="" className="flex-shrink-0"/>
                <div>
                  <h4><Link to="blog-details.html" className='link'>Fundraising & Advocacy</Link></h4>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </div>
              </div>
              {/* <!-- End recent post item--> */}

            </div>
            {/* <!--/Recent Posts Widget --> */}

            {/* <!-- Tags Widget --> */}
            <div className="tags-widget widget-item">

              <h3 className="widget-title">Tags</h3>
              <ul>
                <li><Link className='link' to="#">#CommunityEngagement</Link></li>
                <li><Link className='link' to="#">#VolunteeringMatters</Link></li>
                <li><Link to="#" className='link'>#SocialImpact</Link></li>
                <li><Link to="#" className='link'>#Collaboration</Link></li>
                <li><Link to="#" className='link'>#SkillSharing</Link></li>
                <li><Link to="#" className='link'>#LocalInitiatives</Link></li>
                <li><Link to="#" className='link'>#Empowerment</Link></li>
                <li><Link to="#" className='link'>#Fundraising</Link></li>
                <li><Link to="#" className='link'>#CommunitySuccess</Link></li>
                <li><Link to="#" className='link'>#MentalWellBeing</Link></li>
                <li><Link to="#" className='link'>#Networking</Link></li>
                <li><Link to="#" className='link'>#DiversityAndInclusion</Link></li>
                <li><Link to="#" className='link'>#ChangeMakers</Link></li>
                <li><Link to="#" className='link'>#DigitalCommunity</Link></li>
              </ul>

            </div>
            {/* <!--/Tags Widget --> */}

          </div>

        </div>

      </div>
    </div>

  </main>
</div>
  )
}

export default Category