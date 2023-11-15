
// import React from 'react';
// import axios from "axios";
// import Book from "./Book";
// import { Link, useNavigate } from "react-router-dom";

// const Bookssection = ({ data }) => {
//   console.log(data);


//   const navigate = useNavigate();
  
//   return (
//     <div className='d-flex justify-content-around align-items-center flex-wrap my-3' style={{border:"4px , solid white", borderRadius:"20px"}}>
//       {data &&
//         data.map((item, index) => (
//           <div className='text-white' style={{ width: "200px", height: "350px", backgroundColor: ""  }} key={index}>
//             <div>
//               <img
//                 style={{ width: "190px", height: "210px"  }}
//                 className='img-fluid'
//                 src={item.image}
//                 alt=''
//               />
//             </div>
//             <div>
//               <h5 className='text-white p-2 my-1' style={{fontsize:"15px"}}  > {item.bookname.slice(0,29)}..</h5>
//               <b style={{fontsize :"30px", color:"grey"}} className='m-0 , px-2'>
//                 Rs.{item.price}.00
//               </b>
//               <div className='d-flex justify-content-around align-items-center my-1'>
//                 <button className='btn btn-primary'> UPDATE </button>
//                 <button onClick={e => handledelete(item.id)} className='btn btn-warning'> delete </button>
//                 {/* <Book/> */}
//               </div>
//             </div>
//           </div>
//         ))
//       }
//     </div>
    
//      const handledelete =(id)=>
//      {
//        const confirm = window.confirm("Would You really like to delete the Book ?");
//        if(!confirm){
//           axios.delete("http://localhost:3000/api/v1/deletebook/" + id)
//           .then(res =>
//            {
//              navigate('/');
//            })
//            .catch(err => console.log(err));
//      }
       
   
      
    
//   );
// };

// export default Bookssection;



// import React from 'react';
// import axios from "axios";

// import { Link, useNavigate } from "react-router-dom";

// const Bookssection = ({ data }) => {
//   console.log(data);

//   const navigate = useNavigate();

//   const handledelete = (id) => {
//     const confirm = window.confirm("Would you really like to delete the book?");
//     if (!confirm) {
//       axios.delete("http://localhost:3000/api/v1/deletebook/" + id)
//         .then(res => {
//           navigate('/');
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <div className='d-flex justify-content-around align-items-center flex-wrap my-3' style={{ border: "4px solid white", borderRadius: "20px" }}>
//       {data &&
//         data.map((item, index) => (
//           <div className='text-white' style={{ width: "200px", height: "350px", backgroundColor: "" }} key={index}>
//             <div>
//               <img
//                 style={{ width: "190px", height: "210px" }}
//                 className='img-fluid'
//                 src={item.image}
//                 alt=''
//               />
//             </div>
//             <div>
//               <h5 className='text-white p-2 my-1' style={{ fontSize: "15px" }}> {item.bookname.slice(0, 29)}..</h5>
//               <b style={{ fontSize: "30px", color: "grey" }} className='m-0, px-2'>
//                 Rs.{item.price}.00
//               </b>
//               <div className='d-flex justify-content-around align-items-center my-1'>
//                 <button className='btn btn-primary'> UPDATE </button>
//                 <button onClick={e => handledelete(item.id)} className='btn btn-warning'> Delete </button>
//                 {/* <Book/> */}
//               </div>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default Bookssection;


// import React from 'react';
// import axios from "axios";
// import Book from "./Book";
// import { Link, useNavigate } from "react-router-dom";

// const Bookssection = ({ data }) => {
//   console.log(data);

//   const navigate = useNavigate();

