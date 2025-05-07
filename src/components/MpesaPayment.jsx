import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MpesaPayment = () => {
    const { event } = useLocation().state || {};
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setLoading(true);

        const formData = new FormData();
        formData.append('phone', phone);
        formData.append('amount', event.event_cost);

        try {
            const response = await axios.post('https://community.pythonanywhere.com/api/mpesa_payment', formData);
            setMessage(response.data.message);
            setPhone('');
        } catch (error) {
            setMessage('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="payment-container">
            <div className="payment-wrapper">
                <div className="payment-card">
                    <div className="payment-header">
                        <h2 className="payment-title">Lipa na M-PESA Payment</h2>
                        <div className="event-info">
                            <h4 className="event-title">{event.event_title}</h4>
                            <div className="amount-wrapper">
                                <span className="amount-label">Amount:</span>
                                <span className="amount">KES {event.event_cost}</span>
                            </div>
                        </div>
                    </div>

                    <div className="payment-form">
                        <div className="inputs-group">
                                <input
                                    type="tel"
                                    className="inputs w-100"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required 
                                />
                            <label className="user-label" htmlFor="">Enter Phone e.g. 254 XXX XXX XXX</label>
                        </div>

                        <button
                            type="submit"
                            className="payment-button"
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="loading-spinner">
                                    <i className="fas fa-spinner fa-spin"></i>
                                </span>
                            ) : (
                                'Complete Payment'
                            )}
                        </button>

                        {message && (
                            <div className={`alert-toast ${message.includes('successful') ? 'success' : 'error'}`}>
                                <div className="alert-text">{message}</div>
                            </div>
                        )}

                        <div className="back-link">
                            <button
                                type="button"
                                className="btn btn-link link"
                                onClick={() => navigate('/get-services')}
                            >
                                ← Back to Events
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MpesaPayment;
