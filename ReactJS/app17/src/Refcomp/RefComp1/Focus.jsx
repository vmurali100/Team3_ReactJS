import React, { Component } from 'react'

export default class Focus extends Component {
    constructor(props) {
        super(props)
    
        this.inputref=React.createRef() 
        // this.inputNum=null
        // this.focusinput=(ele)=>{
        //     this.inputNum=ele
        // }
    }
    
    render() {
        return (
            <div>
                <label htmlFor="">Enter your Name :  </label>
                <input type="text" ref={this.inputref} />
                {/* <input type="text" ref={this.focusinput} /> */}
                {/* <label htmlFor="">Enter your Age :  </label> */}
               

            </div>
        )
    }
    componentDidMount(){
        console.log(this.inputref)
        this.inputref.current.focus()
        // this.inputNum.focus()
    }
}
