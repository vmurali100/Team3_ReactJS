import React from 'react'

 const ParantContext = React.createContext();

const UserProvider = ParantContext.Provider;
const UserConsumer = ParantContext.Consumer;

export {
  UserProvider,UserConsumer
}