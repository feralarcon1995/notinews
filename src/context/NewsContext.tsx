import { createContext, useContext, useState, useEffect, } from 'react';
import { Article } from '../types/interfaces';

interface INewsContext {
    articles: Article[],
    loading: boolean,
}

const NewsContext = createContext<INewsContext | undefined>(undefined);

export const useNewsContext = () => {
    const context = useContext(NewsContext)!;
    return context;
};

interface INewsContextProviderProps {
    children: React.ReactNode;
}

const NewsContextProvider: React.FC<INewsContextProviderProps> = ({ children }) => {


    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);

    const handleArticles = () => {
        const apikey = 'becca9ef3e6803f625003e9932d490ce';
        const url = `https://gnews.io/api/v4/search?q=example&apikey=${apikey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(true);
                setArticles(data.articles);
                console.log(data);
                setLoading(false);
            }
            )
            .catch(error => console.error(error));
    }

    useEffect(() => {
        handleArticles();
    }, []);

    const contextValue: INewsContext = {
        articles: articles,
        loading: loading,
    };

    return <NewsContext.Provider
        value={contextValue}>
        {children}
    </NewsContext.Provider>;
};

export default NewsContextProvider;