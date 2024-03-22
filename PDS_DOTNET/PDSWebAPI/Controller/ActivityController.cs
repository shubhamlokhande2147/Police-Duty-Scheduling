using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Demo.Controllers
{
    [ApiController]
    [Route("activity")]
    public class ActivityController : ControllerBase
    {
        private readonly IActivityService _activityService;

        public ActivityController(IActivityService activityService)
        {
            _activityService = activityService;
        }

        [HttpGet("getallactivities")]
        public IActionResult GetAllActivities()
        {
            return Ok(_activityService.GetAllActivities());
        }

        [HttpGet("activities/{ac_id}")]
        public IActionResult GetActivityById(int ac_id)
        {
            var activity = _activityService.GetById(ac_id);
            if (activity != null)
                return Ok(activity);
            else
                return NotFound();
        }

        [HttpPost("add_activity")]
        public IActionResult AddActivity(Activity p)
        {
            _activityService.AddNewActivity(p);
            return Ok("Data added successfully");
        }

        [HttpPut("update_activity")]
        public IActionResult UpdateActivity(Activity p)
        {
            _activityService.UpdateById(p);
            return Ok("Data modified successfully");
        }

        [HttpDelete("delete_activity/{ac_id}")]
        public IActionResult DeleteActivity(int ac_id)
        {
            _activityService.DeleteById(ac_id);
            return Ok("Data deleted successfully");
        }
    }
}
