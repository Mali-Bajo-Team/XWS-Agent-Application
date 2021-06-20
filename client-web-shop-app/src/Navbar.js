import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> WebShop client </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/create">New Product</Link>
                <Link to="/signup" style={{
                    color: "white",
                    backgroundColor: '#22ad9a',
                    borderRadius: '0.8em'
                }}>Sign Up</Link>
            </div>
        </nav>
    );
}

export default Navbar;