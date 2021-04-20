using System;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Collections.Generic;
using Core.Entities;

namespace Infrastructure.Data
{
    public class ArtClassContextSeed
    {
        public static async Task SeedAsync(ArtMiraDbContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if (!context.ArtClasses.Any())
                {
                    var artClassesData =
                        File.ReadAllText("../Infrastructure/Data/SeedData/artclasses.json");

                    var artClasses = JsonSerializer.Deserialize<List<ArtClass>>(artClassesData);

                    foreach (var artClass in artClasses)
                    {
                        context.ArtClasses.Add(artClass);
                    }
                    await context.SaveChangesAsync();

                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<ArtClassContextSeed>();
                logger.LogError(ex.Message);
            }
        }
    }
}