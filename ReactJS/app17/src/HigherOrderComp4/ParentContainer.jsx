import React,{ PureComponent} from 'react'

export const ParentContainer = (OriginalComponent) => {
    class NewContainer extends PureComponent {
        constructor(props) {
            super(props)
        
            this.state = {
                 names:["Abhi","Moni","Abirami"],
                 company:{
                    name:"ABC",
                    email:"abc@gmail.com"
                 }
            }
        }
        
        render() {
            return (
                <div>
                    <OriginalComponent name={this.state.names} company={this.state.company}/>
                </div>
            )
        }
    }
    
    return (
        NewContainer
    )
}
