using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/collections")]
    public class ArtCollectionsController : ControllerBase
    {
        private readonly IGenericRepository<ArtCollection> _artCollectionsRepo;
        public ArtCollectionsController(IGenericRepository<ArtCollection> artCollectionsRepo)
        {
            _artCollectionsRepo = artCollectionsRepo;
        }

        [HttpGet]
        public async Task<List<ArtCollection>> GetArtCollections()
        {
            var artCollections = await _artCollectionsRepo.ListAllAsync();
            return (List<ArtCollection>)artCollections;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtCollection>> GetArtCollection(int id)
        {
            return await _artCollectionsRepo.GetByIdAsync(id);
        }
    }
}