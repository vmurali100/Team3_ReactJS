import React, { Component } from "react"

export class Number1 extends Component{
    render(){
        // let style1={
        //     color:"orange"
        // }
        return <h4  id="one" style={{background:"cyan",border:"1px solid red"}}>I'm from first class </h4>
    }
}
export class Number2 extends Component{
    render(){
        // let style2={
        //         width:"300px"
        //     }
        return <h4  id="two" style={{color:"white",border:"2px dashed black"}}>I'm from second class</h4>
    }
}
export class Number3 extends Component{
    render(){
        // let style3={
        //             height:"300px"
        //         }
        return <h4  id="three" style={{textAlign:"center",width:"450px"}}>I'm from third class</h4>
    }
}
export class Number4 extends Component{
    render(){
        // let style4={
        //             border:"1px solid black"
        //         }
        return <h4 id="four" style={{width:"400px",height:"50px"}}>I'm from fourth class</h4>
    }
}
export class Number5 extends Component{
    render(){
        // let style5={
        //             color:"blue"
        //         }
        return <h4  id="five" style={{background:"green",width:"450px"}}> I'm from fivth class</h4>
    }
}