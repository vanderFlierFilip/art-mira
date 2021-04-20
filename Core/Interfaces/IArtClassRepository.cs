using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Entities;

namespace Core.Interfaces
{
    public interface IArtClassRepository
    {
        Task<ArtClass> GetArtClassByIdAsync(int id);
        Task<IReadOnlyList<ArtClass>> GetArtClassesAsync();
    }
}