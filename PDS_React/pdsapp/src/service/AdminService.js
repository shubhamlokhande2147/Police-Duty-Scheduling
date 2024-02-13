import axios from 'axios';
let baseUrl="http://localhost:7373/attendance_master/"


class AdminService{
    getAllproducts(){
       return axios.get(baseUrl+"attendance_masters")
    }
    getById(pid){
        return axios.get(baseUrl+"attendance_masters/"+pid)
    }
    addProduct(prod){
        return axios.post(baseUrl+"attendance_masters/"+prod.pid,prod)
    }
    // updateProduct(prod){
    //     return axios.put(baseUrl+"products/"+prod.pid,prod)
    // }
    // deleteProduct(pid){
    //     return axios.delete(baseUrl+"products/"+pid);
    // }
}

export default new AdminService();