import { useState } from 'react';
import './CreateProduct.modules.css';

const CreateProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [availability, setAvailability] = useState('');
	return (
		<div className="newProductForm">
			<h2>Hello adminstrator, add a new product.</h2>
			<form>
				<label> Name: </label>
				<input
					type="text"
					required
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<label> Price: </label>
				<input
					type="number"
					required
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<label> Availability: </label>
				<input
					type="number"
					required
					value={availability}
					onChange={(e) => setAvailability(e.target.value)}
				/>
				<div className="buttonsSection">
					<button
						className="createProductBtn"
						onClick={(e) => {
							e.preventDefault();
							console.log('create product simulation');
						}}
					>
						CREATE
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateProduct;
