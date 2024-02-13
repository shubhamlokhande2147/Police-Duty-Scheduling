import axios from 'axios';
let baseUrl="http://localhost:7373/attendance_master/"


class AdminService{
    getAllproducts(){
       return axios.get(baseUrl+"attendance_masters")
    }
    getById(am_id){
        return axios.get(baseUrl+"attendance_masters/"+am_id)
    }
    addProduct(prod){
        return axios.post(baseUrl+"attendance_masters/"+prod.am_id,prod)
    }
    updateProduct(prod){
        return axios.put(baseUrl+"attendance_masters/"+prod.am_id,prod)
    }
    deleteProduct(am_id){
        return axios.delete(baseUrl+"attendance_masters/"+am_id);
    }
}

export default new AdminService();