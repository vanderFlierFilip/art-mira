using System.ComponentModel.DataAnnotations;

namespace API.Dtos
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string ArtworkName { get; set; }
        [Required]
        [Range(0.1, double.MaxValue, ErrorMessage = "Price must be greater!")]
        public int Price { get; set; }
        [Required]
        public string PictureUrl { get; set; }
   
    }
}