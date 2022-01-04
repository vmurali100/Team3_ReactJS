import React, { Component } from 'react'
import { connect } from 'react-redux'
 class Cars extends Component {
    render(props) {
        // console.log(this.props)
        return (
            <div>
                {this.props.cars.map((car)=>{
                    return <ul>
                        <li>{car}</li>
                    </ul>
                })}
                {this.props.bikes}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cars:state.cars,
        bikes:state.bikes
    }
}
export default connect(mapStateToProps)(Cars)