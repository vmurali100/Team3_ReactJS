import React, { Component } from 'react'

export const HoCompo4 = (OrginalComponent) => {

    class HoCompo4 extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }
        HandleCount = () => {
            this.setState({ count: this.state.count + 1 })
        }


        // IsEven = () => {
        //     return count % 2 ==0
        // }
        
        //  isEven(n) {
        //     return n % 2 == 0;
        //  }
         
        //   isOdd(n) {
        //     return Math.abs(n % 2) == 1;
        //  }
        render() {
            return (
                <div>
                    <OrginalComponent count={this.state.count} HandleCount={this.HandleCount}
                    IsEven={this.IsEven} />
                </div>
            )
        }
    }


    return (
        HoCompo4
    )
}
