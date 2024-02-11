using Microsoft.EntityFrameworkCore;
using IOCWeb.Models;

namespace IOCWeb.Contexts
{

         public class Attendance_MasterContext:DbContext
         {
                 public DbSet<Attendance_Master> Attendance_Masters {get;set;}

                    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
                    {
                        string conString="server=localhost;uid=root;" +  "pwd=Shubham@2147;database=secure_shift_nexus_db";
                        optionsBuilder.UseMySQL(conString);
                    }

                        protected override void OnModelCreating(ModelBuilder modelBuilder)
                        {
                            base.OnModelCreating(modelBuilder);
                            modelBuilder.Entity<Attendance_Master>(entity => 
                            {
                            entity.HasKey(e => e.AM_IdId);
                            entity.Property(e => e.Belt_No).IsRequired();
                            entity.Property(e => e.Name).IsRequired();
                            entity.Property(e => e.Email_Id).IsRequired();
                            entity.Property(e => e.Mobile).IsRequired();
                            entity.Property(e => e.Username).IsRequired();
                            entity.Property(e => e.Password).IsRequired();
                            });
                        }
         }
}
