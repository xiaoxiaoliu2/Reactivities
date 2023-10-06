using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]              // API controller attributes that we're going to add to each controller
    [Route("api/[controller]")]  
    public class BaseApiController : ControllerBase   // this class derives from ControllerBase 
    {
        private IMediator _mediator;    // private means it can only be used in this class
        protected IMediator Mediator => _mediator ??= 
            HttpContext.RequestServices.GetService<IMediator>();    // protected means that it can be used inside this class and any derived classes; ??= means if _mediator is null, then assign anything to the right to Mediator 
    }
}