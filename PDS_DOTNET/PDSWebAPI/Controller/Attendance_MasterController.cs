using Microsoft.AspNetCore.Mvc;
using IOCWeb.Models;
using IOCWeb.Services;

namespace IOCWeb.Controllers
{

[ApiController]
[Route("[controller]")]

public class Attendance_MasterController : ControllerBase
{
     //Each action method is mapped to HTTP Request type
        private IAttendance_MasterService _svc;
        public Attendance_MasterController(IAttendance_MasterService svc)
        {
            this._svc = svc;
        }

        
        //action method
        [HttpGet]
        [Route("api/attendance_masters")]
        public IActionResult GetAttendance_Masters(){
            //invoke service method to resturn products
            // send received data as message to outside world
            try{
                    var message=_svc.GetAttendance_Masters();
                    if(message==null){
                        return NotFound();
                    }
                return Ok(message);
            }
            catch(Exception){
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("api/attendance_masters")]
        public IActionResult Insert([FromBody] Attendance_Master product){
            try{

                bool status= _svc.Insert(product);
                if(status == false){
                    return BadRequest();
                }
                else{
                    return Ok();
                }
            }
            catch(Exception e){
                Console.WriteLine(e.Message);
                return BadRequest();
            }
        }

            [HttpGet("api/attendance_masters/{id}")]
            public IActionResult GetById(int id){
             try{

                    var  message= _svc.GetAttendance_MasterById(id);
                    if(message == null){
                        return BadRequest();
                     }
                    else{
                        return Ok(message);
                    }
                }
                  catch(Exception ){
                  return BadRequest();
            }
         }


                // GET: api/Attendance_Master/5
                [HttpDelete("api/attendance_masters/{id}")]
                public IActionResult Delete(int id){
                    try{
                            bool status= _svc.Delete(id);
                            if(status == false){
                                return BadRequest();
                            }
                            else{
                                return Ok();
                            }
                    }
                    catch(Exception ){
                        return BadRequest();
                    }
                }

                
                [HttpPut("api/attendance_masters")]
                public IActionResult Update(Attendance_Master product){
                    try{
                        bool status= _svc.Update(product);
                        if(status == false){
                            return BadRequest();
                        }
                        else{
                            return Ok();
                        }
                    }
                    catch(Exception ){
                        return BadRequest();
                    }
        
                }

   }
}   

