import React from "react";



function Header() {
    return (
        <div>
             <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i" rel="stylesheet" />
      <link rel="stylesheet" href="css/open-iconic-bootstrap.min.css" />
      <link rel="stylesheet" href="css/animate.css" />
      <link rel="stylesheet" href="css/owl.carousel.min.css" />
      <link rel="stylesheet" href="css/owl.theme.default.min.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/aos.css" />
      <link rel="stylesheet" href="css/ionicons.min.css" />
      <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
      <link rel="stylesheet" href="css/jquery.timepicker.css" />
      <link rel="stylesheet" href="css/flaticon.css" />
      <link rel="stylesheet" href="css/icomoon.css" />
      <link rel="stylesheet" href="css/style.css" />
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
                <div className="container">
                    <a className="navbar-brand" href="home.html">Furama</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu" /> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="home.html" className="nav-link">Home</a></li>
                            <li className="nav-item active"><a href="service.html" className="nav-link">Rooms</a></li>
                            <li className="nav-item"><a href="restaurant.html" className="nav-link">Restaurant</a></li>
                            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* END nav */}
            <div className="hero-wrap" style={{ backgroundImage: 'url("images/bg_1.jpg")' }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
                        <div className="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
                            <div className="text">
                                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="home.html">Home</a></span>
                                    <span>About</span></p>
                                <h1 className="mb-4 bread">Rooms</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Header;