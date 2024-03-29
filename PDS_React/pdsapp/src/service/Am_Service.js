import axios from 'axios';
let baseUrl="http://localhost:7373/police/"

//let baseUrl2="http://localhost:7373/activity/" 
let baseUrl2="http://localhost:5122/activity/"  //it is using .net


let baseUrl3="http://localhost:7373/duty_history/"


class Adm_Service{
    //---------------- methods for polices ----------------------
    //get all polices
    getAllpolices(){
       return axios.get(baseUrl+"getallpolices")
    }
    //get one police
    getById(pid){
        return axios.get(baseUrl+"polices/"+pid)
    }
    //insert police
    addPolice(prod){
        return axios.post(baseUrl+"add_police/"+prod.pid,prod)
    }
    //update police
    updatePolice(prod){
        return axios.put(baseUrl+"update_police/"+prod.pid,prod)
    }
    //delete police
    deletepolice(pid){
        return axios.delete(baseUrl+"delete_police/"+pid);
    }



     //-------------- methods for activities ---------------------------
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
     //delete activity
     deleteActivity(ac_id){
         return axios.delete(baseUrl2+"delete_activity/"+ac_id);
     }

     //-------------------- fetch polices -------------
     getPolicesByActivity(ac_id)
     {
        return axios.get(baseUrl+"byActivity/"+ac_id);
     }
 

     //----------------- insert duty in duty history----------
       addDuty(obj)
       {
         console.log("In Service ",obj)
         return axios.post(baseUrl3+"add_duty/",obj);
       }
}

export default new Adm_Service();

