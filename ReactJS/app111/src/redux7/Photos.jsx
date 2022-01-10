import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPhotosAction, deletePhotoAction, getDataAction, photoDeleteAction } from './action'

class Photos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             photos:{
                 albumId:"",
                 title:"",
                 url:""
             }
        }
    }
    
    getData=()=>{
        this.props.getDataPhoto()
    }
    handleDelete=()=>{
        this.props.deletePhoto()
    }
    handleChange=(e)=>{
    let newPhoto={...this.state.photos}
    newPhoto[e.target.name]=e.target.value
    this.setState({photos:newPhoto})
}
handleCreate=()=>{
this.props.createPhotos(this.state.photos)
}
photoDelete=(photo)=>{
    this.props.deletePHOTO(photo)
}

    render() {
        return (
            <div>
                <h2>Hello</h2>
                <form >
                    <label htmlFor="albumId">albumId</label>
                    <input type="text" name="albumId" value={this.state.albumId} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <label htmlFor="title">title</label>
                    <input type="text" name="title" value={this.state.title} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <label htmlFor="url">url</label>
                    <input type="text" name="url" value={this.state.url} onChange={(e)=>{this.handleChange(e)}}/><br />
                    <button type='button' onClick={this.handleCreate}>Add Data</button>
                </form>
                {/* <button onClick={this.getData}>getData</button>
                <button onClick={this.handleDelete}>Delete</button> */}
                {this.props.photos.map((photo)=>{
                  return <ul>
                      <li>{photo.albumId}</li>
                      <li>{photo.title}</li>
                      <li>{<img src={photo.url}  height="100px" width="100px" />}</li>
                      <button onClick={()=>{this.photoDelete(photo)}} type='button'>Delete</button>
                  </ul>
                })}
            </div>
        )
    }
}
function stateToProps(state) {
    return{
        photos:state
    }
    
}
function mapStateToProps(dispatch) {
    return{
getDataPhoto:()=>dispatch(getDataAction()),
deletePhoto:()=>dispatch(deletePhotoAction()),
createPhotos:(photo)=>dispatch(createPhotosAction(photo)),
deletePHOTO:(photo)=>dispatch(photoDeleteAction(photo))
    }
    
}
export default connect(stateToProps,mapStateToProps)(Photos)