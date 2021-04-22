using System.Collections.Generic;
using Core.Entities;

namespace API.Dtos
{
    public class ArtCollectionToReturnDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<ArtworkToReturnDto> Artworks { get; set; }
        public string Description { get; set; }
        public string PictureUrl { get; set; }

    }
}