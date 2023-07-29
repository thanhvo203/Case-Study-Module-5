import React from "react";
import requireContext from 'require-context.macro';


function Home() {
  return (
    <div>
      <section className="ftco-section ftc-no-pb ftc-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
              <a href="https://vimeo.com/45830194" className="icon popup-vimeo d-flex justify-content-center align-items-center">
                <span className="icon-play" />
              </a>
            </div>
            <div className="col-md-7 py-5 wrap-about pb-md-5 ">
              <div className="heading-section heading-section-wo-line pt-md-5 pl-md-5 mb-5">
                <div className="ml-md-0">
                  <span className="subheading">Welcome to Furama Resort</span>
                  <h2 className="mb-4">Welcome To Our Resort</h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                <ul className="ftco-social d-flex">
                  <li className=""><a href="#"><span className="icon-twitter" /></a></li>
                  <li className=""><a href="#"><span className="icon-facebook" /></a></li>
                  <li className=""><a href="#"><span className="icon-google-plus" /></a></li>
                  <li className=""><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-3 d-flex align-self-stretch ">
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
            <div className="col-md-3 d-flex align-self-stretch ">
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
            <div className="col-md-3 d-flex align-sel Searchf-stretch ">
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
            <div className="col-md-3 d-flex align-self-stretch ">
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
            <div className="col-md-7 heading-section text-center ">
              <h2 className="mb-4">Our Rooms</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-sm col-md-6 col-lg-4 ">
              <div className="room">
                <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-1.jpg)' }}>
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
            <div className="col-sm col-md-6 col-lg-4 ">
              <div className="room">
                <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-2.jpg)' }}>
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
            <div className="col-sm col-md-6 col-lg-4 ">
              <div className="room">
                <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-3.jpg)' }}>
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
            <div className="col-sm col-md-6 col-lg-4 ">
              <div className="room">
                <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-4.jpg)' }}>
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
            <div className="col-sm col-md-6 col-lg-4 ">
              <div className="room">
                <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-5.jpg)' }}>
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
            <div className="col-sm col-md-6 col-lg-4 ">
              <div className="room">
                <a href="service.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-6.jpg)' }}>
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
      <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={50000}>3498</strong>
                      <span>Happy Guests</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={3000}>200</strong>
                      <span>Rooms</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={1000}>300</strong>
                      <span>Staffs</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center counter-wrap ">
                  <div className="block-18 text-center">
                    <div className="text">
                      <strong className="number" data-number={100}>50</strong>
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
            <div className="col-md-8 ">
              <div className="row ">
                <div className="col-md-12">
                  <div className="carousel-testimony owl-carousel ftco-owl">
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_2.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_3.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                          <p className="name">Nathan Smith</p>
                          <span className="position">Guests</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="testimony-wrap py-4 pb-5">
                        <div className="user-img mb-4" style={{ backgroundImage: 'url(images/person_1.jpg)' }}>
                          <span className="quote d-flex align-items-center justify-content-center">
                            <i className="icon-quote-left" />
                          </span>
                        </div>
                        <div className="text text-center">
                          <p className="mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
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
            <div className="col-md-7 heading-section text-center ">
              <h2>Recent Blog</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_1.jpg")' }}>
                </a>
                <div className="text mt-3 d-block">
                  <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta mb-3">
                    <div><a href="#">Dec 6, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_2.jpg")' }}>
                </a>
                <div className="text mt-3">
                  <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta mb-3">
                    <div><a href="#">Dec 6, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_3.jpg")' }}>
                </a>
                <div className="text mt-3">
                  <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                  <div className="meta mb-3">
                    <div><a href="#">Dec 6, 2018</a></div>
                    <div><a href="#">Admin</a></div>
                    <div><a href="#" className="meta-chat"><span className="icon-chat" /> 3</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="blog-entry align-self-stretch">
                <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url("images/image_4.jpg")' }}>
                </a>
                <div className="text mt-3">
                  <h3 className="heading mt-3"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
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
    </div>

  )
}
export default Home;