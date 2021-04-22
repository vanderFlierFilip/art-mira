using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/collections")]
    public class ArtCollectionsController : ControllerBase
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
        public async Task<ActionResult<IReadOnlyList<ArtCollectionToReturnDto>>> GetArtCollections()
        {
            var spec = new ArtCollectionsWithArtworksSpecification();

            var artCollections = await _artCollectionsRepo.ListAsync(spec);

            return Ok(_mapper.Map<IReadOnlyList<ArtCollection>, IReadOnlyList<ArtCollectionToReturnDto>>(artCollections));
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtCollectionToReturnDto>> GetArtCollection(int id)
        {
            var spec = new ArtCollectionsWithArtworksSpecification(id);

            var artCollection = await _artCollectionsRepo.GetEntityWithSpec(spec);
            return _mapper.Map<ArtCollection, ArtCollectionToReturnDto>(artCollection);

        }

    }
}