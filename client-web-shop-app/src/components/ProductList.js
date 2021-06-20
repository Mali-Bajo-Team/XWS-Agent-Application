import { Link } from "react-router-dom";

const ProductList = ({ products, title }) => {
    return (
        <div className="product-list">
            <h3>{title}</h3>
            {products.map(product => (
                <div className="product-preview" key={product.id} >
                    <Link to={`/products/${product.id}`}>
                        <h2>{product.name}</h2>
                        <p>Price per product: {product.price} $</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;