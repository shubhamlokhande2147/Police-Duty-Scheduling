using System;
using System.Collections.Generic;
using IOCWeb.Models;

namespace IOCWeb.Repositories
{

    public interface IAttendance_MasterRepository
    {
         List<Attendance_Master> GetAll();
        Attendance_Master GetById(int id);
        bool Insert(Attendance_Master amaster);
        bool Update(Attendance_Master amaster);
        bool Delete(int id);
    }
}
