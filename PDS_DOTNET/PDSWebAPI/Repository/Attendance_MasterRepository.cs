using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using IOCWeb.Models;

namespace IOCWeb.Repositories
{

         public class Attendance_MasterRepository:IAttendance_MasterRepository
         {
              IAttendance_MasterManager _aManager;

              public Attendance_MasterRepository()
              {
                 _aManager = new Attendance_MasterManager();
              }


                  public List<Attendance_Master> GetAttendance_Masters()
                  {
                        return _aManager.GetAll();
                  }

                     public Attendance_Master GetAttendance_MasterById(int id)
                     {
                        return _aManager.GetById(id); 
                     }

                     public bool Insert(Attendance_Master product)
                     {
                       return  _aManager.Insert(product);
                     }

                     public bool Update(Attendance_Master product)
                     {  
                      return _aManager.Update(product);
                     }
 
                     public bool Delete(int id)
                     {
                      return  _aManager.Delete(id); 
                     }


         }
}





