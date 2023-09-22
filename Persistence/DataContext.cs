using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence;

public class DataContext : DbContext      // inside this class, derive from a microsoft EF core class called DbContext( can be used to query and save instances of our entities)
{
    public DataContext(DbContextOptions options) : base(options)   // generate the constructor this class needs,  and allow us to pass some options to it, like connection string
    {
    }

    public DbSet<Activity> Activities { get; set; }   // the name of table is Activities
}
