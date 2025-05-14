import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import PureCounter from '@srexi/purecounterjs';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GetServices = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();
  const imgUrl = "https://community.pythonanywhere.com/static/images/";

  // 1. Fetch events
  const getEvents = async () => {
    setLoading("Loading Events");
    try {
      const { data } = await axios.get("https://community.pythonanywhere.com/api/get_events");
      setEvents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // 2. Apply search‐query filter
  useEffect(() => {
    const q = searchQuery.toLowerCase();
    const filtered = events.filter(evt =>
      evt.event_title.toLowerCase().includes(q) ||
      evt.event_description.toLowerCase().includes(q) ||
      evt.event_date_time.toLowerCase().includes(q)
    );
    setFilteredProducts(filtered);
  }, [searchQuery, events]);

  // 3. Split into upcoming vs. past
  const now = new Date();
  const upcomingServices = filteredProducts.filter(evt =>
    new Date(evt.event_date_time) > now
  );
  const pastServices = filteredProducts.filter(evt =>
    new Date(evt.event_date_time) <= now
  );

  // 4. Decide which to show
  const displayServices = upcomingServices.length > 0
    ? upcomingServices
    : pastServices;

  return (
    <div className='row container-fluid'>
      <main className="main">
        {/* ... your breadcrumb & title code ... */}
      </main>

      <div className="container py-4">
        {loading && (
          <div
            className="alert alert-info d-flex align-items-center w-75 mx-auto animate__animated animate__fadeInDown"
            role="alert"
            style={{ borderRadius: '1rem' }}
          >
            <div className="spinner-border spinner-border-sm text-info me-3" role="status" />
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
          onSubmit={e => e.preventDefault()}
        >
          <div className="inputi-group w-100">
            <input
              type="text"
              placeholder="Search events..."
              className="form-control rounded-pill shadow-sm"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
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

        <div className="row">
          {(displayServices.length ? displayServices : []).map((event, idx) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
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
                  <h5 className="card-title text-truncate">
                    {event.event_title}
                  </h5>
                  <p className="card-text flex-grow-1 text-muted">
                    {event.event_description}
                  </p>
                  <ul className="list-unstyled small mb-3 text-secondary">
                    <li><strong>Location:</strong> {event.event_location}</li>
                    <li>
                      <strong>Date:</strong>{' '}
                      {new Date(event.event_date_time).toLocaleString()}
                    </li>
                    <li><strong>Organizer:</strong> {event.event_organizer}</li>
                    <li><strong>Cost:</strong> Ksh {event.event_cost}.00</li>
                  </ul>
                  <button
                    onClick={() =>
                      navigate('/mpesa-payment', { state: { event } })
                    }
                    className="btn mt-auto"
                    style={{
                      backgroundColor: '#f75815',
                      color: '#fff',
                      borderRadius: '2rem',
                      padding: '0.5rem 1.5rem',
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optionally, show a message if neither upcoming nor past exist */}
        {displayServices.length === 0 && !loading && !error && (
          <p className="text-center text-muted">No services found.</p>
        )}
      </div>
    </div>
  );
};

export default GetServices;
