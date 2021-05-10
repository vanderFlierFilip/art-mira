using System;
using System.Linq;
using System.Reflection;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using StackExchange.Redis;
using Order = Core.Entities.OrderAggregate.Order;

namespace Infrastructure.Data
{
    public class ArtMiraDbContext : DbContext
    {
        public ArtMiraDbContext(DbContextOptions<ArtMiraDbContext> options) : base(options)
        {
        }

        public DbSet<ArtClass> ArtClasses { get; set; }
        public DbSet<ArtCollection> ArtCollections { get; set; }
        public DbSet<Artwork> Artworks { get; set; }
        public DbSet<Order> Orders { get; set; } 
        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

            if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                foreach (var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var dateTimeProperties = entityType.ClrType.GetProperties().Where(p =>
                 
                        p.PropertyType == typeof(DateTimeOffset));
                    
                    foreach (var property in dateTimeProperties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name)
                            .HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }

              
            }
        }

    }
}