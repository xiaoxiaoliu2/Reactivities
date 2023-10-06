using AutoMapper;
using Domain;


namespace Application.Core
{
    public class MappingProfiles : Profile   // derive from an auto map, a class called profile
    {
        public MappingProfiles()
        {
            CreateMap<Activity, Activity>();     // map from an activity(command.activity) to another activity(entity)
        }
    }
}