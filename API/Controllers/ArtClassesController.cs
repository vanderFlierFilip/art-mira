using System.Collections.Generic;
using System.Threading.Tasks;
using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

    public class ArtClassesController : BaseApiController
    {
        private readonly IMapper _mapper;
        private readonly IGenericRepository<ArtClass> _artclassesRepo;
        public ArtClassesController(IGenericRepository<ArtClass> artclassesRepo, IMapper mapper)
        {
            _mapper = mapper;
            _artclassesRepo = artclassesRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<ArtClassDto>>> GetArtClasses()
        {
            var artClasses = await _artclassesRepo.ListAllAsync();

            return Ok(_mapper.Map<IReadOnlyList<ArtClass>, IReadOnlyList<ArtClassDto>>(artClasses));

        }
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtClass>> GetArtClass(int id)
        {
            return await _artclassesRepo.GetByIdAsync(id);
        }

    }
}

