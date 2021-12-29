import React,{Component} from 'react'

export const ContainerComp = (OriginalComponent) => {

    class Parent extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0,
                greetings: "Welcome to Class Component"
            }
        }
        handleCount=()=>{
            this.setState({count: this.state.count + 1})
        }
        handlegreeting=()=>{
            this.setState({greetings:"Greetings Changed"})
        }
        render() {
            return (
                <div style={{color:"red"}}>
                    <OriginalComponent count={this.state.count}  handleCount={this.handleCount} greetings={this.state.greetings}  handlegreeting={this.handlegreeting}/>
                  </div>
            )
        }
    }

    return (
        Parent
    )
}
