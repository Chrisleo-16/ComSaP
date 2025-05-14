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

    const submit = async (e) => {
        e.preventDefault();
        setMessage('');

        // Basic Kenyan phone number validation (e.g., 254XXXXXXXXX)
        const phonePattern = /^254\d{8}$/;
        if (!phone || !phonePattern.test(phone)) {
            setMessage('Please enter a valid phone number (e.g. 254XXXXXXXXX).');
            return;
        }

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

                    <form className="payment-form" onSubmit={submit}>
                        <div className="inputs-group">
                            <input
                                type="tel"
                                className="inputs w-100"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                            <label className="user-label">Enter Phone e.g. 254XXXXXXXXX</label>
                        </div>

                        <button
                            type="submit"
                            className="payment-button"
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
                            <div className={`alert-toast ${message.toLowerCase().includes('success') ? 'success' : 'error'}`}>
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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MpesaPayment;
