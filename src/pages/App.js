import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getStories } from '../actions/stories';
import Header from '../components/Header';
import StoryForm from '../components/StoryForm';
import StoryList from './StoryList';
import About from './About';
import Login from '../components/Login';
import Register from '../components/Register';

function App() {
	const [currentId, setCurrentId] = useState(0);
	const [formVisible, setFormVisible] = useState(false);
	const allStories = useSelector((state) => state.allStories);
	const [formData, setFormData] = useState({
		title: '',
		parent: '',
		description: '',
		selectedFile: '',
		laughs: ''
	});

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStories());
	}, [currentId, dispatch]);

	const toggleVisibleForm = () => {
		setFormVisible(!formVisible);
	};
	return (
		<div className="App">
			<header className="App-header">
				<Header
					toggleVisibleForm={toggleVisibleForm}
					currentId={currentId}
					setCurrentId={setCurrentId}
					formData={formData}
					setFormData={setFormData}
				/>
			</header>

			<main>
				<Route path="/" exact>
					<StoryList
						toggleVisibleForm={toggleVisibleForm}
						currentId={currentId}
						setCurrentId={setCurrentId}
						formData={formData}
						setFormData={setFormData}
					/>
				</Route>
				<p>
					<Route path="/about" exact component={About} />
				</p>
				<p>
					<Route path="/login" exact component={Login} />
				</p>
				<p>
					<Route path="/register" exact component={Register} />
				</p>
				{formVisible && (
					<>
						<div className="overlay" onClick={toggleVisibleForm}>
							{' '}
						</div>
						<StoryForm
							className="story-info-modal"
							toggleVisibleForm={toggleVisibleForm}
							currentId={currentId}
							setCurrentId={setCurrentId}
							formData={formData}
							setFormData={setFormData}
							dispatch={dispatch}
						/>
					</>
				)}
			</main>
		</div>
	);
}

export default App;