import { useContext, useState } from 'react';
import { ShoopingCartContext } from '../../../context/ShoppingCartContext';
import Product from '../../../../Product/components/atoms/Product';
import './ShoppingCart.modules.css';
import { ToastContainer } from 'react-toastify';
import { warningToast } from '../../../../../common/toasts/warning';
import { successToast } from '../../../../../common/toasts/success';
import { UserContext } from '../../../../Auth/context/UserContext';
import { ProductsContext } from '../../../../Product/context/ProductsContext';
import { editProduct } from '../../../../Product/service/editProduct';

const ShoppingCart = () => {
	const { user } = useContext(UserContext);
	const { shoopingCart, setShoopingCart } = useContext(ShoopingCartContext);
	const { products, setProducts } = useContext(ProductsContext);
	function updateShoppingCart(product, newValue) {
		console.log('id: ' + product.id + ' value: ' + newValue);
		shoopingCart.forEach((element) => {
			if (element.id === product.id) {
				if (newValue > element.available) {
					warningToast(
						'Warning, you just tried to buy more then we have available!'
					);
					return;
				}
				element.quantityToBuy = newValue;
			}
			setShoopingCart([...shoopingCart]);
			console.log(element);
		});
	}
	const [city, setCity] = useState('');
	const [street, setStreet] = useState('');
	const [number, setNumber] = useState('');
	return (
		<div>
			<h2> Welcome to the shopping cart !</h2>
			{shoopingCart &&
				shoopingCart.map((product) => (
					<div key={product.id}>
						<Product product={product} disableAddToCart={true} />
						<div>
							<label>Quantity to buy:</label>
							<input
								type="number"
								required
								value={product.quantityToBuy}
								onChange={(e) => updateShoppingCart(product, e.target.value)}
							/>
						</div>
						<br />
					</div>
				))}
			<br /> <br />
			{shoopingCart.length > 0 ? (
				<div>
					<h2> Dear {user.name}, fill in other order details !</h2>
					<form>
						<label>City:</label>
						<input
							type="text"
							required
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>

						<label>Street:</label>
						<input
							type="text"
							required
							value={street}
							onChange={(e) => setStreet(e.target.value)}
						/>

						<label>Number:</label>
						<input
							type="text"
							required
							value={number}
							onChange={(e) => setNumber(e.target.value)}
						/>
						<br />

						<div className="confirmBuy">
							<button
								onClick={async (e) => {
									e.preventDefault();
									console.log('test');
									if (city === '' || street === '' || number === '') {
										warningToast('Warning, some fields are empty');
										return;
									}
									setShoopingCart([]);

									// for every just bought product, update avaiable state on db
									shoopingCart.forEach(async (shoppingProduct) => {
										// update db
										var changedProduct = await editProduct(
											shoppingProduct.id,
											shoppingProduct.name,
											shoppingProduct.price,
											shoppingProduct.available - shoppingProduct.quantityToBuy,
											user.jwt,
											false
										);
										// update context
										let tempProducts = [];
										products.forEach((product) => {
											if (product.id !== shoppingProduct.id) {
												tempProducts.push(product);
											} else {
												tempProducts.push(changedProduct);
											}
										});
										setProducts(tempProducts);
									});

									successToast(
										'Well done, you will get a product in a next 7 day !'
									);
								}}
							>
								CONFIRM
							</button>
						</div>
					</form>
				</div>
			) : (
				''
			)}
			<ToastContainer />
		</div>
	);
};

export default ShoppingCart;
