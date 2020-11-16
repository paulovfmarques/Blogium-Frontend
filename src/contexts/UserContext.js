import React, { useState, useEffect, useContext, createContext } from 'react';

const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const [user, setUserState] = useState(null);

  useEffect(() => {
    const userRepository = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
    if (userRepository) {
      setUserState(userRepository);
    }
  }, []);

  function setUser(newUser) {
    setUserState(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  }

  return (
    <UserContext.Provider value={{ user, setUser }} {...props}>
      {props.children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }

  return context;
}
