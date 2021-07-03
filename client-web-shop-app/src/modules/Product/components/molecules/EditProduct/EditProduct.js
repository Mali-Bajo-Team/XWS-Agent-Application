import { useParams } from 'react-router-dom';

const EditProduct = () => {
	const { id } = useParams();

	return (
		<div>
			<h1> Edit a product number {id} </h1>
		</div>
	);
};

export default EditProduct;
