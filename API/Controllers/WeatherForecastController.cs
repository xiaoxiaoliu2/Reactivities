using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]              // API controller attributes that we're going to add to each controller
[Route("[controller]")]      // all of our controllers are going to use a root
public class WeatherForecastController : ControllerBase     // each API controller derives from a base class called controller base, and this is for an MVC controller without view support
{
    private static readonly string[] Summaries = new[]       // a private array of string
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)   // a constructor
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
