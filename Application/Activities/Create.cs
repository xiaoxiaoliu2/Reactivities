using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest    // command does not return value, request in Details.cs and List.cs return value
        {
            public Activity Activity { get; set; }     // the line is the thing we want to receive from the API; 输入prop直接跳出来， take activity as the parameter, from Domain, parse an object of the activity to this handler
        }

    
            public class Handler : IRequestHandler<Command>    //选中Command，选中Implement Interface；选中Handler, 选择Generate constructor 'Handler()'
            {
                private readonly DataContext _context;

                public Handler(DataContext context)      // create a constructor and inject datacontext into this so we can persist our changes; using persistence for this
                {
                    _context = context;
                }

                public async Task Handle(Command request, CancellationToken cancellationToken)
                {
                    _context.Activities.Add(request.Activity);
                    await _context.SaveChangesAsync();

                }


            }
        }
    }