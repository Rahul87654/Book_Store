// BookUpdate.js

import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const BookUpdate = () => {
  const { id } = useParams(); // Get the book ID from the URL
  const history = useHistory();

  const [book, setBook] = useState({
    bookname: '',
    price: 0,
    image: '',
  });

  useEffect(() => {
    // Fetch book data for the given ID when the component mounts
    axios.get(`http://localhost:3000/api/v1/getbook/${id}`)
      .then((response) => {
        const bookData = response.data;
        setBook(bookData);
      })
      .catch((error) => {
        console.error('Error fetching book data:', error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/api/v1/updatebook/${id}`, book)
      .then(() => {
        history.push('/'); // Redirect to the main page after updating the book
      })
      .catch((error) => {
        console.error('Error updating book:', error);
      });
  };

  return (
    <div>
      <h1>Update Book</h1>
      <form>
        <div>
          <label htmlFor="bookname">Book Name:</label>
          <input
            type="text"
            id="bookname"
            name="bookname"
            value={book.bookname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={book.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={book.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleUpdate}>Update Book</button>
      </form>
    </div>
  );
};

export default BookUpdate;

