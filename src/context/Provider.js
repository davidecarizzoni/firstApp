import React, {createContext, useReducer} from 'react';
import auth from './reducers/auth';
import contacts from './reducers/contacts';
import authInitialState from './initialStates/authInitialState';
import contactInitialState from './initialStates/contactInitialState';
export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState); //possible error here
  const [contactsState, contactsDispatch] = useReducer(
    contacts,
    contactInitialState,
  ); //possible error here
  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
