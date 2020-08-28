import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

interface Article {
  id: string;
  title: string;
  content: string;
  lawyer_name: string;
  phone_number: string;
}

interface ArticleContextData {
  articles: Article[];
  handleNavigateToDetail(id: string): Promise<void>;
}

const AuthContext = createContext<ArticleContextData>({} as ArticleContextData);

// eslint-disable-next-line react/prop-types
export const ArticleProvider: React.FC = ({ children }) => {
  const [data, setData] = useState([] as Array<Article>);
  const history = useHistory();

  useEffect(() => {
    async function load(): Promise<void> {
      const response = await api.get('/articles/list');

      setData(response.data);
    }

    load();
  }, []);

  const handleNavigateToDetail = useCallback(
    async (id: string) => {
      await api.get(`/articles/list/${id}`);

      history.push(`/article/${id}`);
    },
    [history],
  );

  return (
    <AuthContext.Provider
      value={{
        articles: data,
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
