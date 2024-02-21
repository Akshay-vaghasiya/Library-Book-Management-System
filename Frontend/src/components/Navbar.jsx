import React from 'react'
import { LuLogOut } from "react-icons/lu";
import { useLoginContext } from '../context/LoginContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { isLogin, setIsLogin } = useLoginContext();

    return (
        <>
            <nav className="fixed left-0 top-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-sm">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">

                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>

                            <a href="#" className="flex ms-2 md:me-24">
                                <img src="./logo.png" className="h-16 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-[1.7rem] font-semibold whitespace-nowrap dark:text-white">BookWise</span>
                            </a>
                        </div>


                        <div className="flex items-center ms-3">
                            <div>
                                <button className="bg-slate-700 text-white h-9 w-24 rounded-md hover:bg-slate-900" onClick={(e) => {
                                    e.preventDefault();
                                    setIsLogin(!isLogin);
                                    localStorage.setItem("ADMIN_EMAIL", "");
                                    toast.success("Admin Logout Successfully");
                                }}>
                                    <span className='flex items-center ml-3'>Logout<LuLogOut className='ml-2 bg' /></span>
                                </button>
                            </div>

                        </div>


                    </div>
                </div>

            </nav>

        </>
    )
}

export default Navbar