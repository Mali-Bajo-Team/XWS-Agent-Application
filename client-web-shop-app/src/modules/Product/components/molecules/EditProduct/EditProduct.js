import { useLocation } from 'react-router-dom';

const EditProduct = () => {
	const { state } = useLocation();

	return (
		<div>
			{console.log(state)}
			<h1> Edit a product number</h1>
		</div>
	);
};

export default EditProduct;
