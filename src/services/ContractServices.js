import axios from "axios";

export async function getListContract(){
    const resolve = await axios.get(`http://localhost:8080/contracts`)
    return resolve.data;
 }
 export async function createContract(contract) {
     await axios.post(`http://localhost:8080/contracts`,contract)
 }