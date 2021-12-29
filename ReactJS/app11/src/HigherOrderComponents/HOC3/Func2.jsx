import React from 'react'
import { Sample3 } from './Sample3'


 const Func2 = (props) => {
    return (
        <div>
               <h2>count value is:{props.count}</h2>  
               <button onClick={props.handlecount}>click count</button>       
        </div>
    )
}
export default React.memo(Sample3(Func2))
