import React, { useEffect, useState } from "react";
import { getListCustomer , deleteCustomer} from "../../services/CustomerServices";
import { Link ,useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function CustomerList() {
    const [customers, setCustomer] = useState([]);

    const navigation = useNavigate();

    const showList = () => {
        const showLists = async () => {
            const data = await getListCustomer();
            setCustomer(data)
        }
        showLists();
    }
    useEffect(showList, [])

    const handleDelete = (id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: 'You won\'t be able to revert this!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            deleteCustomer(id).then(() => {
              Swal.fire({
                icon: 'success',
                text: 'The customer has been deleted',
                title: 'success'
              }).then(() => {
                navigation("/customers")
              })
            });
          }
        });
      };
      useEffect(showList, [])


    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <style dangerouslySetInnerHTML={{ __html: "\nbody {\n color: #566787;\n    background: #f5f5f5;\n    font-family: 'Roboto', sans-serif;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n    min-width: 1000px;\n    background: #fff;\n    padding: 20px;\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {\n    padding-bottom: 10px;\n    margin: 0 0 10px;\n    min-width: 100%;\n}\n.table-title h2 {\n    margin: 8px 0 0;\n    font-size: 22px;\n}\n.search-box {\n    position: relative;        \n    float: right;\n}\n.search-box input {\n    height: 34px;\n    border-radius: 20px;\n    padding-left: 35px;\n    border-color: #ddd;\n    box-shadow: none;\n}\n.search-box input:focus {\n    border-color: #3FBAE4;\n}\n.search-box i {\n    color: #a0a5b1;\n    position: absolute;\n    font-size: 19px;\n    top: 18px;\n    left: 10px;\n}\ntable.table tr th, table.table tr td {\n    border-color: #e9e9e9;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n    background-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n    background: #f5f5f5;\n}\ntable.table th i {\n    font-size: 13px;\n    margin: 0 5px;\n    cursor: pointer;\n}\ntable.table td:last-child {\n    width: 130px;\n}\ntable.table td a {\n    color: #a0a5b1;\n    display: inline-block;\n    margin: 0 5px;\n}\ntable.table td a.view {\n    color: #03A9F4;\n}\ntable.table td a.edit {\n    color: #FFC107;\n}\ntable.table td a.delete {\n    color: #E34724;\n}\ntable.table td i {\n    font-size: 19px;\n}    \n.pagination {\n    float: right;\n    margin: 0 0 5px;\n}\n.pagination li a {\n    border: none;\n    font-size: 95%;\n    width: 30px;\n    height: 30px;\n    color: #999;\n    margin: 0 2px;\n    line-height: 30px;\n    border-radius: 30px !important;\n    text-align: center;\n    padding: 0;\n}\n.pagination li a:hover {\n    color: #666;\n}\t\n.pagination li.active a {\n    background: #03A9F4;\n}\n.pagination li.active a:hover {\n    background: #0397d6;\n}\n.pagination li.disabled i {\n    color: #ccc;\n}\n.pagination li i {\n    font-size: 16px;\n    padding-top: 6px\n}\n.hint-text {\n    float: left;\n    margin-top: 6px;\n    font-size: 95%;\n}\n" }} />
            <h1 style={{ textAlign: 'center' }}>Customer Management</h1>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div>
                        <button style={{ marginBottom: '10px' }}>
                            <Link to= {`/customers/create-customer`} className="btn btn-primary" style={{ fontSize: '25px', borderRadius: '30px', backgroundColor: '#78d5ef', marginLeft: '15px' }}>Create</Link>
                        </button>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>Customer</h2></div>
                                <div className="col-sm-4">
                                    <div className="search-box">
                                        <i className="material-icons"></i>
                                        <input type="text" className="form-control" placeholder="Search…" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name </th>
                                    <th>Birthday</th>
                                    <th>Gender </th>
                                    <th>Identity Card</th>
                                    <th>Phone Number </th>
                                    <th>Email</th>
                                    <th>Type Customer</th>
                                    <th>Address</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, count) => {
                                    return (
                                        <tr key={customer.id}>
                                            <td>{count}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.date_of_birth}</td>
                                            <td>{customer.gender}</td>
                                            <td>{customer.id_card}</td>
                                            <td>{customer.phone_number}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.typeCustomer.type}</td>
                                            <td>{customer.address}</td>
                                            <td>
                                                <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons"></i></a>
                                                <Link to={`/customers/update-customer/${customer.id}`} className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons"></i></Link>                                             
                                                <button type="submit" onClick={() => handleDelete(customer.id)} className="delete" title="Delete" data-toggle="tooltip">
                                                <i className="material-icons" style={{ color: 'red'}}></i>
                                                </button>
                                                
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="clearfix">
                            <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                            <ul className="pagination">
                                <li className="page-item disabled"><a href="#"><i className="fa fa-angle-double-left" /></a></li>
                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item active"><a href="#" className="page-link">3</a></li>
                                <li className="page-item"><a href="#" className="page-link">4</a></li>
                                <li className="page-item"><a href="#" className="page-link">5</a></li>
                                <li className="page-item"><a href="#" className="page-link"><i className="fa fa-angle-double-right" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/*MODAL DELETE*/}
            <div id="deleteCustomerModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header" style={{ background: 'red', color: 'white' }}>
                                <h4 className="modal-title">Delete Customer</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            </div>
                            <div className="modal-body">
                                <h4>Are you sure you want to delete this Customer?</h4>
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
        </div>

    )
}
export default CustomerList;