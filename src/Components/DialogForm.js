import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";


const DialogForm = ({ setBookingOpen, detailData }) => {

    const [formValue, setFormValue] = useState({
        name: '',
        number: '',
        email: '',
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormValue({ ...formValue, [name]: value })
    }

    const SubmitForm =(e)=>{
        e.preventDefault()
        let submitData = {
            ...formValue,
            movieName:detailData?.name,
            movieLanguage:detailData?.language,
            movieTime:detailData?.schedule?.time,
            movieDay:detailData?.schedule?.day
        }
        localStorage.setItem("bookingDetails",JSON.stringify(submitData))
        alert('Your Booking has been CONFIRMED')
        setBookingOpen(false)
    }
    return (
        <>
            <div className='dialog-from'>
                <IoMdCloseCircle onClick={() => setBookingOpen(false)} className='close-btn' />
                <h1 style={{ textDecoration: 'underline' }}>Movie Booking Form</h1>
                <form onSubmit={SubmitForm}> 
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', alignItems: 'center' }}>
                        <div style={{width:'43%',textAlign:'start'}} >
                            <p className='formData'><span className='formData'>Name :-</span> {detailData?.name || '-'}</p>
                            <p className='margin-t formData'><span className='formData '>Language :- </span> {detailData?.language || '-'}</p>
                            <p className='margin-t fromData'><span className='fromData '>Schedule :- </span>
                                {detailData?.schedule?.time || '-'}
                                {detailData?.schedule?.time.slice(0, 2) >= 12 ? 'PM' : 'AM'},
                                {detailData?.schedule?.days || '-'} </p>
                        </div>

                        <input
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            value={formValue.name}
                            onChange={handleChange}
                            className='from-input'
                        />
                        <input
                            type='number'
                            name='number'
                            placeholder='Mobile Number'
                            value={formValue.number}
                            onChange={handleChange}
                            className='from-input'
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Enter your EmailId'
                            value={formValue.email}
                            onChange={handleChange}
                            className='from-input'
                        />

                    </div>

                    <button type='submit' className='submit-ticket'>
                        Submit

                    </button>

                </form>

            </div>
        </>
    )
}

export default DialogForm