using Microsoft.EntityFrameworkCore;
using Demo.Models;

namespace Demo.DAO
{
    public class ActivityDbContext : DbContext
    {
        public ActivityDbContext(DbContextOptions<ActivityDbContext> options) : base(options)
        {
        }

        public DbSet<Activity> Activity { get; set; } //here second Activity is database table name
    }

}
