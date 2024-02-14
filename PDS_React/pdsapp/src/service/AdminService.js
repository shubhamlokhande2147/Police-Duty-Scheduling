import axios from 'axios';
let baseUrl="http://localhost:7373/attendance_master/"

let baseUrl2="http://localhost:7373/activity/"



class AdminService{
    getAllproducts(){
       return axios.get(baseUrl+"attendance_masters")
    }
    getById(am_id){
        return axios.get(baseUrl+"attendance_masters/"+am_id)
    }
    //insert A_Master
    addProduct(prod){
        return axios.post(baseUrl+"attendance_masters/"+prod.am_id,prod)
    }
    updateProduct(prod){
        return axios.put(baseUrl+"attendance_masters/"+prod.am_id,prod)
    }
    deleteProduct(am_id){
        return axios.delete(baseUrl+"attendance_masters/"+am_id);
    }

     //-------------------------------------------------------------
     //insert activity
     addActivity(activity){
        return axios.post(baseUrl2+"add_activity/"+activity.ac_id,activity)
    }
    //retrive activities
     getAllactivities(){
        return axios.get(baseUrl2+"getallactivities")
     }
     getActivityById(ac_id){
         return axios.get(baseUrl2+"getallactivities/"+ac_id)
     }
     //update activity
     updateActivity(activity){
         return axios.put(baseUrl2+"update_activity/"+activity.ac_id,activity)
     }
     deleteActivity(ac_id){
         return axios.delete(baseUrl2+"delete_activity/"+ac_id);
     }
 


}


export default new AdminService();