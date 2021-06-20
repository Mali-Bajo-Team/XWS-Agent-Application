import { useState } from "react";

const Home = () => {
    const [products] = useState([
        { name: 'Omeksivac', price: 15, availability: 10, pathToImage: '', id: 1 },
        { name: 'Omlet lepinja', price: 20, availability: 3, pathToImage: '', id: 2 },
        { name: 'Sta god', price: 10, availability: 0, pathToImage: '', id: 3 }
    ])

    return (
        <div className="home">
            {products.map(product => (
                <div className="product-preview" key={product.id} >
                    <h2>{product.name}</h2>
                    <p>Price per product: {product.price} $</p>
                </div>
            ))}
        </div>
    );
}

export default Home;