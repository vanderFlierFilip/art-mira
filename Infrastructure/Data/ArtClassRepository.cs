using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class ArtClassRepository : IArtClassRepository
    {
        private readonly ArtMiraDbContext _context;
        public ArtClassRepository(ArtMiraDbContext context)
        {
            _context = context;

        }

        public async Task<ArtClass> GetArtClassByIdAsync(int id)
        {
            return await _context.ArtClasses.FindAsync(id);
        }

        public async Task<IReadOnlyList<ArtClass>> GetArtClassesAsync()
        {
            return await _context.ArtClasses.ToListAsync();
        }
    }
}