import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { login, register } from '../actions/login';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [parent, setParent] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// const parentInfo = {
	// 	email: formData.email,
	// 	password: formData.password,
	// };

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(formData, history));
	};
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
			<h2>Login!</h2>
			<form className="login" onSubmit={(e) => handleSubmit(e)}>
				<p>
					<input
						type="text"
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
			</form>
		</>
	);
};

export default Login;
