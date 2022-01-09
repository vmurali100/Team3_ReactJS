import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPhotos, deleteImagesAction, getAllPhotos } from './Action'
class Photos extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             photos:{
                 name:"",
                 url:""
             }
        }
    }
    getImage=()=>{
        return this.props.getImagesAction()
    }
    deleteImages=()=>{
        return this.props.deleteImagesAction()
    }
    changeValue=(e)=>{
        let newPhotos={...this.state.photos}
        newPhotos[e.target.name]=e.target.value
        this.setState({photos:newPhotos})
    }
    createForm=()=>{
        this.props.createFormAction(this.state.photos)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <button onClick={this.getImage}>Click to view Image</button>
                <button onClick={this.deleteImages}>Delete Data</button> */}
                <form >
                    <label htmlFor="name">Names</label> <br />
                    <input type="text" name="name" value={this.state.name} onChange={(e)=>{this.changeValue(e)}}/> <br />
                    <label htmlFor="url">URL</label> <br />
                    <input type="text" name="url" value={this.state.url} onChange={(e)=>{this.changeValue(e)}}/> <br />
                    <button type='button' onClick={this.createForm}>Submit</button>
                </form>
                { this.props.photos && this.props.photos.map((images)=>{
                    // return <ul>
                    //     <li>Album Id : {images.albumId}</li>
                    //     <li>Id : {images.id}</li>
                    //     <li>Title : {images.title}</li>
                    //     <li>  <img src={images.url} style={{height:"100px", width:"100px"}} alt="" /></li>
                    //     <li>  <img src={images.thumbnailUrl} style={{height:"100px", width:"100px"}} alt="" /></li>
                    // </ul>
                    console.log(images)
                    return <p>{images.url}</p>
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
function mapDispatchToProps(dispatch) {
    return {
        getImagesAction:()=>dispatch(getAllPhotos()),
        deleteImagesAction:(photos)=>dispatch(deleteImagesAction(photos)),
        createFormAction:(photos)=>dispatch(createPhotos(photos))
    }
}

export default connect(mapStateTopProps,mapDispatchToProps)(Photos)
