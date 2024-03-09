const Bookreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      let Books = action.payload;
      let totalbooks = 0;

      Books?.map((ele) => {
        totalbooks += ele?.stock;
      });

      return {
        ...state,
        isLoading: false,
        Books,
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

      const issuedbooks = action.payload.issuedbook.length;
      const totalmembers = action.payload.member.length;
      let returnbooks = 0;
      action.payload.issuedbook?.map((book) => {
          if(book.history.return_date !== null)
          {
            returnbooks++;
          }
      })

      return {
        ...state,
        IssuedBooks : action.payload.issuedbook,
        Members : action.payload.member,
        issuedbooks,
        returnbooks,
        totalmembers
      }

    case "SEARCH_ISSUED_BOOK":

      let SearchIssueBooks = [...state.IssuedBooks];

      if(action.payload.searchtext !== "")
      {
        SearchIssueBooks = SearchIssueBooks.filter((book1) => {
          return book1.user.name.toLowerCase().includes(action.payload.searchtext.toLowerCase()) || book1.history.bookname.toLowerCase().includes(action.payload.searchtext.toLowerCase()) || book1.book.bid.toString().toLowerCase().includes(action.payload.searchtext.toLowerCase());
        });

      }

      if(action.payload.searchdate !== "")
      {
        SearchIssueBooks = SearchIssueBooks?.filter((book1) => {
          return book1?.history?.issue_date?.substring(0,10) === (action.payload.searchdate);
        })
      }

      if(action.payload.searchreturndate !== "")
      {
        SearchIssueBooks = SearchIssueBooks?.filter((book1) => {
          return book1.history?.return_date?.substring(0,10) === (action.payload.searchreturndate);
        })
      }
      
      return {
        ...state,
        SearchIssueBooks,
      }

    case "SEARCH_BOOK" :
      let SearchBooks = state.Books.filter((book) => {
          return book.title.toLowerCase().includes(action.payload.toLowerCase()) || 
          book.author.toLowerCase().includes(action.payload.toLowerCase()) || 
          book.id.toString().toLowerCase().includes(action.payload.toLowerCase()) ||
          book.category.toLowerCase().includes(action.payload.toLowerCase());
      })

      return {
        ...state,
        SearchBooks,
      }
  }
};

export default Bookreducer;