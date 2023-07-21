import React from "react";


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="home.html">Furama</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active"><a href="home.html" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="service.html" className="nav-link">Rooms</a></li>
                            <li className="nav-item"><a href="restaurant.html" className="nav-link">Restaurant</a></li>
                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* END nav */}
            <section className="home-slider owl-carousel">
                <div className="slider-item" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate text-center">
                                <div className="text mb-5 pb-3">
                                    <h1 className="mb-3">Welcome To Furama</h1>
                                    <h2>Hotels &amp; Resorts</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-item" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-12 ftco-animate text-center">
                                <div className="text mb-5 pb-3">
                                    <h1 className="mb-3">Enjoy A Luxury Experience</h1>
                                    <h2>Join With Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Header;