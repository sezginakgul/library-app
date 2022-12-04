import axios from "axios";
import { useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBooks = async (word) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${word}&key=${API_KEY}`;
    try {
      const { data } = await axios(URL);
      setBooks(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { getBooks, books, loading };
};

export default useBooks;
