import React from 'react'

export const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello</h1>
    //     </div>
    // )
    return React.createElement('div',
    {id:'hello',className:'dummyvalue'},
    React.createElement('h1',null,'hello'))
}
