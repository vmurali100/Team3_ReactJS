import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getAllPhotos, getDeleteActions } from './action'

 class Photos extends Component {
    getUsers=()=>{
        this.props.getPhotosData()
        console.log(this.props)
    }
    deletePhotos=()=>{
        this.props.getDeleteData()
        console.log(this.props)
    }
    render() {

        return (
            <div>
                {this.props.photos && this.props.photos.map((photo)=>{
                    return <ul>
                        <li>{photo.albumId}</li>
                        <li>{photo.title}</li>
                        <li>{<img src={photo.url}  width="50px" height="50px" alt=""/>}</li>
                      
                    </ul>
                })}
                <button onClick={this.getUsers}>get Photos</button>
                <button onClick={this.deletePhotos}>delete</button>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        photos:state
    }
}
function mapDispatchtoProps(dispatch){
    return{
        getPhotosData:()=>dispatch(getAllPhotos()),
        getDeleteData:()=>dispatch(getDeleteActions())
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(Photos)
