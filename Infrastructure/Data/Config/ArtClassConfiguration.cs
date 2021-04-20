using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infrastructure.Data.Config
{
    public class ArtClassConfiguration : IEntityTypeConfiguration<ArtClass>
    {
        public void Configure(EntityTypeBuilder<ArtClass> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Name).IsRequired();
            builder.Property(p => p.Info).IsRequired();
            builder.Property(p => p.Price).IsRequired();
            builder.Property(p => p.Description).IsRequired();
            builder.Property(p => p.Duration).IsRequired();
            builder.Property(p => p.PictureUrl).IsRequired();
        }
    }
}