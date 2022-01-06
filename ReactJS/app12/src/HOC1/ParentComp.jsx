import React, { Component } from 'react'

export const ParentComp = (OriginalComponent) => {

    class newComp extends Component {
        constructor(props) {
            super(props)

            this.state = {
                users: ["lokesh", "Chandu", "Hareesh", "abi"],
                lokesh: {
                    username: "lokeshvasu001",
                    email: "lokeshvasu@gmail.com"
                },
                chandu: {
                    username: "Chandu001",
                    email: "cahndu@gmail.com"
                },
                Hareesh: {
                    username: "hareesh001",
                    email: "hareesh@gmail.com"
                },
                Abhi: {
                    username: "abi001",
                    email: "abi@gmail.com"
                }
            }
        }
        showDetails=()=>{
            this.setState({lokesh:this.state.lokesh})
        }
        
        render() {
            return (
                <div>
                    <OriginalComponent user={this.state.users} 
                    lokesh={this.state.lokesh}  showDetails={this.showDetails}
                    chandu={this.state.chandu}
                    Hareesh={this.state.Hareesh}
                    Abhi={this.state.Abhi}
                    
                    />
                                        <button onClick={this.showDetails}>click</button>

                    
                </div>
            )
        }
    }

    return (
        newComp
    )
}
