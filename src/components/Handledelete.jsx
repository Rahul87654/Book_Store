import React from 'react';
import axios from "axios";

const BookDelete = ({ bookId, onDeleteSuccess }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/api/v1/deletebook/${bookId}`)
      .then(response => {
        // Check the status code in the response
        if (response.status === 204) {
          // Book successfully deleted, trigger a callback function if needed
          if (onDeleteSuccess) {
            onDeleteSuccess(bookId); // Pass the deleted bookId to onDeleteSuccess
          }
        } else {
          // Handle other status codes (e.g., 404 for "Not Found")
          console.error("Failed to delete book.");
        }
      })
      .catch(error => {
        console.error("Error deleting book:", error);
      });
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default BookDelete;
