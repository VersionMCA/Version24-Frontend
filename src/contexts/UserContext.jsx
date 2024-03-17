import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const updateUserInfo = (userInfo) => {
    setUser(userInfo);
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const validateUser = async () => {
      try {
        setLoading(true);
        // Check if cookie is still valid
        const res = await axios.get(`${BASE_URL}/isauthenticated`, {
          withCredentials: true,
        });

        if (res.data?.status === 'success') {
          setUser(res.data.data);
        }
      } catch (error) {
        console.error('User not logged in', error);
      } finally {
        setLoading(false);
      }
    };

    validateUser();
  }, [navigate]);
  // adding navigate as a dependency to satisfy the eslint rule, otherwise its not required, as usually remains same

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user, updateUserInfo, logout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export { useUser, UserProvider };
