namespace Core.Entities
{
    public class ArtClass : BaseEntity
    {
        public string Name { get; set; }
        public string Info { get; set; }
        public int Duration { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }
        public string Schedule { get; set; }
    }
}