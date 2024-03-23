using System.Collections.Generic;
using System.Linq;
using Demo.Models; // Assuming Activity class is defined in Models namespace
using Microsoft.EntityFrameworkCore;
using Demo.DAO;


namespace Demo.Services
{

    public class ActivityService : IActivityService
    {
        private readonly ActivityDbContext _context;

        public ActivityService(ActivityDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Activity> GetAllActivities()
        {
            return _context.Activity.ToList();
        }

        public Activity GetById(int id)
        {
            return _context.Activity.Find(id);
        }

        public void AddNewActivity(Activity activity)
        {
            _context.Activity.Add(activity);
            _context.SaveChanges();
        }

        public void UpdateById(Activity activity)
        {
            _context.Entry(activity).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void DeleteById(int id)
        {
            var activity = _context.Activity.Find(id);
            if (activity != null)
            {
                _context.Activity.Remove(activity);
                _context.SaveChanges();
            }
            // Handle error if the activity with the given id is not found
        }
    }
}
