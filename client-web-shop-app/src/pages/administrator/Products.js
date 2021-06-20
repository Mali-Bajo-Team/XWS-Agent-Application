import { useState } from "react";
import ProductList from '../../containers/Product/ProductList';

const Products = () => {
    const [products] = useState([
        { name: 'Omeksivac', price: 15, availability: 10, pathToImage: '', id: 1 },
        { name: 'Omlet lepinja', price: 20, availability: 3, pathToImage: '', id: 2 },
        { name: 'Sta god', price: 10, availability: 0, pathToImage: '', id: 3 }
    ])

    return (
        <div className="home">
            <ProductList products={products} title="Welcome to the our products page!" />
        </div>
    );
}

export default Products;