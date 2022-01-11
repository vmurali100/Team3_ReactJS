import React, { Component } from 'react'

export default class Albums1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            album: {
                fname: "",
                username: "",
                age: ""
            },
            albums: [],
            index: null
        }
    }
    handleChange = (e) => {
        let newalbum = { ...this.state.album }
        newalbum[e.target.name] = e.target.value
        this.setState({ album: newalbum })
    }
    addAlbums = () => {
        let newAlbums = [...this.state.albums]
        newAlbums.push(this.state.album)
        this.setState({ albums: newAlbums })
        this.clearForm()
    }
    clearForm = () => {
        this.setState({
            album: {
                fname: "",
                username: "",
                age: ""
            }
        })
    }
    editAlbums = (album, i) => {
        this.setState({ album, index: i })
    }
    updateAlbums = () => {
        let newalbum = [...this.state.albums]
        newalbum[this.state.index] = this.state.album
        this.setState({ albums: newalbum, index: null })
        this.clearForm()
    }
    DeleteAlbums = (album) => {
        let newalbums = [...this.state.albums]
        this.setState({ albums: newalbums.filter((al) => al.fname !== album.fname) })
        this.clearForm()
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">first name:</label>
                    <input type="text" name="fname" value={this.state.album.fname} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="username">user name:</label>
                    <input type="text" name="username" value={this.state.album.username} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    <label htmlFor="age">age:</label>
                    <input type="text" name="age" value={this.state.album.age} onChange={(e) => {
                        this.handleChange(e)
                    }} /><br />
                    {this.state.index ? (<button onClick={this.updateAlbums} type="button">update Albums</button>
                    ) : (<button onClick={this.addAlbums} type="button">add albums</button>
                    )}
                </form>
                <hr />
                {this.state.albums.map((album, i) => {
                    return <p key={i}>
                        <span onClick={() => this.editAlbums(album, i)}><i>{album.fname}-{album.username}-{album.age}
                        </i></span><br />
                        <span onClick={() => this.DeleteAlbums(album)}>delete</span>
                    </p>


                })}
            </div>
        )
    }
}
