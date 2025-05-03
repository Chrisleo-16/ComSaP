import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState('');
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault()
    setLoading("Wait while we redirect You")
    setError("")
    try {
      const formData = new FormData()
      formData.append('email',email)
      formData.append('password',password)
       
      const response = await axios.post("https://community.pythonanywhere.com/api/sign_in", formData)
      
      if (response.data.user) {
        // Store the logged-in user data
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate('/')
      }else{
        setError(response.data.Message)
      }

    } catch (error) {
      setLoading('')
      setError(error.message)
    }
    setEmail("")
    setPassword("")
    setLoading("")
  }
  


  return (
    <div className='row'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className='col-md-8 p-5'>
        {loading && <div className='alert alert-info'>{loading}</div>}
        {error && <div className='alert alert-danger'>{error}</div>}
        <form action="" className='form-container'
        onSubmit={submit}>
          <h1 style={{
            marginLeft:'50px'
          }}>SIGN IN</h1>
          <br />
          <div className="inputs-group m-5">
          <input type="email" className='inputs w-75' required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          /> <label htmlFor="" className='user-label'>Email</label>
          </div>
          <div className='inputs-group m-5'>
          <input type="password"  className='inputs w-75' required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="" className="user-label">Password</label>
          </div>
          <button className=' btn ' type='submit'
          style={{
                    padding:'12px 40px',
                    backgroundColor:"#f75815",
                    border:0,
                    borderRadius:'10px',
                    color:'#fff',
                    marginLeft:'50px',
                    transition:'0.3s',
                    fontSize:'16px',
                    fontWeight:'500px'
          }}
          >SIGN IN</button>
          
          <p style={{
            marginLeft:'50px'
          }} className='mt-4'>Don't have an account&nbsp;&nbsp;&nbsp;<Link to='/sign-up' style={{color:'#f75815'}} >Sign Up ?</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn