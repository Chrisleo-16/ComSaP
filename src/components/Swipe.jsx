import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Swipe = () => {
    // Data setup id: Unique identifier for each slide
  const slidesData = [
    {
      id: 1,
      image: 'assets/img/blog/blog-post-portrait-1.webp',
      author: 'Julia Parker',
      date: 'Jan 15, 2025',
      comments: 6,
      title: 'Local Initiatives',
      excerpt: 'Updates on community projects, events, and programs aimed at making a positive impact'
    },
    {
      id: 2,
      image: 'assets/img/blog/blog-post-portrait-2.webp',
      author: 'Mark Wilson',
      date: 'Jan 18, 2025',
      comments: 6,
      title: 'Skill-Sharing & Education',
      excerpt: 'Tutorials, tips, and knowledge-sharing on topics relevant to the community'
    },
    {
      id: 3,
      image: 'assets/img/blog/blog-post-portrait-3.webp',
      author: 'Sarah Johnson',
      date: 'Jan 21, 2025',
      comments: 15,
      title: 'Volunteer Stories',
      excerpt: 'Personal experiences from volunteers,highlighting challenges, successes, and lessons learned.'
    },
    {
      id: 4,
      image: 'assets/img/blog/blog-post-portrait-4.webp',
      author: 'David Brown',
      date: 'Jan 24, 2025',
      comments: 10,
      title: 'Social & Mental Well-Being',
      excerpt: 'Advice on personal development, teamwork, productivity, and maintaining a balanced mindset while contributing to community work.'
    },
    {
      id: 5,
      image: 'assets/img/blog/blog-post-portrait-5.webp',
      author: 'Emma Davis',
      date: 'Jan 27, 2025',
      comments: 6,
      title: 'Impact & Success Stories',
      excerpt: 'Showcasing how community efforts have made difference, inspiring others to get involved.'
    }
  ];

  return (
    <section id="featured-posts" className="featured-posts section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Posts</h2>
        <div>
          <span>Check Our</span>{' '}
          <span className="description-title">Featured Posts</span>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          className="blog-posts-slider"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="blog-post-item">
                <img src={slide.image} alt="Blog" />
                <div className="blog-post-content">
                  <div className="post-meta">
                    <span><i className="bi bi-person"></i> {slide.author}</span>
                    <span><i className="bi bi-clock"></i> {slide.date}</span>
                    <span><i className="bi bi-chat-dots"></i> {slide.comments} Comments</span>
                  </div>
                  <h2>
                    <Link to="#" className="link">{slide.title}</Link>
                  </h2>
                  <p>{slide.excerpt}</p>
                  <Link to="#" className="read-more link">
                    Read More <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    // <> This is a bootstrap carousel of this swipe
    //       <div className="container" data-aos="fade-up" data-aos-delay="100">
    //     <div id="blogCarousel" className="carousel slide" data-bs-ride="carousel">
    //       <div className="carousel-inner">
    //         {slidesData.map((slide, index) => (
    //           <div 
    //             className={`carousel-item ${index === 0 ? 'active' : ''}`} 
    //             key={slide.id}
    //           >
    //             <div className="blog-post-item">
    //               <img src={slide.image} className="d-block w-100" alt="Blog" />
    //               <div className="blog-post-content">
    //                 <div className="post-meta">
    //                   <span><i className="bi bi-person"></i> {slide.author}</span>
    //                   <span><i className="bi bi-clock"></i> {slide.date}</span>
    //                   <span><i className="bi bi-chat-dots"></i> {slide.comments} Comments</span>
    //                 </div>
    //                 <h2>
    //                   <Link to="#" className="link">{slide.title}</Link>
    //                 </h2>
    //                 <p>{slide.excerpt}</p>
    //                 <Link to="#" className="read-more link">
    //                   Read More <i className="bi bi-arrow-right"></i>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       {/* Controls */}
    //       <button 
    //         className="carousel-control-prev" 
    //         type="button" 
    //         data-bs-target="#blogCarousel" 
    //         data-bs-slide="prev"
    //       >
    //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button 
    //         className="carousel-control-next" 
    //         type="button" 
    //         data-bs-target="#blogCarousel" 
    //         data-bs-slide="next"
    //       >
    //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span className="visually-hidden">Next</span>
    //       </button>
    //     </div>
    //   </div>
    // </>
  );
};

export default Swipe;
