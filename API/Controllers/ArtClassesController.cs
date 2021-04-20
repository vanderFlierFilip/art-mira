using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/art-classes")]
    public class ArtClassesController : ControllerBase
    {
        private readonly IArtClassRepository _repo;
        public ArtClassesController(IArtClassRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<List<ArtClass>> GetArtClasses()
        {
            var artClasses = await _repo.GetArtClassesAsync();

            return (List<ArtClass>)artClasses;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtClass>> GetArtClass(int id)
        {
            return await _repo.GetArtClassByIdAsync(id);
        }
    }
}

