import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllAlbums } from './Action'


class Albums extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getAlbums=()=>{
         return this.props.dispatch(getAllAlbums())

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getAlbums}>Click to view Album Data</button>
                {this.props.albums && this.props.albums.map((album)=>{
                    return <ul>
                        <li>User ID : {album.userId}</li>
                        <li>ID : {album.id}</li>
                        <li>Title: {album.title}</li>
                     
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllAlbums())
    // }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        albums:state
    }
}

export default connect(mapStateToProps)(Albums)