import React from 'react'

const Container =React.createContext();

const ContainerProvider=Container.Provider;
const ContainerConsumer=Container.Consumer;
export {
    ContainerProvider,ContainerConsumer
}