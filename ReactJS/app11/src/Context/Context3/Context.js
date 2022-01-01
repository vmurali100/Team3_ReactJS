import React from 'react'
 
const Context=React.createContext()

const ImageProvider=Context.Provider

const ImageConsumer=Context.Consumer

export{
    ImageProvider,ImageConsumer
}