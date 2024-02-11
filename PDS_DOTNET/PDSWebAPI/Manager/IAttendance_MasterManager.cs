using System.Collections.Generic;
using IOCWeb.Models;

namespace IOCWeb.Managers
{

    public interface IAttendance_MasterManager{
        List<Attendance_Master> GetAll();
        Attendance_Master GetById(int id);
        bool Insert(Attendance_Master amaster);
        bool Update(Attendance_Master amaster);
        bool Delete(int id);
    }
}    
