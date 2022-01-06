import React from 'react'

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;  //wrapper
const UserConsumer = UserContext.Consumer;   // consumer 

export { UserProvider, UserConsumer}