using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ArtClassesController : BaseApiController
    {
        private readonly IGenericRepository<ArtClass> _artclassesRepo;
        public ArtClassesController(IGenericRepository<ArtClass> artclassesRepo)
        {
            _artclassesRepo = artclassesRepo;
        }

        [HttpGet]
        public async Task<List<ArtClass>> GetArtClasses()
        {
            var artClasses = await _artclassesRepo.ListAllAsync();

            return (List<ArtClass>)artClasses;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtClass>> GetArtClass(int id)
        {
            return await _artclassesRepo.GetByIdAsync(id);
        }

    }
}

