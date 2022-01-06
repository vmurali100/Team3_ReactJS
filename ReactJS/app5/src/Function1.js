import React, {Component} from 'react'
export function Function1(){
    return(
        <div style={{color:'white',background:'orange'}}>
            <h1>iam from component function1 component</h1>
        </div>
    )
}

export const Function2 = () =>{
    let Myfun={
        color:'blue',
        background:'green'
    }
    return(
        <div style={Myfun}>
            <h1>iam from component function2 component</h1>
        </div>
    )
}


export class Function3 extends Component{
    render(){
        return(
            <div id="Fun3">
                <h1>iam from function3 component</h1>
            </div>
        )
    }

}

export function Function4(){
    return(
        <div id="Myfun4">
            <h1>iam from function4 component</h1>
        </div>
    )
}


export const Function5 =()=>{
    return(
        <div style={{color:'orange',background:'yellow', width:'250px'}}>
            <h1>iam from function5 component</h1>
        </div>
    )
}


export class Function6 extends Component{
    render(){
        let Myfun5={
            width:"300px",
            height:'400px',
            border:'2px solid orange',
            background:'green'

        }
        return(
            <div style={Myfun5}>
                <h1>iam from class component</h1>
            </div>
        )
    }
}