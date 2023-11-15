import React from "react";
import { useState } from "react";
import axios from "axios";


const Addbooks = () => {
  const [Data ,setData] = useState(
    {
      bookname:"",
      author:"",
      description:"",
      price:"",
      image:""
    }
  );
  const change = (e) =>
  {
      const {name ,value} =e.target;
      setData({...Data, [name]:value});
};
const submit = async (e)=>
{
  e.preventDefault();
  await axios.post("http://localhost:3000/api/v1/add" ,Data)
  .then((res)=> console.log(res))
  setData(
    {bookname:"",
    author:"",
    description:"",
    price:"",
    image:""

    }
  )
};
  return (
    <div className="bg-dark   " style={{ height: "91.5vh" }}>
      <div className="container p-4 justify-content-center align-items-centre ">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name "
            name="bookname"
            onChange={change}
            value={Data.bookname}
          />
       
      </div>
     
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Enter Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Author Name"
            name="author"
            onChange={change}
            value={Data.author}
          />
        
      </div>
      
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description of the Book"
            name="description"
            onChange={change}
            value={Data.description}
          />
        
      </div>
      
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Enter Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Url of the Image"
           name="image"
           onChange={change}
           value={Data.image}
          />
       
      </div>
     
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Price of the Book"
            name="price"
            onChange={change}
            value={Data.price}
          />
        </div>

        <button type="button" class="btn btn-success" onClick={submit}>Success</button>
      </div>
    </div>
  );
};

export default Addbooks;
