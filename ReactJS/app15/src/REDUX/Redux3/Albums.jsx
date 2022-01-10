import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createAlbum, deleteAlbumActions, getAllAlbums } from './action'

class Albums extends Component {
    constructor(props) {
        super(props)

        this.state = {
            albums: {
                username: "",
                email: "",
                age: ""
            }
        }
    }

    getAlbums = () => {
        this.props.getAlbumData()
    }
    deleteAlbum = (album) => {
        this.props.deleteAlbumData(album)
        console.log(this.props)
    }
    handleChange = (e) => {
        let newAlbum = { ...this.state.albums }
        newAlbum[e.target.name] = e.target.value
        this.setState({ albums: newAlbum })
    }
    CreatePosts = () => {
        this.props.createAlbumAction(this.state.albums)
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="username">user name</label>
                    <input type="text" name="username" value={this.state.username} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="email">email</label>
                    <input type="text" name="email" value={this.state.email} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="age">age</label>
                    <input type="text" name="age" value={this.state.age} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />

                    <button type="button" onClick={this.CreatePosts}>click</button>
                </form>

                {/* <button onClick={this.getAlbums}>get albums</button>
                <button onClick={this.deleteAlbum}>delete Album</button> */}

                {/* <p>lokesh</p> */}
                {this.props.albums && this.props.albums.map((album) => {
                    {/* <li>{album.title}</li> */ }
                    return <ul>

                        <li>{album.username}</li>
                        <li>{album.email}</li>
                        <li>{album.age}</li>
                        <button onClick={() => this.deleteAlbum(album)}>delete</button>
                    </ul>
                })}

            </div>
        )
    }
}

function mapToStateProps(state) {
    return {
        albums: state
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getAlbumData: () => dispatch(getAllAlbums()),
        deleteAlbumData: (albums) => dispatch(deleteAlbumActions(albums)),
        createAlbumAction: (albums) => dispatch(createAlbum(albums))
    }
}
export default connect(mapToStateProps, mapDispatchToProps)(Albums)
