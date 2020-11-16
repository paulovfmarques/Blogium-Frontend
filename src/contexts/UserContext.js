import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider({ children }) {
  const userRepository = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

  const [user, setUserState] = useState(userRepository);
  const setUser = (newUser) => {
    setUserState(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
