import React, { useEffect, useState } from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { baseUrl } from '../config';
import NoImage from '../images/icon-image-not-found-free-vector.jpg'
import DialogForm from './DialogForm';


const Details = () => {
  const params = useParams()
  const [detailData, setDetailData] = useState([]);
  const [bookingOpen,setBookingOpen] = useState(false)

  const getLists = async ()=>{
    try {
        const response = await fetch(`${baseUrl}`);
        const result = await response.json();
        let newData = result.filter((item) => item?.show?.id === +params?.id)
        setDetailData(newData[0].show)
    } catch (error) {
        console.log("error", error);
    } 
}

  useEffect(()=>{
    getLists()
  },[params.id])


  const getGenres=(genre)=>{
    let name = genre?.map((item,i)=>(
      <p className='genre' key={i}>{item}</p>
    ))
    return name
  }

  const BookTicket =()=>{
    setBookingOpen(true)
  }


  return (
    <>
    <div className='detail-page'>
      <Link
       to='/'>
        <FaArrowCircleLeft className='back-btn'/>
      </Link>
      <div className='detail-card'>
        <p className='movie-id'>#{detailData.id || 0}</p>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <img className='movieDetail-img' src={`${detailData?.image?.original || NoImage}`} alt={"p"} />
        <div className='detail-content'>
          <p className='name'><span className='title name'>Name :-</span> {detailData?.name || '-'}</p>
          <p className='margin-t'><span className='title '>Language :-</span> {detailData?.language || '-'}</p>
          <p className='margin-t'><span className='title '>Rating :-</span> {detailData?.rating?.average || '-'}</p>
          <p style={{display:'block',fontSize:'20px',marginTop:'10px',marginBottom:'5px'}}>Summary :- </p>
          <p style={{display:'block',fontSize:'16px',textAlign:'justify',marginBottom:'15px'}} dangerouslySetInnerHTML={{__html: detailData?.summary || '-'}}></p>
          <p className='title' style={{marginBottom:'15px'}}>Genres :- {getGenres(detailData?.genres)}</p>
          <p className='margin-t'><span className='title '>Premiered :-</span> {detailData?.premiered}</p>
          <p className='margin-t'><span className='title '>Schedule :-</span> 
          {detailData?.schedule?.time || '-' } 
          {detailData?.schedule?.time.slice(0,2) >=12 ? 'PM':'AM' }, 
          {detailData?.schedule?.days || '-' } </p>

          <button className='book-ticket' onClick={()=>BookTicket(detailData)}>
            Book Ticket
          </button>
        </div>
        </div>
      </div>
    </div>
    {bookingOpen && <DialogForm setBookingOpen={setBookingOpen} detailData={detailData} />}
    </>
  )
}

export default Details