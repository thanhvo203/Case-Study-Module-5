import axios from "axios";

export async function getListTypeRental (){
    const resolve = await axios.get(`http://localhost:8080/rentalType`)
    return resolve.data;
}

export async function getRentalById (id) {
    const resolve = await axios.get(`http://localhost:8080/rentalType/${id}`)
    return resolve.data;
}