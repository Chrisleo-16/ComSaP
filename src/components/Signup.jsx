import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import axios from 'axios'



const Signup = () => {

  const [user, setUser] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [phone, setPhone] = useState('');

  const [role, setRole] = useState('');



  const [isLoading, setIsLoading] = useState('');

  const [error, setError] = useState('');

  const [success, setSuccess] = useState('');



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
            <input type="password" className='inputs w-75'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            /><label htmlFor="" className='user-label'>Password</label>
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
