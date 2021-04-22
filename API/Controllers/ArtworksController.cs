using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
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
        private readonly IMapper _mapper;
        public ArtworksController(IGenericRepository<Artwork> artworksRepo, IMapper mapper)
        {
            _mapper = mapper;
            _artworksRepo = artworksRepo;
        }

        [HttpGet]
        public async Task<IReadOnlyList<ArtworkToReturnDto>> GetArtworks()
        {
            var artworks = await _artworksRepo.ListAllAsync();

            return _mapper.Map<IReadOnlyList<Artwork>, IReadOnlyList<ArtworkToReturnDto>>(artworks);

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtworkToReturnDto>> GetArtwork(int id)
        {
            var artwork = await _artworksRepo.GetByIdAsync(id);
            return _mapper.Map<Artwork, ArtworkToReturnDto>(artwork);
        }
    }
}