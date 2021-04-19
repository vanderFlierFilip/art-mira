using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/art-classes")]
    public class ArtClassesController : ControllerBase
    {
        private readonly ArtMiraDbContext _context;
        public ArtClassesController(ArtMiraDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<ArtClass>> GetArtClasses()
        {
            var artClasses = await _context.ArtClasses.ToListAsync();

            return artClasses;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtClass>> GetArtClass(int id)
        {
            return await _context.ArtClasses.FindAsync(id);
        }
    }
}

