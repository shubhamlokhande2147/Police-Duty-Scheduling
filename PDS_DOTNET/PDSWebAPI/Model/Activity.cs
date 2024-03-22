using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Demo.Models
{
    public class Activity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ac_id { get; set; }
        public string name { get; set; }
        public string location { get; set; }
        public string shift_time { get; set; }

        public Activity()
        {
        }

        public Activity(int acId, string nm, string locat, string shiftTime)
        {
            ac_id = acId;
            name = nm;
            location = locat;
            shift_time = shiftTime;
        }

        public override string ToString()
        {
            return $"Activity [ac_id={ac_id}, name={name}, location={location}, shift_time={shift_time}]";
        }
    }
}
