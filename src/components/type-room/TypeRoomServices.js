import axios from "axios";

export async function getListTypeRoom (){
    const resolve = await axios.get(`http://localhost:8080/typeRoom`)
    return resolve.data;
}

export async function getTypeRoomById (id) {
    const resolve = await axios.get(`http://localhost:8080/typeRoom/${id}`)
    return resolve.data;
}