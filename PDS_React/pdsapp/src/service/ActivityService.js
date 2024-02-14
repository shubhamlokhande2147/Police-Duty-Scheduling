import axios from 'axios';
let baseUrl="http://localhost:7373/attendance_master/"




class AdminService{
    getAllproducts(){
       return axios.get(baseUrl+"/activity")
    }
    getById(id){
        return axios.get(baseUrl+"/activities"+id)
    }
    addProduct(prod){
        return axios.post(baseUrl+"/activities/{ac_id}"+prod.id,prod)
    }
    updateProduct(prod){
        return axios.put(baseUrl+"/activities/{ac_id}"+prod.id,prod)
    }
    deleteProduct(id){
        return axios.delete(baseUrl+"/activities/{ac_id}"+id);
    }
}

export default new AdminService();