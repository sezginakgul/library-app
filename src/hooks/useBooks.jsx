import axios from "axios";
import { useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const getBooks = async (word) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}&key=${API_KEY}`;
    try {
      const { data } = await axios(URL);
      setBooks(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return { getBooks, books };
};

export default useBooks;
