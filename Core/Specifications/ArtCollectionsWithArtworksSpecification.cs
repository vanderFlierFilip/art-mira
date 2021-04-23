using Core.Entities;

namespace Core.Specifications
{
    public class ArtCollectionsWithArtworksSpecification : BaseSpecification<ArtCollection>
    {
        public ArtCollectionsWithArtworksSpecification(string sort)
        {
            AddInclude(x => x.Artworks);
            AddOrderBy(x => x.Name);


        }
        public ArtCollectionsWithArtworksSpecification(int id)
            : base(x => x.Id == id)
        {
            AddInclude(x => x.Artworks);

        }

    }
}