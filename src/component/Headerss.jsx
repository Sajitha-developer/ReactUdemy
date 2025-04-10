function Headerss() {
    return (
        <>
            <header className="navbar">
                <div className="navbar__s1">
                    <h1 className="navbar__s1__title">Udemy</h1>
                </div>
                <nav className="navbar__s2">
                    <i className="fa-solid fa-magnifying-glass" style={{ color: '#0c0d0e' }} aria-label="Search"></i>
                    <input type="text" placeholder="Search for anything here: Tech, Business, Art, ..." />
                </nav>
                <nav className="navbar__s3">
                    <a href="#course">Course</a>
                    <div className="mylearning">
                        <a href="#">My learning</a> {/* Make sure to add href or handle it accordingly */}
                        <div className="mylearning__popup">
                            <p>You did not purchase anything yet</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-cart-shopping" style={{ color: '#07090e' }} aria-label="Shopping Cart"></i>
                    <i className="fa-solid fa-bell" style={{ color: '#060b13' }} aria-label="Notifications"></i>
                    <i className="fa-solid fa-user" style={{ color: '#0b0e14' }} aria-label="User Profile"></i>
                </nav>
                <nav className="navbar__s4">
                    <i className="fa-solid fa-bars"></i>
                </nav>
            </header>
        </>
    );
}

export default Headerss;
