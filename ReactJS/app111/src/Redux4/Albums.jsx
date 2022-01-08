import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllAlbums } from './action4/action4'

class Albums extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: {
                userId: "",
                userdata: "",
                title: ""
            }
        }
    }
    handleChange = (e) => {
        let newAlbum = { ...this.state.albums }
        newAlbum[e.target.name] = e.target.value;
        this.setState({ albums: newAlbum })
    }
    handleCreate = () => {
        console.log(this.state.albums)
        this.props.createAlbum(this.state.albums)
    }
    render() {
        return (
            <div>
                <h2>Hello from Albums</h2>
                <form >
                    <label htmlFor="userId">UserId:</label>
                    <input type="text" name="userId" id="userrId" value={this.state.userId} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="userdata">Id:</label>
                    <input type="text" name="userdata"  value={this.state.userdata} onChange={(e) => { this.handleChange(e) }} /><br />
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" id="title" value={this.state.title} onChange={(e) => { this.handleChange(e) }} /><br />
                    <button type="button" onClick={this.handleCreate}>Add albums</button>
                </form>
               {/* {this.props.albums.albums.map((alb)=>{
                   return <h4>{alb.title}</h4>
               })} */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        albums:state
    }
}
function dispatchProps(dispatch) {
    return{
        createAlbum:(album)=>dispatch(getAllAlbums(album))
    }
    
}
export default connect(mapStateToProps,dispatchProps)(Albums)