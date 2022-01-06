import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPhotos } from './Action'
class Photos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    getImage=()=>{
        return this.props.dispatch(getAllPhotos())
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.getImage}>Click to view Image</button>
                {this.props.photos.map((images)=>{
                    return <ul>
                        <li>Album Id : {images.albumId}</li>
                        <li>Id : {images.id}</li>
                        <li>Title : {images.title}</li>
                        <li>  <img src={images.url} style={{height:"100px", width:"100px"}} alt="" /></li>
                        <li>  <img src={images.thumbnailUrl} style={{height:"100px", width:"100px"}} alt="" /></li>
                    </ul>
                })}
            </div>
        )
    }
    // componentDidMount(){
    //     console.log(this.props)
    //     return this.props.dispatch(getAllPhotos())
    // }
}
function  mapStateTopProps(state) {
    console.log(state)
    return {
        photos:state
    }
}

export default connect(mapStateTopProps)(Photos)
