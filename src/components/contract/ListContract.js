import React, { useEffect, useState } from "react";
import { getListContract } from "../../services/ContractServices";
import { Link } from "react-router-dom";

function ListContract() {

  const [contracts, setContract] = useState([]);

  const showList = () => {
    const showLists = async () => {
      const data = await getListContract();
      setContract(data);
    }
    showLists();
  }
  useEffect(showList, [])


  return (
    <div>

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <style dangerouslySetInnerHTML={{ __html: "\n        body {\n            color: #566787;\n            background: #f5f5f5;\n            font-family: 'Roboto', sans-serif;\n        }\n        .table-responsive {\n            margin: 30px 0;\n        }\n        .table-wrapper {\n            min-width: 1000px;\n            background: #fff;\n            padding: 20px;\n            box-shadow: 0 1px 1px rgba(0,0,0,.05);\n        }\n        .table-title {\n            padding-bottom: 10px;\n            margin: 0 0 10px;\n            min-width: 100%;\n        }\n        .table-title h2 {\n            margin: 8px 0 0;\n            font-size: 22px;\n        }\n        .search-box {\n            position: relative;\n            float: right;\n        }\n        .search-box input {\n            height: 34px;\n            border-radius: 20px;\n            padding-left: 35px;\n            border-color: #ddd;\n            box-shadow: none;\n        }\n        .search-box input:focus {\n            border-color: #3FBAE4;\n        }\n        .search-box i {\n            color: #a0a5b1;\n            position: absolute;\n            font-size: 19px;\n            top: 18px;\n            left: 10px;\n        }\n        table.table tr th, table.table tr td {\n            border-color: #e9e9e9;\n        }\n        table.table-striped tbody tr:nth-of-type(odd) {\n            background-color: #fcfcfc;\n        }\n        table.table-striped.table-hover tbody tr:hover {\n            background: #f5f5f5;\n        }\n        table.table th i {\n            font-size: 13px;\n            margin: 0 5px;\n            cursor: pointer;\n        }\n        table.table td:last-child {\n            width: 130px;\n        }\n        table.table td a {\n            color: #a0a5b1;\n            display: inline-block;\n            margin: 0 5px;\n        }\n        table.table td a.view {\n            color: #03A9F4;\n        }\n        table.table td a.edit {\n            color: #FFC107;\n        }\n        table.table td a.delete {\n            color: #E34724;\n        }\n        table.table td i {\n            font-size: 19px;\n        }\n        .pagination {\n            float: right;\n            margin: 0 0 5px;\n        }\n        .pagination li a {\n            border: none;\n            font-size: 95%;\n            width: 30px;\n            height: 30px;\n            color: #999;\n            margin: 0 2px;\n            line-height: 30px;\n            border-radius: 30px !important;\n            text-align: center;\n            padding: 0;\n        }\n        .pagination li a:hover {\n            color: #666;\n        }\n        .pagination li.active a {\n            background: #03A9F4;\n        }\n        .pagination li.active a:hover {\n            background: #0397d6;\n        }\n        .pagination li.disabled i {\n            color: #ccc;\n        }\n        .pagination li i {\n            font-size: 16px;\n            padding-top: 6px\n        }\n        .hint-text {\n            float: left;\n            margin-top: 6px;\n            font-size: 95%;\n        }\n    " }} />
      <h1 style={{ textAlign: 'center' }}>Contract Management</h1>
      <div className="container-fluid">
        <div className="table-responsive">
          <div>
            <button style={{ marginBottom: '10px' }}>
              <Link to={`/contracts/create-contract`} className="btn btn-primary" style={{ fontSize: '25px', borderRadius: '30px', marginLeft: '12px' }}>Create</Link>
            </button>
          </div>
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-8"><h2>Contract</h2></div>
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
                  <th style={{ width: '250px' }}>Number Contract</th>
                  <th>Start Date</th>
                  <th>End Date </th>
                  <th>Deposit</th>
                  <th>Total Money</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract, count) => {
                  return (
                    <tr key={contract.contract_id}>
                      <td>{count}</td>
                      <td>{contract.contract_id}</td>
                      <td>{contract.check_in}</td>
                      <td>{contract.check_out}</td>
                      <td>${contract.deposit}</td>
                      <td>${contract.total}</td>

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
    </div>

  )
}
export default ListContract;