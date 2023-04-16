import React from 'react'
import { useNewsContext } from '../context/NewsContext';
import { format, parseISO } from "date-fns";
import { Link } from 'react-router-dom';

const Articles = () => {
    const { articles, loading } = useNewsContext();

    return (
        <div className='dark:bg-gray-900'>
            <section className="flex flex-col md:flex-row items-center justify-center dark:bg-gray-100">
                <div className="w-full md:w-1/2">
                    <img src={articles[0]?.image} alt={articles[0]?.source.name} className="w-full h-auto" />
                </div>
                <Link to={`/articles/${articles[0]?.source.name}`} className="w-full md:w-1/2 py-2 md:p-4 h-full">
                    <h2 className="mt-3 text-base text-gray-700 font-black dark:text-gray-800 md:text-3xl">
                        {articles[0]?.title}
                    </h2>
                    <p className="mt-3 text-base text-gray-300 font-medium dark:text-gray-800 md:text-xl">
                        {articles[0]?.description}
                    </p>
                    {articles[0]?.publishedAt && <>
                        <p className="mt-3 text-sm text-blue-500">
                            Published :  {format(parseISO(articles[0].publishedAt), "MMMM dd, yyyy")}
                        </p>
                    </>
                    }
                </Link>
            </section>

            <section className='container px-6 py-10 mx-auto '>
                {articles && (
                        <><div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
                        {articles.slice(0, 2).map(post => (
                            <div>
                                <img className="relative  object-cover w-full rounded-md h-96"
                                    src={post?.image} alt={post?.source.name} />
                                <div className="relative z-20 w-10/12 sm:h-fit md:h-52 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                    <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                        {post?.source.name}
                                    </Link>

                                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                        {post?.title}
                                    </p>
                                    {post?.publishedAt && <>
                                        <p className="mt-3 text-sm text-blue-500">
                                            Published :  {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                                        </p>
                                    </>}
                                    <Link to={`/articles/${post?.source.name}`} className="block mt-2 self-end">
                                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View more &rarr;</button>
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div><div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
                            {articles.slice(2, 14).map(post => (
                                <div>
                                    <img className="relative z-10 object-cover w-full rounded-md h-96"
                                        src={post?.image} alt={post?.source.name} />
                                    <div className="relative z-20 w-10/12 sm:h-fit md:h-52 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                        <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                            {post?.source.name}
                                        </Link>

                                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                            {post?.title}
                                        </p>
                                        {post?.publishedAt && <>
                                            <p className="mt-3 text-sm text-blue-500">
                                                Published :  {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                                            </p>
                                        </>}
                                        <Link to={`/articles/${post?.source.name}`} className="block mt-2 self-end">
                                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View more &rarr;</button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div></>

                )}
            </section>


        </div>
    )
}

export default Articles