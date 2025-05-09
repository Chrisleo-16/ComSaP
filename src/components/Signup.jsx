import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'
import "animate.css/animate.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';



const Signup = () => {

  const [user, setUser] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [phone, setPhone] = useState('');

  const [role, setRole] = useState('');



  const [isLoading, setIsLoading] = useState('');

  const [error, setError] = useState('');

  const [success, setSuccess] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);
  const [shakeConfirm, setShakeConfirm] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setShowPassword((v) => !v);
    // trigger animation class toggle
    setToggled(true);
    setTimeout(() => setToggled(false), 1000); // duration matches animate.css default
  };
  const handleConfirmToggle = () => {
    setShowConfirm(!showConfirm);
  };
  useEffect(() => {
    if (confirmPassword && confirmPassword !== password) {
      setShakeConfirm(true);
      const timer = setTimeout(() => setShakeConfirm(false), 800);
      return () => clearTimeout(timer);
    }
  }, [confirmPassword, password]);

  const isMatch = confirmPassword && confirmPassword === password;
  const isMismatch = confirmPassword && confirmPassword !== password;



  const submit = async (e) => {

    e.preventDefault();

    setIsLoading("Kindly Wait while we Identify you as one of us")
    // Create a user object with the input data
    // const userInfo = {
    //   users: user,
    //   email: email,
    //   password: password,
    //   // You can add more user info if needed
    // };

    try {

      const formData = new FormData()

      formData.append('users', user)

      formData.append('email', email)

      formData.append('password', password)

      formData.append('phone', phone)

      formData.append('users_role', role)
      // Save user information to local storage
      const response = await axios.post("https://community.pythonanywhere.com/api/sign_up", formData)
      localStorage.setItem('user', JSON.stringify({ users: response.data.user }));

      setSuccess(response.data.Success)

      setError("")

    } catch (error) {

      setIsLoading("")

      setError(error.message)

    }

    setUser("")

    setEmail("")

    setPassword("")

    setPhone("")

    setRole("")
    setIsLoading("")

  }

  return (

    <div className='App row justify-content-center mt-4'>

      <div className='col-md-8 p-5'>

        {isLoading && <div className='alert alert-info'>{isLoading}</div>}

        {error && <div className='alert alert-danger'>{error}</div>}

        {success && <div className='alert alert-success'>{success}</div>}

        <form action="" onSubmit={submit}>
          <h1 style={{
            marginLeft: '50px'
          }}>SIGN UP</h1>
          <br />
          <div className="inputs-group m-5">

            <input type="text" className='inputs w-75'
              value={user}
              required
              onChange={(e) => setUser(e.target.value)}

            />
            <label htmlFor="" className='user-label'>Username</label>
          </div>
          <div className="inputs-group m-5">
            <input type="email" className='inputs w-75'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            /><label htmlFor="" className='user-label'>Email Address</label>
          </div>
                    <div className="inputs-group m-5">
      <input
        type={showPassword ? "text" : "password"}
        className={`inputs w-75 animate__animated ${toggled ? 'animate__pulse' : ''}`}
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="user-label animate__animated animate__fadeInDown">
        Password
      </label>

      {/* toggle button using Bootstrap Icons */}
      <button
        type="button"
        className="show-password-toggle animate__animated animate__fadeIn"
        onClick={handleToggle}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} />
      </button>
    </div>
           <div className="inputs-group m-5">
        <input
          type={showConfirm ? 'text' : 'password'}
          className={`inputs w-75 animate__animated ${
            shakeConfirm ? 'animate__shakeX' : ''
          } ${
            isMismatch
              ? 'border border-danger'
              : isMatch
              ? 'border border-success'
              : ''
          }`}
          required
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label className="user-label animate__animated animate__fadeInDown">
          Confirm Password
        </label>
        <button
          type="button"
          className="show-password-toggle animate__animated animate__fadeIn"
          onClick={handleConfirmToggle}
          aria-label={showConfirm ? 'Hide password' : 'Show password'}
        >
          <i className={`bi ${showConfirm ? 'bi-eye-slash' : 'bi-eye'}`} />
        </button>
      </div>
          <div className="inputs-group m-5">

            <input type="tel" className='inputs w-75'
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            /><label htmlFor="" className='user-label'>Phone No.</label>
          </div>
          <div className="inputs-group m-5">
  <select
    className="dropdowns"
    value={role}
    onChange={(e) => setRole(e.target.value)}
    required
  >
    <option value="" disabled className="crac">
      Users Role
    </option>
    <option value="Admin">Admin</option>
    <option value="Event Organizer">Event Organizer</option>
    <option value="Volunteer">Volunteer</option>
    <option value="Beneficiary">Beneficiary</option>
    <option value="Sponsor/Donor">Sponsor/Donor</option>
    <option value="Moderator">Moderator</option>
  </select>
</div>
         <p style={{
            marginLeft: '50px'
          }} className='mt-4'>Already Have an account&nbsp;&nbsp;&nbsp;<Link to='/sign-in' style={{ color: '#f75815' }} >Sign In ?</Link> </p>

          <button className=' btn ' type='submit'
            style={{
              padding: '12px 40px',
              backgroundColor: "#f75815",
              border: 0,
              borderRadius: '10px',
              color: '#fff',
              marginLeft: '50px',
              transition: '0.3s',
              fontSize: '16px',
              fontWeight: '500px'
            }}
          >SIGN UP</button>

        </form>

      </div>

    </div>

  )

}



export default Signup
