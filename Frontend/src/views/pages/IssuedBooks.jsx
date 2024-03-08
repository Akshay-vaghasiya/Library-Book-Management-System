import React, { useEffect } from "react";
import { useBookContext } from "../../context/BookContext";
import axios from "axios";
import { initFlowbite } from "flowbite";

const IssuedBooks = () => {
  const { IssuedBooks, getIssuedBooks } = useBookContext();

  useEffect(() => {
    initFlowbite();
  });

  useEffect(() => {
    getIssuedBooks();
  }, []);

  const handlereturn = async (e, hid) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        import.meta.env.VITE_url + `/issue/returnbook/${hid}`
      );

      console.log(response.data);

      await getIssuedBooks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className=" mt-[5.5rem]">
          <div className="overflow-x-scroll">
            <table>
              <thead>
                <tr className="text-lg">
                  <th className="w-40 px-2">HistoryId</th>
                  <th className="w-40 px-2">Bookname</th>
                  <th className="w-40 px-2">BookmainId</th>
                  <th className="w-40 px-2">BookId</th>
                  <th className="w-40 px-2">Username</th>
                  <th className="w-40 px-2">UserId</th>
                  <th className="w-40 px-2">IssueDate</th>
                  <th className="w-40 px-2">DueDate</th>
                  <th className="w-40 px-2">RetrunDate</th>
                  <th className="w-16 px-2">Penalty</th>
                  <th className="w-16 px-2"></th>
                </tr>
                <tr className="border border-slate-500" />
              </thead>

              <tbody className="items-center">
                {IssuedBooks.length > 0 &&
                  IssuedBooks?.map((obj, index) => {
                    return (
                      <>
                        <tr
                          key={index + 30}
                          className={`text-center ${
                            index % 2 === 0 ? "bg-slate-50" : "bg-white"
                          } h-16`}
                        >
                          <td className="w-40 px-2">{obj?.history?.hid}</td>
                          <td className="w-40 px-2">
                            {obj?.history?.bookname}
                          </td>
                          <td className="w-40 px-2">{obj?.history?.bookid}</td>
                          <td className="w-40 px-2">{obj?.book?.bid}</td>
                          <td className="w-40 px-2">{obj?.user?.name}</td>
                          <td className="w-40 px-2 ">{obj?.user?.uid}</td>
                          <td className="w-40 px-2">
                            {obj?.history?.issue_date.substring(0, 10)}
                          </td>
                          <td className="w-40 px-2">
                            {obj?.history?.due_date.substring(0, 10)}
                          </td>
                          <td className="w-40 px-2">
                            { obj?.history?.return_date && obj?.history?.return_date
.substring(0, 10)}
                          </td>
                          <td className="w-40 px-2">{obj?.history?.penalty}</td>
                          

                          <td>
                            {
                              obj?.history?.return_date !== null ? <></> : <>

                              <button
                              data-modal-target={`static-modal${obj?.history?.hid}`}
                              data-modal-toggle={`static-modal${obj?.history?.hid}`}
                              className='bg-yellow-400 rounded-md h-10 w-20 text-white'
                              type="button"
                            >
                              Return
                            </button>

                            <div
                              id={`static-modal${obj?.history?.hid}`}
                              data-modal-backdrop="static"
                              tabindex="-1"
                              aria-hidden="true"
                              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                            >
                              <div class="relative p-4 w-full max-w-md max-h-full">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                  <div class="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
                                  
                                    <button
                                      type="button"
                                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                      data-modal-hide={`static-modal${obj?.history?.hid}`}
                                    >
                                      <svg
                                        class="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                      >
                                        <path
                                          stroke="currentColor"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                      </svg>
                                      <span class="sr-only">Close modal</span>
                                    </button>
                                  </div>

                                  <div class="p-4 md:p-5 space-y-4">
                                    <p>
                                      You are confirm {obj?.user?.name} return {obj?.history?.bookname} book today.
                                    </p>
                                  </div>

                                  <div class="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button
                                      data-modal-hide={`static-modal${obj?.history?.hid}`}
                                      type="button"
                                      className='bg-yellow-400 rounded-md h-10 w-20 text-white'
                                      onClick={(e) => {
                                handlereturn(e, obj?.history?.hid);
                              }}
                                    >
                                      Return
                                    </button>
                                    <button
                                      data-modal-hide={`static-modal${obj?.history?.hid}`}
                                      type="button"
                                      class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                      Cancle
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                              </>
                            }

                            
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default IssuedBooks;
