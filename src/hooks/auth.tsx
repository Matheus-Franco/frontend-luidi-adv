import React, { createContext, useCallback, useState, useContext } from 'react';

import api from '../services/api';

interface Admin {
  id: string;
  name: string;
}

interface AuthState {
  admin: Admin;
}

interface AuthorizationCredentials {
  key_access: string;
}

interface AuthContextData {
  admin: Admin;
  authorization({ key_access }: AuthorizationCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const admin = localStorage.getItem('@Article:admin');

    if (admin) {
      return { admin: JSON.parse(admin) };
    }

    return {} as AuthState;
  });

  const authorization = useCallback(async ({ key_access }) => {
    const response = await api.post('/admin/authenticate-lawyer', {
      key_access,
    });

    const { admin } = response.data;

    localStorage.setItem('@Article:admin', admin);

    setData({ admin });
  }, []);

  return (
    <AuthContext.Provider value={{ admin: data.admin, authorization }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
