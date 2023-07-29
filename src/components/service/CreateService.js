
import React, { useEffect, useState } from "react";
import * as yup from 'yup';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import { useNavigate } from "react-router-dom";
import { getListTypeRental, getRentalById } from "../rental-type/RentalTypeServices";
import { getListTypeRoom, getTypeRoomById } from "../type-room/TypeRoomServices";
import { createService } from "../../services/FuramaServices";
import Swal from "sweetalert2";

function CreateService() {

    const [rentals, setRentals] = useState([]);
    const [typeRooms, setTypeRooms] = useState([]);
    const navigation = useNavigate();

    const onGetRentalsList = () => {
        const showList = async () => {
            const data = await getListTypeRental();
            setRentals(data);
        }
        showList();
    }

    const onGetTypeRoomList = () => {
        const showList = async () => {
            const data = await getListTypeRoom();
            setTypeRooms(data);
        }
        showList();
    }
    useEffect(() => {
        onGetRentalsList();
        onGetTypeRoomList();
    }, []);



    return (
        <div>
            <Formik
                initialValues={{
                    service: "", usable_area: "", costs: "", max_people: "", rentalType: "",
                    standard: "", description: "", typeRoom: "", pool: "", floor: "", free: ""
                }}
                validationSchema={yup.object({
                    service: yup.string().required("Not Blank").min(3).max(100),
                    usable_area: yup.string().required("Not Blank"),
                    costs: yup.number().typeError("Enter cost").required("Not Blank"),
                    max_people: yup.number().typeError("Enter People Quanlity").required("Not Blank"),
                    standard: yup.string().required("Not Blank"),
                    description: yup.string().required("Not Blank"),
                    pool: yup.string().required("Not Blank"),
                    floor: yup.string().required("Not Blank"),
                    free: yup.string().required("Not Blank"),
                    rentalType: yup.string().required("Not Blank"),
                    typeRoom: yup.string().required("Not Blank")
                })}
                onSubmit={async (service) => {

                    const rentalTypeId = await getRentalById(service.rentalType);
                    const typeRoomID = await getTypeRoomById(service.typeRoom);
                    const newService = {
                        ...service,
                        rentalType: rentalTypeId,
                        typeRoom: typeRoomID
                    }
                    createService(newService).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Create Success',
                            showConfirmButton: false,
                            timer: 2000
                        }).then(() => {
                            navigation("/services")
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
                                    <h2 className="title">Create Service</h2>
                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <div className="input-group">
                                                    <label htmlFor="service" className="label">Name Service</label>
                                                    <Field className="input--style-4" type="text" name="service" id="service" />
                                                    <ErrorMessage style={{ color: 'red' }} name="service" component={"div"}></ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2" style={{ marginRight: '180px' }}>
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <label htmlFor="usable_area" className="label">Usable Area</label>
                                                <Field className="input--style-4" type="text" name="usable_area" id="usable_area" />
                                                <ErrorMessage style={{ color: 'red' }} name="usable_area" component={"div"}></ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2" >
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <label htmlFor="costs" className="label">Cost</label>
                                                <div className="input-group-icon">
                                                    <Field className="input--style-4 js-datepicker" type="number" id="costs" name="costs"
                                                        style={{ width: '245px', height: '56px' }} />
                                                    <ErrorMessage style={{ color: 'red' }} name="costs" component={"div"}></ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2" style={{ marginRight: '180px' }}>
                                            <div className="input-group" style={{ width: '260px' }}>
                                                <label htmlFor="max_people" className="label">Max Peopel</label>
                                                <Field className="input--style-4" type="number" name="max_people" id="max_people" />
                                                <ErrorMessage style={{ color: 'red' }} name="max_people" component={"div"}></ErrorMessage>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-space">
                                        <div className="col-2">
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <label htmlFor="standard" className="label">Standard</label>
                                                <Field className="input--style-4" type="text" name="standard" id="standard" />
                                                <ErrorMessage style={{ color: 'red' }} name="standard" component={"div"}></ErrorMessage>
                                            </div>
                                        </div>
                                        <div className="col-2" style={{ marginRight: '180px' }}  >
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <label htmlFor="pool" className="label">Pool</label>
                                                <Field className="input--style-4" type="text" name="pool" id="pool" />
                                                <ErrorMessage style={{ color: 'red' }} name="pool" component={"div"}></ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2" >
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <label htmlFor="floor" className="label">Floor</label>
                                                <div className="input-group-icon">
                                                    <Field className="input--style-4 js-datepicker" type="number" id="floor" name="floor"
                                                        style={{ width: '245px', height: '56px' }} />
                                                    <ErrorMessage style={{ color: 'red' }} name="floor" component={"div"}></ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2" style={{ marginRight: '180px' }}>
                                            <div className="input-group" style={{ width: '260px' }}>
                                                <label htmlFor="free" className="label">Free</label>
                                                <Field className="input--style-4" type="number" name="free" id="free" />
                                                <ErrorMessage style={{ color: 'red' }} name="free" component={"div"}></ErrorMessage>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <div className="input-group">
                                            <label htmlFor="description" className="label">Description</label>
                                            <Field className="input--style-4" type="text" name="description" id="description" />
                                            <ErrorMessage style={{ color: 'red' }} name="description" component={"div"}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="row row-space">
                                        <div className="col-2" >
                                            <div className="input-group" style={{ width: '245px' }}>
                                                <label htmlFor="rentalType" className="label">Rental Types</label>
                                                <div className="input-group-icon">
                                                    <Field name="rentalType" id="rentalType" as="select" className="input--style-4" style={{ width: '250px', height: '35px' }}>
                                                        <option value={''}>Choose option</option>
                                                        {rentals.map((type => {
                                                            return (
                                                                <option key={type.id} value={type.id}>{type.type}</option>
                                                            )
                                                        }))}
                                                    </Field>
                                                    <ErrorMessage style={{ color: 'red' }} name="rentalType" component={"div"}></ErrorMessage>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-2" style={{ marginRight: '180px' }}>
                                            <div className="input-group" style={{ width: '260px' }}>
                                                <label htmlFor="typeRoom" className="label">Type Rooms</label>
                                                <Field name="typeRoom" id="typeRoom" as="select" className="input--style-4" style={{ width: '250px', height: '35px' }}>
                                                    <option value={''}>Choose option</option>
                                                    {typeRooms.map((type => {
                                                        return (
                                                            <option key={type.id} value={type.id}>{type.type}</option>
                                                        )
                                                    }))}
                                                </Field>
                                                <ErrorMessage style={{ color: 'red' }} name="typeRoom" component={"div"}></ErrorMessage>
                                            </div>
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

export default CreateService;