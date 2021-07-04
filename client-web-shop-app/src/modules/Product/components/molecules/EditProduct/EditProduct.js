import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const EditProduct = () => {
	const { state } = useLocation();

	const [name, setName] = useState(state.name);
	const [price, setPrice] = useState(state.price);
	const [availability, setAvailability] = useState(state.availability);
	return (
		<div className="newProductForm">
			{console.log(state)}

			<h2>Hello adminstrator, edit current product.</h2>
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
						CONFIRM
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditProduct;
