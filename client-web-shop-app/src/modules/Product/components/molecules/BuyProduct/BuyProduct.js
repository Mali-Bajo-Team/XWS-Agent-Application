import { useParams } from 'react-router-dom';

const BuyProduct = () => {
	const { id } = useParams();

	return (
		<div>
			<h1> Buy a product number {id} </h1>
		</div>
	);
};

export default BuyProduct;
