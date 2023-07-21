import React from "react";

function Home() {

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
          <div className="slider-item" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
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
          <div className="slider-item" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
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
        <section className="ftco-booking">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form action="#" className="booking-form">
                  <div className="row">
                    <div className="col-md-3 d-flex">
                      <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                        <div className="wrap">
                          <label htmlFor>Check-in Date</label>
                          <input type="text" className="form-control checkin_date" placeholder="Check-in date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex">
                      <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                        <div className="wrap">
                          <label htmlFor>Check-out Date</label>
                          <input type="text" className="form-control checkout_date" placeholder="Check-out date" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex">
                      <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                        <div className="wrap">
                          <label htmlFor>Room</label>
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon"><span className="ion-ios-arrow-down" /></div>
                              <select name id className="form-control">
                                <option value>Suite</option>
                                <option value>Family Room</option>
                                <option value>Furama Room</option>
                                <option value>Classic Room</option>
                                <option value>Superior Room</option>
                                <option value>Luxury Room</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex">
                      <div className="form-group p-4 align-self-stretch d-flex align-items-end">
                        <div className="wrap">
                          <label htmlFor>Customer</label>
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon"><span className="ion-ios-arrow-down" /></div>
                              <select name className="form-control">
                                <option value>1 Adult</option>
                                <option value>2 Adult</option>
                                <option value>3 Adult</option>
                                <option value>4 Adult</option>
                                <option value>5 Adult</option>
                                <option value>6 Adult</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md d-flex">
                      <div className="form-group d-flex align-self-stretch">
                        <input type="submit" defaultValue="Check Availability" className="btn btn-primary py-3 px-4 align-self-stretch" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftc-no-pb ftc-no-pt">
          <div className="container">
            <div className="row">
              <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
                <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                  <span className="icon-play" />
                </a>
              </div>
              <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                <div className="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
                  <div className="ml-md-0">
                    <span className="subheading">Welcome to Furama Resort</span>
                    <h2 className="mb-4">Welcome To Our Resort</h2>
                  </div>
                </div>
                <div className="pb-md-5">
                  <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it
                    would have been rewritten a thousand times and everything that was left from its origin would be
                    the word "and" and the Little Blind Text should turn around and return to its own, safe country.
                    But nothing the copy said could convince her and so it didn’t take long until a few insidious
                    Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their
                    agency, where they abused her for their.</p>
                  <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline
                    of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own
                    road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her
                    way.</p>
                  <ul className="ftco-social d-flex">
                    <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-google-plus" /></a></li>
                    <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services py-4 d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-reception-bell" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">25/7 Front Desk</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services py-4 d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-serving-dish" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Restaurant Bar</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-sel Searchf-stretch ftco-animate">
                <div className="media block-6 services py-4 d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-car" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Transfer Services</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-self-stretch ftco-animate">
                <div className="media block-6 services py-4 d-block text-center">
                  <div className="d-flex justify-content-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-spa" />
                    </div>
                  </div>
                  <div className="media-body p-2 mt-2">
                    <h3 className="heading mb-3">Spa Suites</h3>
                    <p>A small river named Duden flows by their place and supplies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2 className="mb-4">Our Rooms</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                <div className="room">
                  <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-1.jpg)'}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3 text-center">
                    <h3 className="mb-3"><a href="service.html">Suite Room</a></h3>
                    <p><span className="price mr-2">$120.00</span> <span className="per">per night</span></p>
                    <hr />
                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">View Room Details <span className="icon-long-arrow-right" /></a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                <div className="room">
                  <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-2.jpg)'}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3 text-center">
                    <h3 className="mb-3"><a href="service.html">Family Room</a></h3>
                    <p><span className="price mr-2">$20.00</span> <span className="per">per night</span></p>
                    <hr />
                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">View Room Details <span className="icon-long-arrow-right" /></a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                <div className="room">
                  <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-3.jpg)'}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3 text-center">
                    <h3 className="mb-3"><a href="service.html">Furama Room</a></h3>
                    <p><span className="price mr-2">$150.00</span> <span className="per">per night</span></p>
                    <hr />
                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">View Room Details <span className="icon-long-arrow-right" /></a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                <div className="room">
                  <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-4.jpg)'}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3 text-center">
                    <h3 className="mb-3"><a href="service.html">Classic Room</a></h3>
                    <p><span className="price mr-2">$130.00</span> <span className="per">per night</span></p>
                    <hr />
                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">View Room Details <span className="icon-long-arrow-right" /></a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                <div className="room">
                  <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-5.jpg)'}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3 text-center">
                    <h3 className="mb-3"><a href="service.html">Superior Room</a></h3>
                    <p><span className="price mr-2">$300.00</span> <span className="per">per night</span></p>
                    <hr />
                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">View Room Details <span className="icon-long-arrow-right" /></a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm col-md-6 col-lg-4 ftco-animate">
                <div className="room">
                  <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{backgroundImage: 'url(images/room-6.jpg)'}}>
                    <div className="icon d-flex justify-content-center align-items-center">
                      <span className="icon-search2" />
                    </div>
                  </a>
                  <div className="text p-3 text-center">
                    <h3 className="mb-3"><a href="service.html">Luxury Room</a></h3>
                    <p><span className="price mr-2">$500.00</span> <span className="per">per night</span></p>
                    <hr />
                    <p className="pt-1"><a href="rooms-single.html" className="btn-custom">View Room Details <span className="icon-long-arrow-right" /></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={50000}>0</strong>
                        <span>Happy Guests</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={3000}>0</strong>
                        <span>Rooms</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={1000}>0</strong>
                        <span>Staffs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
                    <div className="block-18 text-center">
                      <div className="text">
                        <strong className="number" data-number={100}>0</strong>
                        <span>Destination</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section testimony-section bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 ftco-animate">
                <div className="row ftco-animate">
                  <div className="col-md-12">
                    <div className="carousel-testimony owl-carousel ftco-owl">
                      <div className="item">
                        <div className="testimony-wrap py-4 pb-5">
                          <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text text-center">
                            <p className="mb-4">A small river named Duden flows by their place and supplies it
                              with the necessary regelialia. It is a paradisematic country, in which
                              roasted parts of sentences fly into your mouth.</p>
                            <p className="name">Nathan Smith</p>
                            <span className="position">Guests</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4 pb-5">
                          <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_2.jpg)'}}>
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text text-center">
                            <p className="mb-4">A small river named Duden flows by their place and supplies it
                              with the necessary regelialia. It is a paradisematic country, in which
                              roasted parts of sentences fly into your mouth.</p>
                            <p className="name">Nathan Smith</p>
                            <span className="position">Guests</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4 pb-5">
                          <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_3.jpg)'}}>
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text text-center">
                            <p className="mb-4">A small river named Duden flows by their place and supplies it
                              with the necessary regelialia. It is a paradisematic country, in which
                              roasted parts of sentences fly into your mouth.</p>
                            <p className="name">Nathan Smith</p>
                            <span className="position">Guests</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4 pb-5">
                          <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text text-center">
                            <p className="mb-4">A small river named Duden flows by their place and supplies it
                              with the necessary regelialia. It is a paradisematic country, in which
                              roasted parts of sentences fly into your mouth.</p>
                            <p className="name">Nathan Smith</p>
                            <span className="position">Guests</span>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="testimony-wrap py-4 pb-5">
                          <div className="user-img mb-4" style={{backgroundImage: 'url(images/person_1.jpg)'}}>
                            <span className="quote d-flex align-items-center justify-content-center">
                              <i className="icon-quote-left" />
                            </span>
                          </div>
                          <div className="text text-center">
                            <p className="mb-4">A small river named Duden flows by their place and supplies it
                              with the necessary regelialia. It is a paradisematic country, in which
                              roasted parts of sentences fly into your mouth.</p>
                            <p className="name">Nathan Smith</p>
                            <span className="position">Guests</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h2>Recent Blog</h2>
              </div>
            </div>
            <div className="row d-flex">
              <div className="col-md-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                  </a>
                  <div className="text mt-3 d-block">
                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the
                        blind texts</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">Dec 6, 2018</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                  </a>
                  <div className="text mt-3">
                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the
                        blind texts</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">Dec 6, 2018</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                  </a>
                  <div className="text mt-3">
                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the
                        blind texts</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">Dec 6, 2018</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex ftco-animate">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20" style={{backgroundImage: 'url("images/image_4.jpg")'}}>
                  </a>
                  <div className="text mt-3">
                    <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the
                        blind texts</a></h3>
                    <div className="meta mb-3">
                      <div><a href="#">Dec 6, 2018</a></div>
                      <div><a href="#">Admin</a></div>
                      <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="instagram">
          <div className="container-fluid">
            <div className="row no-gutters justify-content-center pb-5">
              <div className="col-md-7 text-center heading-section ftco-animate">
                <h2><span>Instagram</span></h2>
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-sm-12 col-md ftco-animate">
                <a href="images/insta-1.jpg" className="insta-img image-popup" style={{backgroundImage: 'url(images/insta-1.jpg)'}}>
                  <div className="icon d-flex justify-content-center">
                    <span className="icon-instagram align-self-center" />
                  </div>
                </a>
              </div>
              <div className="col-sm-12 col-md ftco-animate">
                <a href="images/insta-2.jpg" className="insta-img image-popup" style={{backgroundImage: 'url(images/insta-2.jpg)'}}>
                  <div className="icon d-flex justify-content-center">
                    <span className="icon-instagram align-self-center" />
                  </div>
                </a>
              </div>
              <div className="col-sm-12 col-md ftco-animate">
                <a href="images/insta-3.jpg" className="insta-img image-popup" style={{backgroundImage: 'url(images/insta-3.jpg)'}}>
                  <div className="icon d-flex justify-content-center">
                    <span className="icon-instagram align-self-center" />
                  </div>
                </a>
              </div>
              <div className="col-sm-12 col-md ftco-animate">
                <a href="images/insta-4.jpg" className="insta-img image-popup" style={{backgroundImage: 'url(images/insta-4.jpg)'}}>
                  <div className="icon d-flex justify-content-center">
                    <span className="icon-instagram align-self-center" />
                  </div>
                </a>
              </div>
              <div className="col-sm-12 col-md ftco-animate">
                <a href="images/insta-5.jpg" className="insta-img image-popup" style={{backgroundImage: 'url(images/insta-5.jpg)'}}>
                  <div className="icon d-flex justify-content-center">
                    <span className="icon-instagram align-self-center" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer className="ftco-footer ftco-section">
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
                <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright ©
                  All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              </div>
            </div>
          </div>
        </footer>
        {/* loader */}
        <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" />
            <circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" />
          </svg>
        </div>
      </div>
      
    )
}
export default Home;