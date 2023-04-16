import { Link } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext';
import { format, parseISO } from "date-fns";


const Home = () => {

    const { articles, loading } = useNewsContext();

    console.log('articulos home:', articles)
    if (loading == true) {
    } else {
        console.log('no cargo nada')
    }


    return (
        <>

            <section
                className="relative bg-[url(https://images.unsplash.com/photo-1580171401298-4c2c0c44cc43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] bg-cover bg-center bg-no-repeat" >
                <div
                    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8" >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-1xl font-extrabold sm:text-5xl text-white">
                            All the information in
                            <strong className="block font-extrabold text-purple-900 font-text text-4xl sm:text-7xl  ">
                                NotiNew's
                            </strong>
                        </h1>
                        <p className="mt-4 w-10/12	 sm:text-xl sm:leading-relaxed text-white" >
                            The most important news at your fingertips.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white font-text">Latest News</h1>

                        <p className="w-10/12 mx-auto mt-4 text-gray-500 py-3 uppercase tracking-wider">
                            stay informed
                        </p>
                    </div>

                    <div className="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none lg:bg-white md:bg-transparent lg:h-full ">
                        <div
                            className=" px-10 py-10 max-w-md m-auto lg:col-span-2 mt-20 mb-20 shadow-xl rounded-xl lg:mt-10 md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full lg:mb-10 lg:px-5 lg:pt-5 lg:pb-5 lg:max-w-lg bg-white">
                            <a href="http://" target="_blank" rel="noopener noreferrer" className='hover:text-purple-700 '>
                                {articles[0]?.source.name}
                            </a>
                            <h1 className="font-bold text-2xl text-gray-600">{articles[0]?.title}</h1>
                            <h2 className="text-base text-gray-600 text-justify pt-2">{articles[0]?.description}.</h2>
                            <Link to={`/articles/${articles[0]?.source.name}`} className="block mt-2 self-end">
                                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View more &rarr;</button>
                            </Link>
                        </div>

                        <div className="hidden relative lg:block  lg:col-span-3">
                            <img className="absolute inset-0 w-full h-full object-cover object-center"
                                src={articles[0]?.image}
                                alt={articles[0]?.source.name} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">

                        {/* NEW2 */}
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96"
                                src={articles[5]?.image} alt={articles[5]?.source.name} />
                            <div className="relative z-20 w-10/12 sm:h-fit md:h-52 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    {articles[5]?.source.name}
                                </Link>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                    {articles[5]?.title}
                                </p>
                                {articles[5]?.publishedAt && <>
                                    <p className="mt-3 text-sm text-blue-500">
                                        Published :  {format(parseISO(articles[5].publishedAt), "MMMM dd, yyyy")}
                                    </p>
                                </>
                                }
                                <Link to={`/articles/${articles[5]?.source.name}`} className="block mt-2 self-end">
                                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View more &rarr;</button>
                                </Link>
                            </div>
                        </div>


                        {/* NEW3 */}
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96"
                                src={articles[7]?.image} alt={articles[7]?.source.name} />
                            <div className="relative z-20 w-10/12 sm:h-fit md:h-52 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    {articles[7]?.source.name}
                                </Link>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                    {articles[7]?.title}
                                </p>
                                {articles[7]?.publishedAt && <>
                                    <p className="mt-3 text-sm text-blue-500">
                                        Published :  {format(parseISO(articles[7].publishedAt), "MMMM dd, yyyy")}
                                    </p>
                                </>
                                }
                                <Link to={`/articles/${articles[7]?.source.name}`} className="block mt-2 self-end">
                                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View more &rarr;</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home