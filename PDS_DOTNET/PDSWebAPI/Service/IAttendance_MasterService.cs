using System.Collections.Generic;
using IOCWeb.Models;

namespace IOCWeb.Services
{
    public interface IAttendance_MasterService{
        List<Attendance_Master> GetAttendance_Masters();
        Attendance_Master GetAttendance_MasterById(int id);
        bool Insert(Attendance_Master amaster);
        bool Update(Attendance_Master amaster);
        bool Delete(int id);
    }
}