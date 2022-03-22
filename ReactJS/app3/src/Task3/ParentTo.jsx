import React, { Component } from 'react'
import Child1 from './Child1'

export default class ParentTo extends Component {
	constructor() {
		super()
		this.state = {
			message: "iam from parent component",
			person: {
				fname: "dilip",
				lname: " s m",
				email: "dilip@gmail.com"
			},
			teammates: ["Lokesh", "Hareesh", "chandu", "abi"]
		}
	}
	render() {
		return (
			<div>
				<h1>Parent To child Component</h1>
				<Child1
					message={this.state.message}
					person={this.state.person}
					teammates={this.state.teammates}
				/>
			</div>
		)
	}
}
