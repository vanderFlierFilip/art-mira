using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/artworks")]
    public class ArtworksController : ControllerBase
    {
        private readonly IGenericRepository<Artwork> _artworksRepo;
        public ArtworksController(IGenericRepository<Artwork> artworksRepo)
        {
            _artworksRepo = artworksRepo;
        }

        [HttpGet]
        public async Task<List<Artwork>> GetArtworks()
        {
            var artworks = await _artworksRepo.ListAllAsync();

            return (List<Artwork>)artworks;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Artwork>> GetArtwork(int id)
        {
            return await _artworksRepo.GetByIdAsync(id);
        }
    }
}