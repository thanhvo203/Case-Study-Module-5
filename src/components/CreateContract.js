import React from "react";

function CreateContract() {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <section className="vh-100 bg-image" style={{ backgroundColor: '#64ccf1' }}>
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: '15px' }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">Contract</h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <input type="number" id="form3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example1cg">Number Contract</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="date" id="form3Example3cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example3cg">Start Date</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="date" id="for3Example1cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="for3Example1cg">End Date</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="number" id="form3Example4cg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cg">Deposit</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="number" id="form3Example4cdg" className="form-control form-control-lg" />
                                                <label className="form-label" htmlFor="form3Example4cdg">Total Money</label>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" style={{ backgroundColor: '#64ccf1' }} className="btn btn-outline-primary btn-block btn-lg gradient-custom-4 text-body">
                                                    Create
                                                </button>
                                            </div>
                                        </form>
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
export default CreateContract;