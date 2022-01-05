import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCars } from '../Actions2/action2'
class Cars extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    getData = () => {
        return this.props.dispatch(getAllCars())
    }
    render(props) {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getData}>click</button>
                {this.props.cars && this.props.cars.map((car) => {
                    return <ul>
                        <li>{car}</li>
                    </ul>
                })}
                {/* {this.props.bikes} */}
            </div>
        )
    }
    // componentDidMount() {
    //     console.log(this.props)
    //     return this.props.dispatch(getAllCars())
    // }
}

function mapStateToProps(state) {
    return {
        cars: state,
        // bikes:state.bikes
    }
}
export default connect(mapStateToProps)(Cars)