//   const handledelete = (id) => {
//     const confirm = window.confirm("Would you really like to delete the book?");
//     if (!confirm) {
//       axios.delete("http://localhost:3000/api/v1/deletebook/" + id)
//         .then(res => {
//           navigate('/');
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   return (
//     <div className='d-flex justify-content-around align-items-center flex-wrap my-3' style={{ border: "4px solid white", borderRadius: "20px" }}>
//       {data &&
//         data.map((item, index) => (
//           <div className='text-white' style={{ width: "200px", height: "350px" }} key={index}>
//             <div>
//               <img
//                 style={{ width: "190px", height: "210px" }}
//                 className='img-fluid'
//                 src={item.image}
//                 alt=''
//               />
//             </div>
//             <div>
//               <h5 className='text-white p-2 my-1' style={{ fontSize: "15px" }}> {item.bookname.slice(0, 29)}..</h5>
//               <b style={{ fontSize: "30px", color: "grey" }} className='m-0, px-2'>
//                 Rs.{item.price}.00
//               </b>
//               <div className='d-flex justify-content-around align-items-center my-1'>
//                 <button className='btn btn-primary'>UPDATE</button>
//                 <button onClick={e => handledelete(item.id)} className='btn btn-warning'>Delete</button>
//                 {/* <Book/> */}
//               </div>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default Bookssection;

// import React from 'react';
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const handledelete = (id, navigate) => {
//   const confirm = window.confirm("Would you really like to delete the book?");
//   if (!confirm) {
//     axios.delete("http://localhost:3000/api/v1/deletebook/" + id)
//       .then(res => {
//         navigate('/');
//       })
//       .catch(err => console.log(err));
//   }
// };

// const Bookssection = ({ data }) => {
//   console.log(data);

//   const navigate = useNavigate();

//   return (
//     <div className='d-flex justify-content-around align-items-center flex-wrap my-3' style={{ border: "4px solid white", borderRadius: "20px" }}>
//       {data &&
//         data.map((item, index) => (
//           <div className='text-white' style={{ width: "200px", height: "350px" }} key={index}>
//             <div>
//               <img
//                 style={{ width: "190px", height: "210px" }}
//                 className='img-fluid'
//                 src={item.image}
//                 alt=''
//               />
//             </div>
//             <div>
//               <h5 className='text-white p-2 my-1' style={{ fontSize: "15px" }}> {item.bookname.slice(0, 29)}..</h5>
//               <b style={{ fontSize: "30px", color: "grey" }} className='m-0, px-2'>
//                 Rs.{item.price}.00
//               </b>
//               <div className='d-flex justify-content-around align-items-center my-1'>
//                 <button className='btn btn-primary'>UPDATE</button>
//                 <button onClick={() => handledelete(item.id, navigate)} className='btn btn-warning'>Delete</button>
//               </div>
//             </div>
//           </div>
//         ))
//       }
//     </div>
//   );
// };

// export default Bookssection;

// import React from 'react';
// import axios from "axios";
// import Book from "./Book";
// import { Link, useNavigate } from "react-router-dom";

// const Bookssection = ({ data }) => {
//   console.log(data);

//   const navigate = useNavigate();

  
//   const handledelete = (id) => {
//     const confirm = window.confirm("Would you really like to delete the book?");
//     if (!confirm) {
//       axios.delete("http://localhost:3000/api/v1/deletebook/" + id)
//         .then(res => {
//           navigate('/');
//         })
//         .catch(error => {
//           if (error.response) {
//             // The request was made and the server responded with a status code
//             console.error("Response data:", error.response.data);
//             console.error("Response status:", error.response.status);
//             console.error("Response headers:", error.response.headers);
//           } else if (error.request) {
//             // The request was made but no response was received
//             console.error("No response received from the server. Request details:", error.request);
//           } else {
//             // Something happened in setting up the request that triggered an error
//             console.error("Error setting up the request:", error.message);
//           }
//           console.error("Error config:", error.config);
//           console.log(error);
//         });
//     }
//   };
  
//   return (
//     <div className='d-flex justify-content-around align-items-center flex-wrap my-3' style={{ border: "4px solid white", borderRadius: "20px" }}>
//       {data &&
//         data.map((item, index) => (
//           <div className='text-white' style={{ width: "200px", height: "350px" }} key={index}>
//             <div>
//               <img
//                 style={{ width: "190px", height: "210px" }}
//                 className='img-fluid'
//                 src={item.image}
//                 alt=''
//               />
//             </div>
//             <div>
//               <h5 className='text-white p-2 my-1' style={{ fontSize: "15px" }}> {item.bookname.slice(0, 29)}..</h5>
//               <b style={{ fontSize: "30px", color: "grey" }} className='m-0, px-2'>
//                 Rs.{item.price}.00
//               </b>
              
//               <Link to={`/BookUpdate/${item.id}`} className='btn btn-primary'>UPDATE</Link>
//                 <button onClick={() => handledelete(item.id)} className='btn btn-warning'>Delete</button>
//                 {/* <Book/> */}
//               </div>
//             </div>
//         ))
//       }
//     </div>
//   );
// };

// export default Bookssection;

import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Bookssection = ({ data }) => {
  const navigate = useNavigate();

  const handledelete = (id) => {
    const confirm = window.confirm('Would you really like to delete the book?');
    if (!confirm) {
      axios
        .delete(`http://localhost:3000/api/v1/deletebook/${id}`)
        .then((res) => {
          navigate('/');
        })
        .catch((error) => {
          console.error('Error deleting book:', error);
        });
    }
  };

  return (
    <div className="d-flex flex-wrap my-3">
      {data &&
        data.map((item, index) => (
          <div className="text-center" style={{ width: '200px' }} key={index}>
            <img
              style={{ width: '190px', height: '210px' }}
              className="img-fluid"
              src={item.image}
              alt=""
            />
            <div>
              <h5 className="p-2 my-1" style={{ fontSize: '15px' }}>
                {item.bookname.slice(0, 29)}..
              </h5>
              <b style={{ fontSize: '30px', color: 'grey' }}>
                Rs.{item.price}.00
              </b>
              <div className="my-1">
              <Link to={`/BookUpdate/${item.id}`} className='btn btn-primary'>UPDATE</Link>

                <button onClick={() => handledelete(item.id)} className="btn btn-warning">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Bookssection;
