using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController      // this class derives from BaseApiController 
    {
        // create endpoint to query our database，create a constructor,type ctor to use the snippet
        // using dependency injection, to inject something into the constructor of a class
        private readonly DataContext _context;
 
        public ActivitiesController(DataContext context)   
        {
            _context = context;
        }

        // create two endpoints
        [HttpGet]     // api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }

        [HttpGet("{id}")]     //api/activities/fdfdfdffdfd
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }


        
    }
}