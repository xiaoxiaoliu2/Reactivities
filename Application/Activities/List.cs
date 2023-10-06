using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities;

public class List
{
    public class Query : IRequest<List<Activity>> {}
    public class Handler : IRequestHandler<Query, List<Activity>>
    {
        //create a Handler constructor to access to our data context, and call it context (inject DBContext/datacontext here)
        private readonly DataContext _context;
        public Handler(DataContext context)
        {
            _context = context;

        }
        public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
        {
            return await _context.Activities.ToListAsync();
        }
    }
}
