import axios from "axios";


export async function getListService() {
    const resolve = await axios.get(`http://localhost:8080/services`)
    return resolve.data;
}
export async function createService(service){
    const resolve = await axios.post(`http://localhost:8080/services`, service);
    return resolve.data;
}
export async function deleteService(id) {
    await axios.delete(`http://localhost:8080/services/${id}`)
}
export async function updateService(id, service){
    await axios.put(`http://localhost:8080/services`+id,service)
}
export async function getServiceById(id) {
    await axios.get(`http://localhost:8080/services/${id}`);
}

 