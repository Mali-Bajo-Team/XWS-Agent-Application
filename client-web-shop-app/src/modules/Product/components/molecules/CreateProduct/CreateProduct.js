import { useState, useContext } from 'react';
import { createNewProduct } from '../../../service/createNewProduct';
import './CreateProduct.modules.css';
import { ToastContainer } from 'react-toastify';
import { ProductsContext } from '../../../context/ProductsContext';

const CreateProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [available, setAvailable] = useState('');

	const { products, setProducts } = useContext(ProductsContext);
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
				<label> Available: </label>
				<input
					type="number"
					required
					value={available}
					onChange={(e) => setAvailable(e.target.value)}
				/>
				<div className="buttonsSection">
					<button
						className="createProductBtn"
						onClick={async (e) => {
							e.preventDefault();
							var newProduct = await createNewProduct(name, price, available);
							setProducts([...products, newProduct]);
							console.log(newProduct);
							console.log('create product simulation');
						}}
					>
						CREATE
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default CreateProduct;
