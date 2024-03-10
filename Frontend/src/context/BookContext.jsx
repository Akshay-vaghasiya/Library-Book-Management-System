import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import reducer from "../reducer/Bookreducer";
import axios from "axios";

const BookContext = createContext();

const initialState = {
  Books: [],
  IssuedBooks : [],
  Members : [],
  SearchIssueBooks : [],
  SearchBooks : [],
  SearchMembers : [],
  isLoading: true,
  totalbooks: 0,
  issuedbooks: 0,
  totalmembers : 0,
  returnbooks : 0
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

  const getUsers = async () => {
    try {

      const res = await axios.get(import.meta.env.VITE_url + `/user/showusers`);

      const users = res?.data;
      
      dispatch({ type: "SET_USER_DATA", payload: users });
    } catch (error) {
      console.log(error);
    }
  };

  const getIssuedBooks = async () => {
    try{
      const res = await axios.get(import.meta.env.VITE_url + `/issue/showissuebooks`);

      const issuedbook = res?.data;

      dispatch({ type : "SET_ISSUED_DATA", payload : {issuedbook}});
    } catch (error) {
      console.log(error);
    }
  }

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

  const searchIssuedbook = (searchtext,searchdate,searchreturndate) => {
    dispatch({type : "SEARCH_ISSUED_BOOK", payload : {searchtext,searchdate,searchreturndate}});
  }

  const searchbook = (book) => {
    dispatch({type : "SEARCH_BOOK", payload : book});
  }

  const searchmember = (member) => {
    dispatch({type : "SEARCH_MEMBER", payload : member});
  }

  const paypenalty = (hid) => {
    dispatch({type : "PENALTY_PAYMENT", payload : hid});
  }

  const returnbook = (hid) => {
    dispatch({type : "RETURN_BOOK_USERUPDATE", payload : hid});
  }

  useEffect(() => {
    getBooks();
    getIssuedBooks();
    getUsers();
  }, []);

  return (
    <>
      <BookContext.Provider value={{ ...state, deletebook, deleteOnebook, getBooks, getIssuedBooks, searchIssuedbook, searchbook, searchmember, paypenalty, returnbook}}>
        {children}
      </BookContext.Provider>
    </>
  );
};

const useBookContext = () => {
  return useContext(BookContext);
};

export { BookProvider, useBookContext };
