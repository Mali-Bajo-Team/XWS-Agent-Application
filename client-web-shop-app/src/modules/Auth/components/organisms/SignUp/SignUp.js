import { useState } from 'react';
import './SignUp.modules.css';

const SignUp = () => {
	const [username, setUsername] = useState('');
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className="customForm">
			<h2>Welcome, sign up to continue !</h2>
			<form>
				<label>Username:</label>
				<input
					type="text"
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>

				<label>Name:</label>
				<input
					type="text"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<label>Surname:</label>
				<input
					type="text"
					required
					value={surname}
					onChange={(e) => setSurname(e.target.value)}
				/>

				<label>Email:</label>
				<input
					type="text"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Password:</label>
				<input
					type="text"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					style={{
						backgroundColor: '#22ad9a',
						color: '#fff',
						border: '0',
						padding: '1em',
						borderRadius: '1em',
						cursor: 'pointer',
					}}
				>
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default SignUp;
