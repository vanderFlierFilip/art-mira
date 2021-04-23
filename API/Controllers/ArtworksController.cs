using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using API.Helpers;
using AutoMapper;
using Core;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
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
        public async Task<ActionResult<Pagination<ArtworkToReturnDto>>> GetArtworks([FromQuery] ArtworkSpecParams artworkParams)
        {
            var spec = new ArtworkWithSpecification(artworkParams);

            var countSpec = new ArtworkWithSpecification(artworkParams);

            var totalItems = await _artworksRepo.CountAsync(countSpec);

            var artworks = await _artworksRepo.ListAsync(spec);

            var data = _mapper.Map<IReadOnlyList<Artwork>, IReadOnlyList<ArtworkToReturnDto>>(artworks);

            return Ok(new Pagination<ArtworkToReturnDto>(artworkParams.PageIndex, artworkParams.PageSize, totalItems, data));

        }
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]

        public async Task<ActionResult<ArtworkToReturnDto>> GetArtwork(int id)
        {
            var spec = new ArtworkWithSpecification(id);

            var artwork = await _artworksRepo.GetEntityWithSpec(spec);

            if (artwork == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<Artwork, ArtworkToReturnDto>(artwork);
        }
    }
}