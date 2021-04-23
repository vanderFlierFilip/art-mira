using Core.Entities;

namespace Core.Specifications
{
    public class ArtworkWithFiltersForCountSpecification : BaseSpecification<Artwork>
    {
        public ArtworkWithFiltersForCountSpecification(ArtworkSpecParams artworkParams)
        : base(x =>
                (string.IsNullOrEmpty(artworkParams.Search) || x.Name.ToLower().Contains(artworkParams.Search)) &&
                (!artworkParams.ArtCollectionId.HasValue || x.ArtCollectionId == artworkParams.ArtCollectionId))
        {
        }
    }
}