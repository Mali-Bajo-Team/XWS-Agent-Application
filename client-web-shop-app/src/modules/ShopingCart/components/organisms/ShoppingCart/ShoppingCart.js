import { useContext } from 'react';
import { ShoopingCartContext } from '../../../context/ShoppingCartContext';
import Product from '../../../../Product/components/atoms/Product';
import './ShoppingCart.modules.css';
import { ToastContainer } from 'react-toastify';
import { warningToast } from '../../../../../common/toasts/warning';

const ShoppingCart = () => {
	const { shoopingCart, setShoopingCart } = useContext(ShoopingCartContext);
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
	return (
		<div>
			<h2> Welcome to the shopping cart !</h2>

			{shoopingCart &&
				shoopingCart.map((product) => (
					<div key={product.id}>
						<Product product={product} />
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
			<ToastContainer />
		</div>
	);
};

export default ShoppingCart;
