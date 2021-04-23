using Core.Entities;

namespace Core.Specifications
{
    public class ArtworkWithSpecification : BaseSpecification<Artwork>
    {


        public ArtworkWithSpecification(ArtworkSpecParams artworkParams)
            : base(x =>
                (string.IsNullOrEmpty(artworkParams.Search) || x.Name.ToLower().Contains(artworkParams.Search)) &&
                (!artworkParams.ArtCollectionId.HasValue || x.ArtCollectionId == artworkParams.ArtCollectionId)
            )
        {
            AddOrderBy(x => x.Name);
            ApplyPaging(artworkParams.PageSize * (artworkParams.PageIndex - 1), artworkParams.PageSize);


            if (!string.IsNullOrEmpty(artworkParams.Sort))
            {
                switch (artworkParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(n => n.Name);
                        break;
                }
            }
        }
        public ArtworkWithSpecification(int id) : base(x => x.Id == id)
        {

        }

    }
}