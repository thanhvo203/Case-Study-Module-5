import React, { useEffect, useState } from "react";
import { getListService } from "../../services/FuramaServices";
import { Link } from "react-router-dom";


function Services() {

   const [service, setService] = useState ([]);

   const showList = () => {
      const getList = async () => {
         const data = await getListService();
         setService(data);
      }
      getList();
   }

   useEffect(showList,[])
    
    return (
        <div>
      <link rel="stylesheet" href="css/style.css" />
            {/*    create*/}
            <section className="ftco-section bg-light">
                <div>
                    <button style={{ width: '34%', marginBottom: '10px' }}>
                        <Link to={"/services/create-services"} className="btn btn-primary" style={{ fontSize: '25px' }}>Create</Link>
                    </button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                        {/* rooms */}
                            <div className="row">
                            {service.map((room) => {   
                                return (
                                    <div className="col-sm col-md-6 col-lg-4 ">
                                    <div className="room">
                                        <a href="rooms-single.html" className="img d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/room-1.jpg)' }}>
                                            <div className="icon d-flex justify-content-center align-items-center">
                                                <span className="icon-search2" />
                                            </div>
                                        </a>
                                        <div className="text p-3 text-center">
                                            <h3 className="mb-3"><a href="rooms-single.html">{room.service}</a></h3>
                                            <p><span className="price mr-2">${room.costs}</span> <span className="per">per night</span></p>
                                            <ul className="list">
                                                <li><span>Max:</span>{room.max_people}</li>
                                                <li><span>Area:</span>{room.usable_area}</li>
                                                <li><span>Standard:</span>{room.standard}</li>
                                                <li><span>Pool:</span>{room.pool}</li>
                                                <li><span>Floor:</span>{room.floor}</li>
                                                <li><span>Free:</span>{room.free}</li>
                                                <li><span>Type Room:</span>{room.typeRoom.type}</li>
                                            </ul>
                                            <hr />
                                            <p className="pt-1"><a href="rooms-single.html" className="btn-custom">Book Now <span className="icon-long-arrow-right" /></a></p>
                                            <p>
                                                <button><Link className="btn btn-primary" to={`/services/update-service/${room.id}`}>Update</Link></button>
                                                <button><a href="#deleteCustomerModal" className="btn btn-danger" title="Delete" data-toggle="modal">Delete</a></button>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                            </div>
                        </div>
                        {/* advanced search */}
                        <div className="col-lg-3 sidebar">
                            <div className="sidebar-wrap bg-light ">
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
                                                <select className="form-control">
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
                                                <select className="form-control">
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
                                                <select className="form-control">
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
                            <div className="sidebar-wrap bg-light ">
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
                                <input  type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                                <input type="button" className="btn btn-danger" defaultValue="Delete"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </div>

    )
}
export default Services;