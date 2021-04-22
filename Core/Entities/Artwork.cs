namespace Core.Entities
{
    public class Artwork : BaseEntity
    {
        public string Name { get; set; }
        public int ArtCollectionId { get; set; }
        public ArtCollection ArtCollection { get; set; }
        public string PictureUrl { get; set; }
        public int Price { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
        public string Dimensions { get; set; }
        public string Technique { get; set; }
    }
}