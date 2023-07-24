import React from "react";

function Services() {
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
            {/*    create*/}
            <section className="ftco-section bg-light">
                <div>
                    <button style={{ width: '34%', marginBottom: '10px' }}>
                        <a href="create-room.html" className="btn btn-primary" style={{ fontSize: '25px' }}>Create</a>
                    </button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-1.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">Suite Room</a></h3>
                                            <p><span className="price mr-2">$120.00</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span> 3 Persons</li>
                                                <li><span>Size:</span> 45 m2</li>
                                                <li><span>View:</span> Sea View</li>
                                                <li><span>Bed:</span> 1</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><a className="btn btn-primary" href="update-room.html">Update</a></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-2.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">Family Room</a></h3>
                                            <p><span className="price mr-2">$20.00</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span> 3 Persons</li>
                                                <li><span>Size:</span> 45 m2</li>
                                                <li><span>View:</span> Sea View</li>
                                                <li><span>Bed:</span> 1</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><a className="btn btn-primary " href="update-room.html">Update</a></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-3.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">Furama Room</a></h3>
                                            <p><span className="price mr-2">$150.00</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span> 5 Persons</li>
                                                <li><span>Size:</span> 45 m2</li>
                                                <li><span>View:</span> Sea View</li>
                                                <li><span>Bed:</span> 2</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><a className="btn btn-primary " href="update-room.html">Update</a></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-4.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">Classic Room</a></h3>
                                            <p><span className="price mr-2">$130.00</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span> 5 Persons</li>
                                                <li><span>Size:</span> 45 m2</li>
                                                <li><span>View:</span> Sea View</li>
                                                <li><span>Bed:</span> 2</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><a className="btn btn-primary " href="update-room.html">Update</a></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-5.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">Superior Room</a></h3>
                                            <p><span className="price mr-2">$300.00</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span> 6 Persons</li>
                                                <li><span>Size:</span> 45 m2</li>
                                                <li><span>View:</span> Sea View</li>
                                                <li><span>Bed:</span> 3</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><a className="btn btn-primary " href="update-room.html">Update</a></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-6.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">Luxury Room</a></h3>
                                            <p><span className="price mr-2">$500.00</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span> 5 Persons</li>
                                                <li><span>Size:</span> 45 m2</li>
                                                <li><span>View:</span> Sea View</li>
                                                <li><span>Bed:</span> 2</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><a className="btn btn-primary " href="update-room.html">Update</a></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <h3 className="heading mb-4">Advanced Search</h3>
                                <form action="#">
                                    <div className="fields">
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control checkin_date" placeholder="Check In Date" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="checkin_date" className="form-control checkout_date" placeholder="Check Out Date" />
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control">
                                                    <option value>Room Type</option>
                                                    <option value>Suite</option>
                                                    <option value>Family Room</option>
                                                    <option value>Furama Room</option>
                                                    <option value>Classic Room</option>
                                                    <option value>Superior Room</option>
                                                    <option value>Luxury Room</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control">
                                                    <option value>0 Adult</option>
                                                    <option value>1 Adult</option>
                                                    <option value>2 Adult</option>
                                                    <option value>3 Adult</option>
                                                    <option value>4 Adult</option>
                                                    <option value>5 Adult</option>
                                                    <option value>6 Adult</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="select-wrap one-third">
                                                <div className="icon"><span className="ion-ios-arrow-down" /></div>
                                                <select name id className="form-control">
                                                    <option value>0 Children</option>
                                                    <option value>1 Children</option>
                                                    <option value>2 Children</option>
                                                    <option value>3 Children</option>
                                                    <option value>4 Children</option>
                                                    <option value>5 Children</option>
                                                    <option value>6 Children</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="range-slider">
                                                <span>
                                                    <input type="number" defaultValue={25000} min={0} max={120000} />	-
                                                    <input type="number" defaultValue={50000} min={0} max={120000} />
                                                </span>
                                                <input defaultValue={1000} min={0} max={120000} step={500} type="range" />
                                                <input defaultValue={50000} min={0} max={120000} step={500} type="range" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" defaultValue="Search" className="btn btn-primary py-3 px-5" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-wrap bg-light ftco-animate">
                                <h3 className="heading mb-4">Star Rating</h3>
                                <form method="post" className="star-rating">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /></span>
                                            </p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">
                                            <p className="rate"><span><i className="icon-star" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /><i className="icon-star-o" /></span></p>
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*MODAL DELETE*/}
            <div id="deleteCustomerModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header" style={{ background: 'red', color: 'white' }}>
                                <h4 className="modal-title">Delete Service</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <h4>Are you sure you want to delete this Service?</h4>
                                <p className="text-warning" /><h4 style={{ color: 'red' }}>This action cannot be undone.</h4><p />
                            </div>
                            <div className="modal-footer">
                                <input style={{ background: '#82817f' }} type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input style={{ background: '#cda45e' }} type="submit" className="btn btn-danger" defaultValue="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <section className="instagram pt-5">
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-center pb-5">
                        <div className="col-md-7 text-center heading-section ftco-animate">
                            <h2><span>Instagram</span></h2>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-1.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/insta-1.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-2.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/insta-2.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-3.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/insta-3.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-4.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/insta-4.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md ftco-animate">
                            <a href="images/insta-5.jpg" className="insta-img image-popup" style={{ backgroundImage: 'url(images/insta-5.jpg)' }}>
                                <div className="icon d-flex justify-content-center">
                                    <span className="icon-instagram align-self-center" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="ftco-footer ftco-bg-dark ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Furama Resort</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                                    live the blind texts.</p>
                                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Useful Links</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Blog</a></li>
                                    <li><a href="#" className="py-2 d-block">Rooms</a></li>
                                    <li><a href="#" className="py-2 d-block">Amenities</a></li>
                                    <li><a href="#" className="py-2 d-block">Gift Card</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Privacy</h2>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="py-2 d-block">Career</a></li>
                                    <li><a href="#" className="py-2 d-block">About Us</a></li>
                                    <li><a href="#" className="py-2 d-block">Contact Us</a></li>
                                    <li><a href="#" className="py-2 d-block">Services</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span>
                                        </li>
                                        <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                                        <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright ©
                                All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            <div id="ftco-loader" className="show fullscreen">
                <svg className="circular" width="48px" height="48px">
                    <circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" />
                    <circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" />
                </svg>
            </div>
        </div>

    )
}
export default Services;