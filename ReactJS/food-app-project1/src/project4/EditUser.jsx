import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const EditUser = () => {
	let navigate = useNavigate()

	const [user, setuser] = useState({
		title: "",
		Author: "",
		Publisher: "",
		stock: ""
	})
	const handleChange = (e) => {
		let newuser = { ...user }
		newuser[e.target.name] = e.target.value
		setuser(newuser)
	}
	const handleSubmit = () => {
		axios.post("http://localhost:3000/project4", user).then((res) => {
			navigate("/")
		})
	}

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<form>
						<div className="mb-3">
							<label forHTML="exampleInputPassword1" className="form-label">id</label>
							<input type="text" className="form-control" name="id" value={user.id} onChange={(e) => {
								handleChange(e)
							}} />
						</div>

						<div className="mb-3">
							<label forHTML="exampleInputPassword1" className="form-label">Title</label>
							<input type="text" className="form-control" name="title" value={user.title} onChange={(e) => {
								handleChange(e)
							}} />
						</div>

						<div className="mb-3">
							<label forHTML="exampleInputPassword1" className="form-label">Author</label>
							<input type="text" className="form-control" name="Author" value={user.Author} onChange={(e) => {
								handleChange(e)
							}} />
						</div>
						<div className="mb-3">
							<label forHTML="exampleInputPassword1" className="form-label">Publisher</label>
							<input type="text" className="form-control" name="Publisher" value={user.Publisher} onChange={(e) => {
								handleChange(e)
							}} />
						</div>
						<div className="mb-3">
							<label forHTML="exampleInputPassword1" className="form-label">Stock</label>
							<input type="text" className="form-control" name="stock" value={user.stock} onChange={(e) => {
								handleChange(e)
							}} />
						</div>

						<button type="button" className="btn btn-primary" onClick={handleSubmit}>Edit</button>
					</form>
				</div>
			</div>
		</div>
	)
}
