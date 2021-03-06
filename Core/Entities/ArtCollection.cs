using System.Collections;
using System.Collections.Generic;

namespace Core.Entities
{
    public class ArtCollection : BaseEntity
    {
        public string Name { get; set; }
        public List<Artwork> Artworks { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }

    }
}