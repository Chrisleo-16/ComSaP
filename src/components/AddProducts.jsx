import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [ description, setDesciption] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [organizer, setOrganize] = useState('');
    const [cost, setCost] = useState('')
    const [photo, setPhoto] = useState([])

    // hooks for state values
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState("");

    const submit = async (e) => {
        e.preventDefault()
        setLoading("Kindly wait while we submit the event")
        try {
            const formData = new FormData()
            formData.append('event_title', title)
            formData.append('event_description', description)
            formData.append('event_location', location)
            formData.append('event_date_time', date)
            formData.append('event_organizer', organizer)
            formData.append('event_photo',photo)
            formData.append('event_cost',cost)

            const response = await axios.post("https://community.pythonanywhere.com/api/event", formData)
            setSuccess(response.data.Success)
            setError("")
        } catch (error) {
            setLoading("")
            setError(error.message)
        }
        setTitle("")
        setDesciption("")
        setDate("")
        setLocation("")
        setCost("")
        setOrganize("")
        setPhoto("")
    }



  return (
<main className='main'>

    <div className="page-title">
  <div className="breadcrumbs">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house"></i> Home</Link></li>
        <li className="breadcrumb-item active current">Add Service</li>
      </ol>
    </nav>
  </div>

  <div className="title-wrapper">
    <h1>Add Services</h1>
  </div>
</div>
    <div className='md-4 row justify-content-center p-5'>
        <div className='col-md-10 card shadow p-5'>
            {loading && <div className='alert alert-info'>{loading}</div>}
            {error && <div className='alert alert-danger '>{error}</div>}
            {success && <div className='alert alert-success'>{success} </div>}
            <form action="" onSubmit={submit}>
                <div className='row'>
                <div className='col-md-6'>
                <div className='form-input'>

                <label htmlFor="" className='mb-2 text-center'>Event Title</label> <br />
                <input type="text" placeholder='Enter the event title' className='form-control'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required/>
                </div>
                </div>
                <div className='col-md-6'>

                <div className='form-input'>

                <label htmlFor="" className='mb-2 text-center'>Event Description</label>
                <input type="text" placeholder='Enter the description of the event' className='form-control'
                value={description}
                onChange={(e) => setDesciption(e.target.value)}
                required
                /> <br />
                </div>
                </div>
                </div>
                <div className='row'>
                <div className='col-md-6'> 
                <label htmlFor="" className='mb-2'>Event Location</label>
                <input type="text" placeholder='Event Location' className='form-control '
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                /> <br />
                </div>
                <div className='col-md-6'>
                <label htmlFor="" className='mb-2'>Event Date and Time</label>
                <input type="text" placeholder='Enter the date specified for the date and time' className='form-control '
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                /> <br />
                </div>
                </div>
                <label htmlFor="">Event Organizer</label>
                <input type="text" placeholder='Enter the organizer for the main event' className='form-control'
                value={organizer}
                onChange={(e) => setOrganize(e.target.value)}
                required
                /> <br />
                <label htmlFor="">Event Cost</label>
                <input type="number" placeholder='Enter the valid cost.. If none just type zero' className='form-control' 
                value={cost}
                onChange={(e)=> setCost(e.target.value)}
                required
                /> <br />
                <label htmlFor="">Event Photo</label>
                <input type="file" placeholder='Choose the best photo for the event' className='form-control' accept='image/'
                onChange={(e) => setPhoto(e.target.files[0])}
                required
                /> 
                <br />
                <button  
                type='submit'
                className="btn btn-secondary"
                style={{
                    padding:'12px 40px',
                    backgroundColor:"#f75815",
                    border:0,
                    borderRadius:'50px',
                    marginLeft:'100px',
                    transition:'0.3s',
                    fontSize:'16px',
                    fontWeight:'500px'
                }}
                >Add Event</button>
            </form>
        </div>
    </div>
</main>
  )
}

export default AddProducts