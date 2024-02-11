using System.Collections.Generic;
using IOCWeb.Models;
using IOCWeb.Repositories;

namespace IOCWeb.Services
{

        public class Attendance_MasterService:IAttendance_MasterService
        {
                    private IAttendance_MasterRepository _repo;
                    public Attendance_MasterService()
                    {
                        Attendance_MasterRepository repository=new Attendance_MasterRepository();
                        this._repo = repository;
                    }

                    
                    public List<Attendance_Master> GetAttendance_Masters()
                    {
                        if (_repo != null)
                        {   
                            return _repo.GetAttendance_Masters();
                        }
                        return null;
                    }

                    Attendance_Master IAttendance_MasterService.GetAttendance_MasterById(int id)
                     {
                       return  _repo.GetAttendance_MasterById(id);
                     }
                    
                       bool IAttendance_MasterService.Insert(Attendance_Master product)
                        {
                            return _repo.Insert(product); 
                        }

                       bool IAttendance_MasterService.Update(Attendance_Master product)
                        {
                            return _repo.Update(product); 
                        }

                        bool IAttendance_MasterService.Delete(int id)
                         {
                           return _repo.Delete(id);
                         }

        }
}

