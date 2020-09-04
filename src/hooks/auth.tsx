import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
}

interface AccessCredentials {
  key: string;
}

interface AuthContextData {
  token: string;
  signIn(credentials: AccessCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Admin:token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ key }) => {
    const response = await api.post('/admin/authenticate-admin', {
      key,
    });

    const { token } = response.data;

    localStorage.setItem('@Admin:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Admin:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
