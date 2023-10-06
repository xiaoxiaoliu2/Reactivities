using Domain;
using MediatR;
using Persistence;
using static Application.Activities.Details;

namespace Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }     // 1 access this inside our handler
        }
    }

    // 2 creating the class for the handler to access the id upward
    public class Handler : IRequestHandler<Query, Activity>     // 3 the class Handler is going to inherit or use the IRequestHandler interface; Query是parameter, Activity是return; 5 选中IRequestHandler interface然后点击implement interface; 6 选中Handler, 然后点击Generate constructor 'Handler()'
    {
        private readonly DataContext _context;

        public Handler(DataContext context)    //6 inject datacontext inside here, and bring in persistence; 7 initialize field from parameter
        {
            _context = context;
        }

        public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.Activities.FindAsync(request.Id);
        }
    }
}