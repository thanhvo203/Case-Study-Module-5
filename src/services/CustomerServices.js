import axios from "axios";


export async function getListCustomer() {
    const resolve  = await axios.get(`http://localhost:8080/customers`)
    return resolve.data;
}
export async function createCustomer(customer) {
    const response = await axios.post(`http://localhost:8080/customers`, customer);
    return response.data;
  }
export async function deleteCustomer(id) {
    await axios.delete(`http://localhost:8080/customers/${id}`)
}
export async function updateCustomer(id, customer){
    await axios.put(`http://localhost:8080/customers/${id}`,customer)
}
export async function getCustomerById(id) {
    await axios.get(`http://localhost:8080/customers/${id}`);
}