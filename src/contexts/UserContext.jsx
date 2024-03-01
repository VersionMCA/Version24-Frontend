import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ls from 'localstorage-slim';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const updateUserInfo = (userInfo) => {
    ls.set('userInfo', userInfo, {
      ttl: 60 * 60 * 24 * 10,
    });
    setUser(userInfo);
  };

  const logout = () => {
    ls.remove('userInfo');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const userInfo = ls.get('userInfo');
    if (userInfo) {
      setUser(userInfo);
    } else {
      navigate();
    }
  }, [navigate]);
  // adding navigate as a dependency to satisfy the eslint rule, otherwise its not required, as usually remains same

  return (
    <UserContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ user, updateUserInfo, logout }}
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
