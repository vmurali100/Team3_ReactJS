import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Home = () => {
	const [users, setusers] = useState([])
	useEffect(() => {
		axios.get("http://localhost:3000/project4").then((res) => {
			console.log(res.data)
			setusers(res.data)
		})
	}, [])
	return (
		<div>
			<p>Home component</p>
			<table class="table table-bordered">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Author</th>
						<th scope="col">Publisher</th>
						<th scope="col">Stock</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, i) => (
						<tr key={i}>
							<td>{user.id}</td>
							<td>{user.title}</td>
							<td>{user.Author}</td>
							<td>{user.Publisher}</td>
							<td>{user.stock}</td>

							<td>
								<button className="btn btn-warning">Edit</button>
							</td>
							<td>
								<button className="btn btn-danger">Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
