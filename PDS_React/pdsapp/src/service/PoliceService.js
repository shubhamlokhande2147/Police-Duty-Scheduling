import axios from 'axios';
let baseUrl="http://localhost:7373/leave/"

//let baseUrl2="http://localhost:7373/activity/"



class PoliceService{
    //---------------- methods for leaves ----------------------
    //get all polices
    getAllleaves(){
       return axios.get(baseUrl+"getalleaves")
    }
    //get one police
    getById(lvId){
        return axios.get(baseUrl+"leaves/"+lvId)
    }
    //insert police
    addLeave(prod){
        return axios.post(baseUrl+"add_leave/"+prod.lvId,prod)
    }
    //update police
    updateLeave(prod){
        return axios.put(baseUrl+"update_leave/"+prod.lvId,prod)
    }
    //delete police
    deleteleave(lvId){
        return axios.delete(baseUrl+"delete_leave/"+lvId);
    }



    //  //-------------- methods for activities ---------------------------
    //  //insert activity
    //  addActivity(activity){
    //     return axios.post(baseUrl2+"add_activity/"+activity.ac_id,activity)
    // }
    // //retrive activities
    //  getAllactivities(){
    //     return axios.get(baseUrl2+"getallactivities")
    //  }
    //  getActivityById(ac_id){
    //      return axios.get(baseUrl2+"getallactivities/"+ac_id)
    //  }
    //  //update activity
    //  updateActivity(activity){
    //      return axios.put(baseUrl2+"update_activity/"+activity.ac_id,activity)
    //  }
    //  //delete activity
    //  deleteActivity(ac_id){
    //      return axios.delete(baseUrl2+"delete_activity/"+ac_id);
    //  }
 
}

export default new PoliceService();