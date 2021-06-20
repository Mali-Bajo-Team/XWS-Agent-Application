const ProductList = ({ products, title }) => {
    return (
        <div className="product-list">
            <h3>{title}</h3>
            {products.map(product => (
                <div className="product-preview" key={product.id} >
                    <h2>{product.name}</h2>
                    <p>Price per product: {product.price} $</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;