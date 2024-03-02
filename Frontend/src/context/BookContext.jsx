import {
  createContext,
  useState,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../reducer/Bookreducer";
import axios from "axios";

const BookContext = createContext();

const initialState = {
  Books: [],
  isLoading: true,
  totalbooks: 0,
  issuedbooks: 0,
};

const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getBooks = async () => {
    try {
      dispatch({ type: "SET_LOADING" });

      const res = await axios.get(import.meta.env.VITE_url + `/book/getbooks`);

      const books = res?.data;

      dispatch({ type: "SET_API_DATA", payload: books });
    } catch (error) {
      console.log(error);
    }
  };


  const deletebook = async (id) => {

    try
    {
      const res = await axios.delete(import.meta.env.VITE_url + `/book/deletebook/${id}`);

      if(res?.data === "Delete Successfully")
      {
        dispatch({ type: "DELETE_BOOK_DATA", payload: id });
      }
    }
    catch(error){
      console.log(error);
    }

  };

  const deleteOnebook = async (bid, id) => {
    
    try
    {
      const res = await axios.delete(import.meta.env.VITE_url + `/book/deletebook/${id}/${bid}`);
      
      if(res?.data === "Successfully deleted")
      {   
        dispatch({ type: "DELETE_ONE_BOOK", payload: {bid,id} });
      }
    }
    catch(error){
      console.log(error);
    }

  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <BookContext.Provider value={{ ...state, deletebook, deleteOnebook, getBooks }}>
        {children}
      </BookContext.Provider>
    </>
  );
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };
