import React from "react";
function Footer() {
    return (
        <div>
           <section className="instagram pt-5">
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
export default Footer;