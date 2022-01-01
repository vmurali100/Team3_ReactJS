import React from 'react'
const Home=React.createContext()

const DataProvider=Home.Provider
const SecondDataProvider=Home.Provider
const SecondDataConsumer=Home.Consumer
 
const DataConsumer=Home.Consumer

export{
    DataConsumer,DataProvider,SecondDataConsumer,SecondDataProvider
}