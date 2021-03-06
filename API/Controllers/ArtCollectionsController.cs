using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using API.Errors;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ArtCollectionsController : BaseApiController
    {
        private readonly IGenericRepository<ArtCollection> _artCollectionsRepo;
        private readonly IMapper _mapper;

        public ArtCollectionsController(IGenericRepository<ArtCollection> artCollectionsRepo,
        IMapper mapper)
        {
            _mapper = mapper;
            _artCollectionsRepo = artCollectionsRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ArtCollectionToReturnDto>>> GetArtCollections(string sort)
        {
            var spec = new ArtCollectionsWithArtworksSpecification(sort);

            var artCollections = await _artCollectionsRepo.ListAsync(spec);

            return Ok(_mapper.Map<IReadOnlyList<ArtCollection>, IReadOnlyList<ArtCollectionToReturnDto>>(artCollections));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ArtCollectionToReturnDto>> GetArtCollection(int id)
        {
            var spec = new ArtCollectionsWithArtworksSpecification(id);

            var artCollection = await _artCollectionsRepo.GetEntityWithSpec(spec);

            if (artCollection == null) return NotFound(new ApiResponse(404));

            return _mapper.Map<ArtCollection, ArtCollectionToReturnDto>(artCollection);

        }

    }
}