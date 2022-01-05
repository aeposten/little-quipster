import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Login = ({ handleLogin, user }) => {
	const dispatch = useDispatch();
	const history= useHistory();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	const userInfo = {
		username: formData.username,
		password: formData.password,
	};

	// const resetForm = () => {
	// 	setFormData({ username: '', password: '' });
	// };

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
			history.push('/')
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
