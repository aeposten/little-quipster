import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";

const Login = ({ handleLogin, user }) => {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const userInfo = {
		username: formData.username,
		password: formData.password,
	};

	const resetForm = () => {
		setFormData({ username: '', password: '' });
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
	};

	return (
		<>
			<h2>Login!</h2>
			<form className="login" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
						name="username"
						placeholder="Username"
						value={formData.username}
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
					/>
				</p>
				<p>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						Log In
					</button>
				</p>
				<p>
					<Link to="/register">
						<button>Sign Up</button>
					</Link>
				</p>
			</form>
		</>
	);
};

export default Login;
