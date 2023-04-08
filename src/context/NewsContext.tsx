import { createContext, useContext, useState, useEffect, } from 'react';
import { Article } from '../types/interfaces';

interface INewsContext {
    articles: Article[],
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

    const handleArticles = () => {
        const url = 'https://api.spaceflightnewsapi.net/v4/articles/';
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.results))
            .catch(error => console.error(error));
    }

    useEffect(() => {
        handleArticles();
    }, []);

    const contextValue: INewsContext = {
        articles: articles,
    };

    return <NewsContext.Provider
        value={contextValue}>
        {children}
    </NewsContext.Provider>;
};

export default NewsContextProvider;