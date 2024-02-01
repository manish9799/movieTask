import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import NoImage from '../images/icon-image-not-found-free-vector.jpg'

const Cards = ({ item }) => {
  return (
    <>
      <div className='movie-card'>
        <div style={{ display: 'grid', placeItems: 'center', paddingTop: '15px' }}>
          <div className='movie-parent'>
            <img className='movie-img' src={`${item?.image?.original || NoImage}`} alt={"p"} />
          </div>
          <div className='card-content'>
            <p style={{ fontWeight: '700' }}> Name :- {item?.name || '-'} </p>
            <p style={{ fontSize: '14px', padding: '5px' }}> <span className='title'>Language -</span> {item?.language || '-'}</p>
            <Link className='link-details' to={`summary/${item?.id}`} replace >
              <button className='view-btn c-margin'>View</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards