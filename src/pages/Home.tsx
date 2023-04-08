import { Link } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext';
const Home = () => {

    const { articles } = useNewsContext();

    return (
        <>

            <section
                className="relative bg-[url(https://img.freepik.com/free-vector/technology-global-glowing-earth-background-design_1017-32135.jpg?w=1480&t=st=1680919071~exp=1680919671~hmac=4f192cfac1dbf361020cff048e02ba54cfc0210f38d223495a2b44f9c7ba683e)] bg-cover bg-center bg-no-repeat" >
                <div
                    className="absolute inset-0 bg-black/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-black/95 sm:to-black/25"></div>
                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-90 lg:items-center lg:px-8" >
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

                        <p className="w-10/12	 mx-auto mt-4 text-gray-500">
                            Los últimos artículos agregados al blog.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-8 mt-8 lg:grid-cols-3">
                        {/* NEW1 */}
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96"
                                src={articles[0]?.image_url} alt={articles[0]?.title} />
                            <div className="relative z-20 w-10/12 sm:h-fit md:h-52	 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    {articles[0]?.news_site}
                                </Link>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                    {articles[0]?.title}
                                </p>

                                <p className="mt-3 text-sm text-blue-500">
                                    Published : {articles[0]?.published_at}
                                </p>
                                <Link to={`/blog/article/${articles[0]?.id}`} className="block mt-2 self-end">
                                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Post</button>
                                </Link>
                            </div>
                        </div>
                        {/* NEW2 */}
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96"
                                src={articles[1]?.image_url} alt={articles[1]?.title} />
                            <div className="relative z-20 w-10/12 sm:h-fit md:h-52 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    {articles[1]?.news_site}
                                </Link>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                    {articles[1]?.title}
                                </p>

                                <p className="mt-3 text-sm text-blue-500">
                                    Published : {articles[1]?.published_at}
                                </p>
                                <Link to={`/blog/article/${articles[1]?.id}`} className="block mt-2 self-end">
                                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Post</button>
                                </Link>
                            </div>
                        </div>

                        {/* NEW3 */}
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96"
                                src={articles[3]?.image_url} alt={articles[1]?.title} />
                            <div className="relative z-20 w-10/12 sm:h-fit md:h-52 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-950">

                                <Link to="/blog" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                                    {articles[3]?.news_site}
                                </Link>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base">
                                    {articles[3]?.title}
                                </p>

                                <p className="mt-3 text-sm text-blue-500">
                                    Published : {articles[3]?.published_at}
                                </p>
                                <Link to={`/blog/article/${articles[3]?.id}`} className="block mt-2 self-end">
                                    <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Ver Post</button>
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