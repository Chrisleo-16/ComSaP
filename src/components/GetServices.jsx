import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GetServices = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Assuming you have a method to get the user role (could be from context, state, or an API)
  const userRole = 'Volunteer'; // This is just an example, replace with actual role check logic
  const isEventOrganizer = userRole === 'Volunteer'; // Check if the user is an Event Organizer
  const isAdmin = userRole === 'admin'; // Check if the user is an Admin

  const getEvents = async () => {
    setLoading("Loading Events");
    try {
      const response = await axios.get("https://community.pythonanywhere.com/api/get_events");
      setEvents(response.data);
      setLoading("");
    } catch (error) {
      setLoading('');
      setError(error.message);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    if (!events.length) {
      setFilteredProducts([]);
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = events.filter((event) => {
      const eventDate = new Date(event.event_date_time);
      eventDate.setHours(0, 0, 0, 0);
      if (eventDate < today) return false;

      const q = searchQuery.toLowerCase();
      return (
        event.event_title.toLowerCase().includes(q) ||
        event.event_description.toLowerCase().includes(q)
      );
    });

    setFilteredProducts(filtered);
  }, [events, searchQuery]);

  const imgUrl = "https://community.pythonanywhere.com/static/images/";

  const handleRegisterClick = (event) => {
    if (isAdmin) {
      // If admin, display a message or take them to an admin page
      alert("Admins cannot register for events.");
    } else if (!isEventOrganizer) {
      // If the user is not an event organizer, they can register for events
      navigate('/mpesa-payment', { state: { event } });
    } else {
      // Event organizers cannot register for events they create
      alert("Event organizers cannot register for their own events.");
    }
  };

  return (
    <div className='row container-fluid'>
      <main className="main">
        <div className="page-title">
          <div className="breadcrumbs">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="#"><i className="bi bi-house"></i> Home</Link>
                </li>
                <li className="breadcrumb-item"><Link to="#">Category</Link></li>
                <li className="breadcrumb-item active current">Get Services</li>
              </ol>
            </nav>
          </div>

          <div className="title-wrapper">
            <h1>Get Services</h1>
          </div>
        </div>
      </main>
      <div className="container py-4">
        {loading && (
          <div
            className="alert alert-info d-flex align-items-center w-75 mx-auto animate__animated animate__fadeInDown"
            role="alert"
            style={{ borderRadius: '1rem' }}
          >
            <div
              className="spinner-border spinner-border-sm text-info me-3"
              role="status"
              aria-hidden="true"
            ></div>
            <div>{loading}</div>
          </div>
        )}
        {error && (
          <div
            className="alert alert-danger d-flex align-items-center w-75 mx-auto animate__animated animate__shakeX"
            role="alert"
            style={{ borderRadius: '1rem' }}
          >
            <i className="bi bi-exclamation-triangle-fill me-3 fs-4"></i>
            <div>{error}</div>
          </div>
        )}

        <form
          className="search-form d-flex justify-content-center mb-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="inputi-group w-100">
            <input
              type="text"
              placeholder="Search events..."
              className="form-control rounded-pill shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            />
            <button
              type="submit"
              className="btn shadow-sm"
              style={{
                backgroundColor: '#f75815',
                color: '#fff',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                minWidth: '3.5rem',
                justifyContent: 'center',
              }}
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>

        {/* Event Organizer or Admin specific content rendering */}
        {isAdmin && (
          <div className="alert alert-warning">
            Admins cannot register for events. Please manage the events.
          </div>
        )}

        {isEventOrganizer && (
          <div className="alert alert-info">
            Event organizers cannot register for their own events.
          </div>
        )}

        <div className="row">
          {filteredProducts
            .filter(event => {
              const today = new Date();
              today.setHours(0, 0, 0, 0);
              const d = new Date(event.event_date_time);
              d.setHours(0, 0, 0, 0);
              return d >= today;
            })
            .map((event, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
                <div
                  className="card h-100 shadow-sm"
                  style={{
                    backgroundColor: '#fff7f7',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={imgUrl + event.event_photo}
                    className="card-img-top"
                    alt={event.event_title}
                    style={{ objectFit: 'cover', height: '180px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-truncate">{event.event_title}</h5>
                    <p className="card-text flex-grow-1 text-muted">
                      {event.event_description}
                    </p>
                    <ul className="list-unstyled small mb-3 text-secondary">
                      <li><strong>Location:</strong> {event.event_location}</li>
                      <li><strong>Date:</strong> {new Date(event.event_date_time).toLocaleString()}</li>
                      <li><strong>Organizer:</strong> {event.event_organizer}</li>
                      <li><strong>Cost:</strong> Ksh {event.event_cost}.00</li>
                    </ul>
                    <button
                      onClick={() => handleRegisterClick(event)}
                      className="btn mt-auto"
                      style={{
                        backgroundColor: '#f75815',
                        color: '#fff',
                        borderRadius: '2rem',
                        padding: '0.5rem 1.5rem',
                      }}
                    >
                      {isAdmin || isEventOrganizer ? 'Cannot Register' : 'Register'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GetServices;
