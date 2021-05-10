using System;
using System.Runtime.Serialization.Json;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Collections.Generic;
using Core.Entities;
using Core.Entities.OrderAggregate;

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
                if (!context.DeliveryMethods.Any())
                {
                    var dmData =
                        File.ReadAllText("../Infrastructure/Data/SeedData/delivery.json");

                    var deliveryMethods = JsonSerializer.Deserialize<List<DeliveryMethod>>(dmData);

                    foreach (var item in deliveryMethods)
                    {
                        context.DeliveryMethods.Add(item);
                    }
                    await context.SaveChangesAsync();

                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<ArtClassContextSeed>();
                logger.LogError(ex.Message);
            }
            // TODO: Separate the methods below from this class into another
            try
            {
                if (!context.ArtCollections.Any())
                {
                    var artCollectionsData =
                        File.ReadAllText("../Infrastructure/Data/SeedData/collections.json");

                    var artCollections = JsonSerializer.Deserialize<List<ArtCollection>>(artCollectionsData);

                    foreach (var artCollection in artCollections)
                    {
                        context.ArtCollections.Add(artCollection);
                    }
                    await context.SaveChangesAsync();

                }
            }
            catch (Exception ex)
            {
                var logger = loggerFactory.CreateLogger<ArtClassContextSeed>();
                logger.LogError(ex.Message);
            }
            try
            {
                if (!context.Artworks.Any())
                {
                    var artworksData =
                        File.ReadAllText("../Infrastructure/Data/SeedData/artworks.json");

                    var artworks = JsonSerializer.Deserialize<List<Artwork>>(artworksData);

                    foreach (var artwork in artworks)
                    {
                        context.Artworks.Add(artwork);
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