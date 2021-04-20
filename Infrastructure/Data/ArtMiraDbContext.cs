using System.Reflection;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ArtMiraDbContext : DbContext
    {
        public ArtMiraDbContext(DbContextOptions<ArtMiraDbContext> options) : base(options)
        {
        }

        public DbSet<ArtClass> ArtClasses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

        }

    }
}