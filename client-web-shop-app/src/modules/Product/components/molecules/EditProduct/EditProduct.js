import { useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { UserContext } from '../../../../Auth/context/UserContext';
import { editProduct } from '../../../service/editProduct';
import { ProductsContext } from '../../../context/ProductsContext';

const EditProduct = () => {
	const { state } = useLocation();
	const { user } = useContext(UserContext);
	const { products, setProducts } = useContext(ProductsContext);

	const [name, setName] = useState(state.name);
	const [price, setPrice] = useState(state.price);
	const [available, setAvailable] = useState(state.available);
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
							var changedProduct = await editProduct(
								state.id,
								name,
								price,
								available,
								user.jwt
							);
							let tempProducts = [];
							products.forEach((product) => {
								if (product.id !== state.id) {
									tempProducts.push(product);
								} else {
									tempProducts.push(changedProduct);
								}
							});
							setProducts(tempProducts);
						}}
					>
						CONFIRM
					</button>
				</div>
			</form>
			<ToastContainer />
		</div>
	);
};

export default EditProduct;
