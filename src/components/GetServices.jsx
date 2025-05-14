// src/components/GetServices.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'animate.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const GetServices = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const navigate = useNavigate();
  const imgUrl = 'https://community.pythonanywhere.com/static/images/';

  // ―――――――――――――――――――――――――――――
  // 1) Load user auth + role from localStorage
  // ―――――――――――――――――――――――――――――
  useEffect(() => {
    try {
      const userBlob = localStorage.getItem('user');
      if (!userBlob) return;

      const { token, role } = JSON.parse(userBlob);
      if (token) {
        setIsAuthenticated(true);
        setUserRole(role);
      }
    } catch (err) {
      console.error('Failed to parse user:', err);
      localStorage.removeItem('user');
    }
  }, []);

  // ―――――――――――――――――――――――――――――
  // 2) Fetch events from API
  // ―――――――――――――――――――――――――――――
  const getEvents = async () => {
    setLoading('Loading Events…');
    try {
      const { data } = await axios.get(
        'https://community.pythonanywhere.com/api/get_events'
      );
      setEvents(data);
      setLoading('');
    } catch (err) {
      console.error(err);
      setError('Failed to load events.');
      setLoading('');
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // ―――――――――――――――――――――――――――――
  // 3) Filter out past events + apply search
  // ―――――――――――――――――――――――――――――
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filtered = events
      .filter((ev) => {
        const d = new Date(ev.event_date_time);
        d.setHours(0, 0, 0, 0);
        return d >= today;
      })
      .filter((ev) => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return true;
        return (
          ev.event_title.toLowerCase().includes(q) ||
          ev.event_description.toLowerCase().includes(q)
        );
      });

    setFilteredEvents(filtered);
  }, [events, searchQuery]);

  // ―――――――――――――――――――――――――――――
  // 4) Handle Register button logic
  // ―――――――――――――――――――――――――――――
  const handleRegisterClick = (event) => {
    if (!isAuthenticated) {
      // Not logged in → send to sign-up
      navigate('/sign-up', { state: { fromEvent: event } });
    } else if (userRole !== 'admin') {
      // Logged in non-admin → go to payment
      navigate('/mpesa-payment', { state: { event } });
    } else {
      // Logged in admin → block or redirect
      alert('Admins are not allowed to register for events.');
    }
  };

  return (
    <div className="container-fluid row">
      {/* Loading / Error */}
      {loading && (
        <div
          className="alert alert-info w-75 mx-auto animate__animated animate__fadeInDown"
          role="alert"
          style={{ borderRadius: '1rem' }}>
          <div className="spinner-border spinner-border-sm me-3" role="status" />
          {loading}
        </div>
      )}
      {error && (
        <div
          className="alert alert-danger w-75 mx-auto animate__animated animate__shakeX"
          role="alert"
          style={{ borderRadius: '1rem' }}>
          <i className="bi bi-exclamation-triangle-fill me-2 fs-4" />
          {error}
        </div>
      )}

      {/* Search */}
      <form
        className="d-flex justify-content-center mb-4"
        onSubmit={(e) => e.preventDefault()}>
        <div className="input-group w-75">
          <input
            type="text"
            className="form-control rounded-pill shadow-sm"
            placeholder="Search events…"
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
            }}>
            <i className="bi bi-search" />
          </button>
        </div>
      </form>

      {/* Event Cards */}
      <div className="row">
        {filteredEvents.map((event, idx) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={idx}>
            <div
              className="card h-100 shadow-sm"
              style={{
                backgroundColor: '#fff7f7',
                borderRadius: '1rem',
                overflow: 'hidden',
              }}>
              <img
                src={imgUrl + event.event_photo}
                alt={event.event_title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '180px' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate">{event.event_title}</h5>
                <p className="card-text flex-grow-1 text-muted">
                  {event.event_description}
                </p>
                <ul className="list-unstyled small mb-3 text-secondary">
                  <li>
                    <strong>Location:</strong> {event.event_location}
                  </li>
                  <li>
                    <strong>Date:</strong>{' '}
                    {new Date(event.event_date_time).toLocaleString()}
                  </li>
                  <li>
                    <strong>Organizer:</strong> {event.event_organizer}
                  </li>
                  <li>
                    <strong>Cost:</strong> Ksh {event.event_cost}.00
                  </li>
                </ul>
                <button
                  className="btn mt-auto"
                  style={{
                    backgroundColor: '#f75815',
                    color: '#fff',
                    borderRadius: '2rem',
                    padding: '0.5rem 1.5rem',
                  }}
                  onClick={() => handleRegisterClick(event)}>
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetServices;
        
