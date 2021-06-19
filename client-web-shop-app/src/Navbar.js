const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> WebShop client </h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/signup" style={{
                    color: "white",
                    backgroundColor: '#22ad9a',
                    borderRadius: '0.8em'
                }}>Sign Up</a>
            </div>
        </nav>
    );
}

export default Navbar;