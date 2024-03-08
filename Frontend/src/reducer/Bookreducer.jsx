const Bookreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      let Books = action.payload;
      let issuedbooks = 0;
      let totalbooks = 0;

      Books?.map((ele) => {
        totalbooks += ele?.stock;
        issuedbooks += ele?.stock - ele?.available;
      });

      return {
        ...state,
        isLoading: false,
        Books,
        issuedbooks,
        totalbooks,
      };

    case "DELETE_BOOK_DATA":
      let books = state?.Books.filter((book) => {
        return book.id !== action.payload;
      });

      return {
        ...state,
        Books: books,
      };

    case "DELETE_ONE_BOOK":
      let books1 = state?.Books.map((book) => {

        if(book?.id === action.payload.id)
        {
          book.available = book.available - 1;
          book.stock = book.stock - 1;
        }

        let book1 = book?.books.filter((ele) => {
          return ele.bid !== action.payload.bid;
        });

        book.books = book1;

        return book;
      });

      return {
        ...state,
        Books: books1,
      };

    case "SET_ISSUED_DATA":

      return {
        ...state,
        IssuedBooks : action.payload,
      }

  }
};

export default Bookreducer;