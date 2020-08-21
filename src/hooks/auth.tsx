import React, { createContext, useContext, useState, useCallback } from 'react';
import api from '../services/api';

interface Lawyer {
  id: string;
  email: string;
  password: string;
}

interface AuthState {
  lawyer: Lawyer;
  token: string;
}

interface AccessCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  lawyer: Lawyer;
  signIn(credentials: AccessCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const lawyer = localStorage.getItem('@Lawyer:admin');
    const token = localStorage.getItem('@Lawyer:token');

    if (lawyer && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { lawyer: JSON.parse(lawyer), token };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/admin/authenticate-lawyer', {
      email,
      password,
    });

    const { lawyer, token } = response.data;

    localStorage.setItem('@Lawyer:admin', JSON.stringify(lawyer));
    localStorage.setItem('@Lawyer:token', token);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ lawyer, token });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Lawyer:admin');
    localStorage.removeItem('@Lawyer:token');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ lawyer: data.lawyer, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
