import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import '../App.css'
import { baseUrl } from '../config'

const DataList = () => {
  const [data,setData] = useState([])
  const [list,setList] = useState([])
  const [searchValue,setSearchValue] = useState('')

  const getLists = async ()=>{
    try {
        const response = await fetch(`${baseUrl}`);
        const result = await response.json();
        setList(result)
        setData(result)
    } catch (error) {
        console.log("error", error);
    } 
}

  useEffect(()=>{
    getLists()
  },[])

  useEffect(()=>{
    if(searchValue){
      let filterData = data.filter((item,i)=> item?.show?.name.toLowerCase().includes(searchValue.toLowerCase()) );
      setList(filterData)
    }else{
      setList(data)
    }
  },[searchValue])

  return (
    <>
    <div className='movies top-p'>
    <div className='find-movies'>
      <h1 style={{color:'white',fontSize:'42px' }}>Movies Lists :-</h1>
      <input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} className='search-field' placeholder='Search movies...'/>
    </div>

    {list?.map((item,i)=>(
          <Cards key={i} item={item?.show}/>
    ))}
    </div>
    </>
  )
}

export default DataList