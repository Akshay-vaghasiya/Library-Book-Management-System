import React, { useEffect, useState } from "react";
import { useBookContext } from "../../context/BookContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { initFlowbite } from "flowbite";
import { toast } from "react-toastify";
import Confirmpopup from "../../components/Confirmpopup";
import Editbookpopup from "../../components/Editbookpopup";

const ShowBooks = () => {
  const { Books, deletebook, deleteOnebook } = useBookContext();
  const [dropdown, setDropdown] = useState(-1);

  useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className=" mt-[5.5rem] ">
          <div className="overflow-x-scroll">
            <table>
              <thead>
                <tr className="text-lg">
                  <th className="w-40 px-2">ID</th>
                  <th className="w-40 px-2">Image</th>
                  <th className="w-40 px-2">Title</th>
                  <th className="w-40 px-2">Author</th>
                  <th className="w-40 px-2">Isbn</th>
                  <th className="w-40 px-2">Category</th>
                  <th className="w-40 px-2">Stock</th>
                  <th className="w-40 px-2">Available</th>
                  <th className="w-16 px-2"></th>
                  <th className="w-16 px-2"></th>
                  <th className="w-16 px-2"></th>
                </tr>
                <tr className="border border-slate-500" />
              </thead>

              <tbody className="items-center">
                {Books.length > 0 &&
                  Books?.map((book, index) => {
                    return (
                      <>
                        <tr
                          key={index + 30}
                          className={`text-center ${
                            index % 2 === 0 ? "bg-slate-50" : "bg-white"
                          }`}
                        >
                          <td className="w-40 px-2">{book?.id}</td>
                          <td className="w-40 px-2 justify-center">
                            <img src={book?.image} alt="book image" />
                          </td>
                          <td className="w-40 px-2">{book?.title}</td>
                          <td className="w-40 px-2">{book?.author}</td>
                          <td className="w-40 px-2">{book?.isbn}</td>
                          <td className="w-40 px-2 ">{book?.category}</td>
                          <td className="w-40 px-2">{book?.stock}</td>
                          <td className="w-40 px-2">{book?.available}</td>
                          <td className="w-16 px-1 text-xl">
                            
                            <button
                              data-modal-target={`static-modal${book?.isbn}`+"1"}
                              data-modal-toggle={`static-modal${book?.isbn}`+"1"}
                              type="button"
                            >
                              <MdEdit className="cursor-pointer text-2xl" />                             
                            </button>

                            <Editbookpopup key={Math.random()} book={book} />
                          </td>
                          <td className="w-16 px-1 text-xl">
                            <button
                              data-modal-target={`static-modal${book?.isbn}`}
                              data-modal-toggle={`static-modal${book?.isbn}`}
                              type="button"
                            >
                              <MdDelete className="cursor-pointer text-2xl" />
                            </button>

                            <Confirmpopup
                              key={Math.random()}
                              curele={{ bid: book?.isbn }}
                              message={`Are you sure you want to delete 
                                                ${book?.title} book ? All available and not available record also will be deleted.`}
                              deletemethod={() => deletebook(book?.id)}
                            />
                          </td>
                          <td className="w-16 px-1">
                            {dropdown === index ? (
                              <FaChevronDown
                                className="text-xl cursor-pointer"
                                onClick={(e) => {
                                  if (dropdown === index) {
                                    setDropdown(() => -1);
                                  } else {
                                    setDropdown(() => index);
                                  }
                                }}
                              />
                            ) : (
                              <FaChevronRight
                                className="text-xl cursor-pointer"
                                onClick={(e) => {
                                  if (dropdown === index) {
                                    setDropdown(() => -1);
                                  } else {
                                    setDropdown(() => index);
                                  }
                                }}
                              />
                            )}
                          </td>
                        </tr>

                        {dropdown === index && (
                          <>
                            <br />
                            <tr>
                              <th></th>
                              <th></th>
                              <th className="w-40 px-2 text-lg">BookID</th>
                              <th></th>
                              <th className="w-40 px-2 text-lg">Status</th>
                              <th></th>
                              <th className="w-40 px-2"></th>
                            </tr>

                            {book?.books.map((curele, ind) => {
                              return (
                                <tr key={Math.random()} className="text-center">
                                  <td></td>
                                  <td></td>
                                  <td className="w-40 px-2 text-lg">
                                    {curele?.bid}
                                  </td>
                                  <td></td>
                                  <td
                                    className={`w-40 text-lg px-2 ${
                                      curele?.status === "available"
                                        ? "text-green-600"
                                        : "text-red-600"
                                    }`}
                                  >
                                    {curele?.status}
                                  </td>
                                  <td></td>
                                  <td className="w-40 px-2 text-xl">
                                    <button
                                      data-modal-target={`static-modal${curele?.bid}`}
                                      data-modal-toggle={`static-modal${curele?.bid}`}
                                      type="button"
                                      onClick={() => {
                                        if (curele?.status !== "available") {
                                          toast.error("Book is not available.");
                                        }
                                      }}
                                    >
                                      <MdDelete className="cursor-pointer text-2xl" />
                                    </button>

                                    {curele?.status === "available" && (
                                      <Confirmpopup
                                        key={Math.random()}
                                        curele={curele}
                                        message={`Are you sure you want to delete 
                                                ${book?.title} book which's book
                                                id is ${curele?.bid}?`}
                                        deletemethod={() =>
                                          deleteOnebook(curele?.bid, book?.id)
                                        }
                                      />
                                    )}
                                  </td>
                                </tr>
                              );
                            })}

                            <br />
                          </>
                        )}
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

export default ShowBooks;
