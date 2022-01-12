import React, { Component } from "react";
import { connect } from "react-redux";

class UserReduxEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
      },
      users: [{ fname: "Ram" }, { fname: "Ravi" }, { fname: "Sam" }],
      index: null,
    };
    console.log(this.props)
  }

  handleAddUser = () => {
    let AllUsers = [...this.state.users];
    AllUsers.push(this.state.user);
    this.setState({ users: AllUsers });
    this.handleClear();
  };
  handleChange = (e) => {
    let newUser = { ...this.state.user };
    newUser[e.target.name] = e.target.value;
    this.setState({ user: newUser });
  };
  handleClear = () => {
    this.setState({
      user: {
        fname: "",
      },
    });
  };

  handleEditUser = (user, i) => {
    this.setState({ user, index: i });
  };

  handleUpdate = () => {
    let AllUsers = [...this.state.users];
    AllUsers[this.state.index] = this.state.user;
    this.setState({ users: AllUsers, index: null });
    this.handleClear();
  };

  handleDelete = (user) => {
    let AllUsers = [...this.state.users];
    this.setState({ users: AllUsers.filter((au) => au.fname !== user.fname) });
    this.handleClear();
  };
  render() {
    return (
      <div>
        <h2>Hello From Users Component</h2>

        <form>
          <label htmlFor="fname">First Name : </label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          {this.state.index ? (
            <button type="button" onClick={this.handleUpdate}>
              Upate User
            </button>
          ) : (
            <button type="button" onClick={this.handleAddUser}>
              Add User
            </button>
          )}
        </form>
        <hr />
        {this.props.users.map((user, i) => (
          <p key={i}>
            <span
              onClick={() => {
                this.handleEditUser(user, i);
              }}
            >
              {user.fname}
            </span>{" "}
            -{" "}
            <span
              onClick={() => {
                this.handleDelete(user);
              }}
            >
              {" "}
              X{" "}
            </span>
          </p>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
    console.log(state)
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(UserReduxEx)
