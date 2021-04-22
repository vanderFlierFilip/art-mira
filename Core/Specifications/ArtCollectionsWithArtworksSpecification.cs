using Core.Entities;

namespace Core.Specifications
{
    public class ArtCollectionsWithArtworksSpecification : BaseSpecification<ArtCollection>
    {
        public ArtCollectionsWithArtworksSpecification()
        {
            AddInclude(x => x.Artworks);
        }
        public ArtCollectionsWithArtworksSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.Artworks);

        }

    }
}