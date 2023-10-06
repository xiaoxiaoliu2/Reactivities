using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;

            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);
                // activity.Title = request.Activity.Title ?? activity.Title;
                _mapper.Map(request.Activity, activity);   // go from request.Activity(update all properties inside here) to activity(to all properties inside here) we got from our database
                await _context.SaveChangesAsync();     // change our database
                
            }
        }
    }
}