import StoryForm from '../components/StoryForm';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';

const NavBar = ({ toggleVisibleForm }) => {
	const [parent, setParent] = useState(
		JSON.parse(localStorage.getItem('profile'))
	);
	const dispatch = useDispatch();
  const location = useLocation();
	const history = useHistory();
	//Set user when location changes
  useEffect(() => {
		const token = parent?.token;
		///JWT manual signup

		setParent(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	const handleLogout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/');
		setParent(null);
	};
	return (
		<>
			<nav>
				<ul className="nav">
					<Link className="title" to="/">
						<li className="title">Little Quipster</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<li onClick={toggleVisibleForm}>Add a Story </li>

					{parent ? (
						<li>
							<Link to="/profile">Hello {parent?.result.name} </Link>
							<button onClick={handleLogout}>Logout</button>
						</li>
					) : (
						<>
							<Link to="/login">
								<li>Login</li>
							</Link>
							<Link to="/Register">
								<li>Register</li>
							</Link>
						</>
					)}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
