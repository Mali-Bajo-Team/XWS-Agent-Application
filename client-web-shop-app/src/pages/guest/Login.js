import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="customForm">
			<h2>Welcome, login to continue!</h2>
			<form>
				<label>Username:</label>
				<input
					type="text"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label>Password:</label>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<div className="authButtons">
					<button>Login</button>
					<Link to="/signup">
						<button> Sign Up </button>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Login;
