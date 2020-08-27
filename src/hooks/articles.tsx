import React, { createContext, useContext, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface Article {
  id: string;
  title: string;
  content: string;
  lawyer_name: string;
}

interface ArticleState {
  article: Article;
}

interface ArticleContextData {
  articles: ArticleState[];
  getArticlesFromAPI(): Promise<void>;
  handleNavigateToDetail(id: string): Promise<void>;
}

const AuthContext = createContext<ArticleContextData>({} as ArticleContextData);

// eslint-disable-next-line react/prop-types
export const ArticleProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<ArticleState[]>([]);
  const history = useHistory();

  async function getArticlesFromAPI(): Promise<void> {
    const response = await api.get('/articles/list');

    setData(response.data);
  }

  const handleNavigateToDetail = useCallback(async (id: string) => {
    await api.get(`/articles/list/${id}`);

    history.push(`/article/${id}`);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        articles: data,
        getArticlesFromAPI,
        handleNavigateToDetail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useArticle(): ArticleContextData {
  const context = useContext(AuthContext);

  return context;
}
