// import React from 'react'
// import { HoCompo4 } from './HoCompo4'

//  const EvenorOdd = (props) => {
//     return (
//         <div>
//             <h1>hello</h1>
//             <button onClick={props.HandleCount}>even or odd</button>
//             <h1>count:{count}</h1>
//         </div>
//     )
// }
// export default React.memo(HoCompo4(EvenorOdd))

import React, { PureComponent } from 'react'
import { HoCompo4 } from './HoCompo4'

 class EvenorOdd extends PureComponent {
    render() {
        return (
            <div>
                <button onClick={this.props.HandleCount} >even or odd{this.props.count}</button>
                {/* <p >{IsEven() ? 'Even' :'odd'}</p> */}
                <h1>count:{this.props.count}</h1>
                {/* <h1>count:{this.props.IsEven}</h1> */}


            </div>
        )
    }
}
export default HoCompo4(EvenorOdd)

