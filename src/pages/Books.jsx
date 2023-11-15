import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";  
import Bookssection from '../components/Bookssection';
const Books = () =>
{
  const [Data, setData] = useState();  //array to store books data
  useEffect(()=>
  {
    const fetch = async () =>
    {
       await axios 
       .get("http://localhost:3000/api/v1/getbooks")
       .then((res)=> setData(res.data.books));
    };
    fetch();
  });


  return (
    <div className='bg-dark' style={{
      minHeight: "91.5vh",
    }}>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h4 className='text-white'>Books Section</h4>
      </div>
      {Data ? 
        <Bookssection data = {Data} />
       : (
        <div className='text-white'>Loading...</div>
      )}
    </div>
  );
};
export default Books
