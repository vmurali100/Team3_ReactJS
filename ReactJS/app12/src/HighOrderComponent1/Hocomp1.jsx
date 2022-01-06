import React, { Component } from 'react'

export const Hocomp1 = (OriginalComponent) => {

    class newCompo extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        HandleCount=()=>{
            this.setState({count:this.state.count+1})
        }
        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} HandleCount={this.HandleCount} />
                </div>
            )
        }
    }

    return newCompo

}
