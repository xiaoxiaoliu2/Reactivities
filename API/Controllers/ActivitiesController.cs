using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController      // this class derives from BaseApiController 
    {
        // create endpoint to query our database，create a constructor,type ctor to use the snippet
        // using dependency injection, to inject something into the constructor of a class
        

        // create two endpoints
        [HttpGet]     // api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());    // send query to mediator handler, create new instance of list
        }

        [HttpGet("{id}")]     //api/activities/fdfdfdffdfd
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            await Mediator.Send(new Create.Command {Activity = activity});
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(Guid id, Activity activity)
        {
            activity.Id = id;
            await Mediator.Send(new Edit.Command { Activity = activity });
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            await Mediator.Send(new Delete.Command { Id = id });
            return Ok();
        }
    }
}