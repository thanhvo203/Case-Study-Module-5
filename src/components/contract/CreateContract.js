import React from "react";
import { useNavigate } from "react-router-dom";
import { createContract } from "../../services/ContractServices";
import * as yup from 'yup';
import {Formik , Form , Field , ErrorMessage} from 'formik';
import Swal from "sweetalert2";

function CreateContract() {
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    check_in: "", check_out: "", deposit: "", total: ""
                }}
                validationSchema={yup.object({
                    check_in: yup.date().required("Not Blank"),
                    check_out: yup.date().required("Not Blank"),
                    deposit: yup.number().typeError("Please enter money").required("Not Blank"),
                    total: yup.number().typeError("Please enter money").required("Not Blank"),

                })}
                onSubmit={async (contract) => {
                    const newContract = {
                        ...contract
                    }
                    createContract(newContract).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Create Success',
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => {
                            navigate("/contracts")
                        })
                    }
                    );
                }}
            >
                <Form>
                    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                        <div className="wrapper wrapper--w680">
                            <div className="card card-4">
                                <div className="card-body">
                                    <h2 className="title">Create Contract</h2>
                                    <div className="input-group">
                                        <div className="input-group">
                                            <label htmlFor="check_in" className="label">Check In</label>
                                            <Field className="input--style-4" type="date" name="check_in" id="check_in" style={{ height: '53px'}}/>
                                            <ErrorMessage style={{ color: 'red' }} name="check_in" component={"div"}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group">
                                            <label htmlFor="check_out" className="label">Check Out</label>
                                            <Field className="input--style-4" type="date" name="check_out" id="check_out"style={{ height: '53px'}} />
                                            <ErrorMessage style={{ color: 'red' }} name="check_out" component={"div"}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group">
                                            <label htmlFor="deposit" className="label">Deposit</label>
                                            <Field className="input--style-4" type="number" name="deposit" id="deposit"/>
                                            <ErrorMessage style={{ color: 'red' }} name="deposit" component={"div"}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group">
                                            <label htmlFor="total" className="label">Total</label>
                                            <Field className="input--style-4" type="number" name="total" id="total" />
                                            <ErrorMessage style={{ color: 'red' }} name="total" component={"div"}></ErrorMessage>
                                        </div>
                                    </div>
                                    
                                    <div className="p-t-15">
                                        <button className="btn btn-primary" type="submit" style={{ width: '125px', height: '47px' }}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
export default CreateContract;