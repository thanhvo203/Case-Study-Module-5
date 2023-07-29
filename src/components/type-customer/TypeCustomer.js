import axios from "axios";

export async function getListTypeCustomer() {
    const resolve = await axios.get('http://localhost:8080/typeCustomer')
    return resolve.data;
}
export async function getTypeById(id) {
    const resolve = await axios.get(`http://localhost:8080/typeCustomer/${id}`);
    return resolve.data;
  }