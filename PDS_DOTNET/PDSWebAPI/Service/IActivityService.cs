using System.Collections.Generic;
using System.Linq;
using Demo.Models; // Assuming Activity class is defined in Models namespace
using Microsoft.EntityFrameworkCore;

namespace Demo.Services
{
    public interface IActivityService
    {
        IEnumerable<Activity> GetAllActivities();
        Activity GetById(int id);
        void AddNewActivity(Activity activity);
        void UpdateById(Activity activity);
        void DeleteById(int id);
    }
}    