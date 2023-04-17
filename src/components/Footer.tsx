import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-900 ">
            <div className="w-full  bg-[url(https://images.unsplash.com/photo-1580171401298-4c2c0c44cc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat">
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-100">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0">

                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap  hover:text-purple-700 dark:text-white">NotiNew's</span> */}
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="#" className="mr-4 hover:text-purple-700  md:mr-6 ">Home</Link>
                        </li>
                        <li>
                            <Link to="#" className="mr-4 hover:text-purple-700  md:mr-6">Articles</Link>
                        </li>
                        <li>
                            <Link to="#" className="mr-4 hover:text-purple-700  md:mr-6">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:text-purple-700 ">NotiNew's</Link>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer