import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Register = ({ handleLogin, user }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [formData, setFormData] = useState({
		first_name: '',
		Last_name: '',
		email: '',
		password: '',
		password_confirmation: '',
		avatar: '',
	});

	const newUser = {
		first_name: formData.first_name,
		last_name: formData.last_name,
		email: formData.email,
		password: formData.password,
		password_confirmation: formData.password_confirmation,
	};

	const resetForm = () => {
		setFormData({
			first_name: '',
			last_name: '',
			email: '',
			username: '',
			password: '',
			password_confirmation: '',
		});
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {};
	const googleLoginSuccess = (res) => {
		const result = res?.profileObj;
		const token = res?.tokenId;
		try {
			dispatch({ type: 'AUTH', data: { result, token } });
			history.push('/');
		} catch (error) {
			console.log(error);
		}
	};

	const googleLoginFailure = () => {
		console.log('Signin unsuccessful');
	};
	return (
		<>
			<h1>Register</h1>
			<form className="registration" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
						name="first_name"
						placeholder="First Name"
						value={formData.first_name}
						onChange={handleChange}
					/>
					<input
						type="text"
						name="last_name"
						placeholder="Last Name"
						value={formData.last_name}
						onChange={handleChange}
					/>
				</p>
				<p>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={formData.email}
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
					<input
						type="password"
						name="password_confirmation"
						placeholder="Confirm Password"
						value={formData.password_confirmation}
						onChange={handleChange}
					/>
				</p>
				<p>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
					>
						Submit
					</button>
				</p>
				<p>
					<GoogleLogin
						clientId="786428800759-60p6ne9kbnq8b1clq71k932f39fijofq.apps.googleusercontent.com"
						render={(renderProps) => (
							<button
								onClick={renderProps.onClick}
								disabled={renderProps.disabled}
							>
								Sign In With Google!
							</button>
						)}
						onSuccess={googleLoginSuccess}
						onFailure={googleLoginFailure}
						cookiePolicy="single_host_origin"
					/>
				</p>
			</form>
		</>
	);
};

export default Register;
