using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ArtworksController : BaseApiController
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
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]

        public async Task<ActionResult<ArtworkToReturnDto>> GetArtwork(int id)
        {
            var artwork = await _artworksRepo.GetByIdAsync(id);

            if (artwork == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Artwork, ArtworkToReturnDto>(artwork);
        }
    }
}