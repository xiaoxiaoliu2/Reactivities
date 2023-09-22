using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]              // API controller attributes that we're going to add to each controller
    [Route("api/[controller]")]  
    public class BaseApiController : ControllerBase   // this class derives from ControllerBase 
    {
        
    }
}