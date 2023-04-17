import { useNewsContext } from '../context/NewsContext';
import { format, parseISO } from "date-fns";
import { Link } from 'react-router-dom';

const Articles = () => {
    const { articles } = useNewsContext();

    return (
        <div className='dark:bg-gray-900'>
            <section className="flex flex-col md:flex-row post-center justify-center dark:bg-gray-100">
                <div className="w-full md:w-1/2">
                    <img src={articles[0]?.image} alt={articles[0]?.source.name} className="w-full h-auto" />
                </div>
                <Link to={`/articles/${articles[0]?.source.name}`} className="w-full md:w-1/2 p-4 md:px-3 h-full">
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
                <div className="mx-auto max-w-2xl lg:mx-0 py-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-200">
                        See the lastest news.
                    </p>
                </div>
                {articles && (
                    <><div className="grid gap-10 md:grid-cols-3 lg:gap-10 ">
                        {articles?.slice(1, 4).map(article => (

                            <article className="flex flex-col dark:bg-gray-100" key={article.source.name}>
                                <Link rel="noopener noreferrer" to={`/articles/${article.source.name}`} aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt={article.source.name} className="object-cover w-full h-52 dark:bg-gray-500" src={article.image} />
                                </Link>
                                <div className="flex flex-col flex-1 p-6">
                                    <Link rel="noopener noreferrer" to={`/articles/${article.source.name}`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-900">{article.source.name}</Link>
                                    <h2 className="flex-1 py-2 text-lg font-bold leading-snug">{article.title}</h2>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{article.description}</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        {article?.publishedAt && <>
                                            <p className="mt-3 text-sm text-blue-500">
                                                Published:  {format(parseISO(article.publishedAt), "MMMM dd, yyyy")}
                                            </p>
                                        </>}
                                        <Link to={`/articles/${article.source.name}`} className="dark:text-violet-900 mt-3 text-sm"> Read more &rarr;</Link>
                                    </div>
                                </div>
                            </article>

                        ))}
                    </div>
                        <div className="mt-10 grid gap-10 md:grid-cols-4 lg:gap-10 xl:grid-cols-4 ">
                            {articles.slice(5, 9).map(article => (
                                <article className="flex flex-col dark:bg-gray-100" key={article.source.name}>
                                    <Link rel="noopener noreferrer" to={`/articles/${article.source.name}`} aria-label="Te nulla oportere reprimique his dolorum">
                                        <img alt={article.source.name} className="object-cover w-full h-52 dark:bg-gray-500" src={article.image} />
                                    </Link>
                                    <div className="flex flex-col flex-1 p-6">
                                        <Link rel="noopener noreferrer" to={`/articles/${article.source.name}`} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-900">{article.source.name}</Link>
                                        <h2 className="flex-1 py-2 text-lg font-semibold leading-snug">{article.title}</h2>
                                        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{article.description}</h3>
                                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                            {article?.publishedAt && <>
                                                <p className="mt-3 text-sm text-blue-500">
                                                    Published:  {format(parseISO(article.publishedAt), "MMMM dd, yyyy")}
                                                </p>
                                            </>}
                                            <Link to={`/articles/${article.source.name}`} className="dark:text-violet-900 mt-3 text-sm"> Read more &rarr;</Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div></>

                )}
            </section>


        </div>
    )
}

export default Articles