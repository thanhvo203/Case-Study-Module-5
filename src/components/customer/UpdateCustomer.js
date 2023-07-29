import React, { useEffect, useState } from "react";
import { getCustomerById, updateCustomer } from "../../services/CustomerServices";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import Swal from "sweetalert2";
import { getListTypeCustomer, getTypeById } from "../type-customer/TypeCustomer";

function UpdateCustomer() {

  const { id } = useParams();
  const [customer, setCustomer] = useState([id]);
  const [typeCustomers, setTypeCustomers] = useState([]);

  const navigation = useNavigate();

  const getCustomer = async () => {
    const getCustomer = await getCustomerById(id);
    setCustomer(getCustomer);
  }
  const showListType = () => {
    const getList = async () => {
      const getList = await getListTypeCustomer();
      setTypeCustomers(getList);
    }
    getList();
  }


  useEffect(() => {
    getCustomer();
    showListType();
  }, [id]);





  return (
    <div>
      <Formik
        initialValues={{
          name: customer.name,
          date_of_birth: customer.date_of_birth,
          gender: customer.gender,
          id_card: customer.id_card,
          phone_number: customer.phone_number,
          email: customer.email,
          typeCustomer: customer.typeCustomer,
          address: customer.address
        }}
        validationSchema={yup.object({
          name: yup.string().required("Not Blank").min(3).max(100),
          date_of_birth: yup.date().required("Not Blank"),
          gender: yup.string().required("Not Blank"),
          id_card: yup.number().typeError("Please enter a valid number").required("Not Blank"),
          phone_number: yup.number().typeError("Please enter a valid number").required("Not Bank"),
          email: yup.string().required("Not Blank").email(),
          typeCustomer: yup.string().required("Not Blank"),
          address: yup.string().required("Not Blank"),
        })}
        onSubmit={async (customer) => {
          const typeListId = await getTypeById(customer.typeCustomer);
          const newCustomer = {
            ...customer,
            typeCustomer: typeListId
          }
          updateCustomer(newCustomer).then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Update Success',
              showConfirmButton: false,
              timer: 2000
            }).then(() => {
              navigation("/customers")
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
                  <h2 className="title">Update Customer</h2>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group" style={{ width: '245px' }}>
                        <div className="input-group">
                          <label htmlFor="name" className="label">Name Customer</label>
                          <Field className="input--style-4" type="text" name="name" id="name" />
                          <ErrorMessage style={{ color: 'red' }} name="name" component={"div"}></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="col-2" style={{ marginRight: '180px' }}>
                      <div className="input-group" style={{ width: '245px' }}>
                        <label htmlFor="id_card" className="label">Indentity Number</label>
                        <Field className="input--style-4" type="text" name="id_card" id="id_card" />
                        <ErrorMessage style={{ color: 'red' }} name="id_card" component={"div"}></ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-2" >
                      <div className="input-group" style={{ width: '245px' }}>
                        <label htmlFor="date_of_birth" className="label">Birthday</label>
                        <div className="input-group-icon">
                          <Field className="input--style-4 js-datepicker" type="date" id="date_of_birth" name="date_of_birth"
                            style={{ width: '245px', height: '56px' }} />

                          <ErrorMessage style={{ color: 'red' }} name="date_of_birth" component={"div"}></ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="col-2" style={{ marginRight: '180px' }}>
                      <div className="input-group" style={{ width: '260px' }}>
                        <label className="label">Gender</label>
                        <div className="p-t-10">
                          <label htmlFor="gender-male" className="radio-container m-r-45">Male
                            <Field type="radio" name="gender" id="gender-male" value="Male" />
                            <span className="checkmark" />
                          </label>
                          <label htmlFor="gender-female" className="radio-container">Female
                            <Field type="radio" name="gender" id="gender-female" value="Female" />
                            <span className="checkmark" />
                          </label>
                          <ErrorMessage style={{ color: 'red' }} name="gender" component={"div"}></ErrorMessage>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-2">
                      <div className="input-group" style={{ width: '245px' }}>
                        <label htmlFor="email" className="label">Email</label>
                        <Field className="input--style-4" type="text" name="email" id="email" />
                        <ErrorMessage style={{ color: 'red' }} name="email" component={"div"}></ErrorMessage>
                      </div>
                    </div>
                    <div className="col-2" style={{ marginRight: '180px' }}  >
                      <div className="input-group" style={{ width: '245px' }}>
                        <label htmlFor="phone_number" className="label">Phone Number</label>
                        <Field className="input--style-4" type="text" name="phone_number" id="phone_number" />
                        <ErrorMessage style={{ color: 'red' }} name="phone_number" component={"div"}></ErrorMessage>
                      </div>
                    </div>
                  </div>
                  <div className="input-group">
                    <div className="input-group">
                      <label htmlFor="address" className="label">Address</label>
                      <Field className="input--style-4" type="text" name="address" id="address" />
                      <ErrorMessage style={{ color: 'red' }} name="address" component={"div"}></ErrorMessage>
                    </div>
                  </div>

                  <div className="input-group">
                    <div >
                      <label htmlFor="typeCustomer" className="label">Types</label>
            
                        <Field name="typeCustomer" id="typeCustomer" as="select" className="input--style-4" style={{ width: '548px', height: '35px'}}>
                          <option value={''}>Choose option</option>
                          {Array.isArray(typeCustomers) && typeCustomers.map((type) => (
                            <option key={type.id} value={type.id}>{type.type}</option>
                          ))}
                        </Field>
                      <ErrorMessage style={{ color: 'red' }} name="typeCustomer" component={"div"}></ErrorMessage>
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
export default UpdateCustomer;