
import { useParams } from 'react-router-dom';
import { useNewsContext } from '../context/NewsContext';
import { format, parseISO } from "date-fns";

const ArticleDetail = () => {

  const { articleID } = useParams<{ articleID: string }>();
  const { articles } = useNewsContext();
  const article = articles.find((article) => article.source.name === articleID);

  if (!article) {
    return <h1>Article not found</h1>;
  }


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
          {article.source.name}
        </div>
        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {article.title}
        </h1>
        <img
          className="h-full w-full py-5"
          src={article.image}
          alt={article.source.name}
        />
        <div className="mt-6 prose prose-lg text-gray-500">
          <p>{article.description}</p>
          <p>{article.content}</p>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff`} 
              alt={`author's avatar`}
            />
            <div className="ml-4">
              <div className="text-base font-medium text-gray-900">
                {article.source.name}
              </div>
              <div className="text-base font-medium text-gray-500">
                {article?.publishedAt && <>
                  Published :  {format(parseISO(article.publishedAt), "MMMM dd, yyyy")}
                </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ArticleDetail