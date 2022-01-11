import React, { Component } from 'react'

export default class Comments1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comment: {
                fname: "",
            },
            comments: [],
            index: null
        }
    }
    handleChange = (e) => {
        let newcomment = { ...this.state.comment }
        newcomment[e.target.name] = e.target.value
        this.setState({ comment: newcomment })
    }

    addComments = () => {
        let newcomments = [...this.state.comments]
        newcomments.push(this.state.comment)
        this.setState({ comments: newcomments })
        this.clearForm()
    }
    clearForm = () => {
        this.setState({
            comment: {
                fname: "",
            }
        })
    }
    editComments = (comment, i) => {
        this.setState({ comment, index: i })
    }
    updateComments = () => {
        let allcomment = [...this.state.comments]
        allcomment[this.state.index] = this.state.comment
        this.setState({ comments: allcomment, index: null })
        this.clearForm()
    }
    deletecomment = (comment) => {
        let allcomments = [...this.state.comments]
        this.setState({ comments: allcomments.filter((cmt) => cmt.fname !== comment.fname) })
        this.clearForm()
    }

    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" name="fname" value={this.state.comment.fname} onChange={(e) => {
                        this.handleChange(e)
                    }} />
                    {this.state.index ? (<button onClick={this.updateComments} type="button">update comments</button>
                    ) : (<button onClick={this.addComments} type="button">add comments</button>
                    )}
                    <hr />
                </form>
                {this.state.comments.map((comment, i) => {
                    return <p key={i}><span onClick={() => this.editComments(comment, i)}>{comment.fname}</span>
                        <button onClick={() => this.deletecomment(comment)}>delete</button>
                    </p>
                })}
            </div>
        )
    }
}
