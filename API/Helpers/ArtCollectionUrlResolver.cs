using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ArtCollectionUrlResolver : IValueResolver<ArtCollection, ArtCollectionToReturnDto, string>
    {
        private readonly IConfiguration _config;
        public ArtCollectionUrlResolver(IConfiguration config)
        {
            _config = config;

        }

        public string Resolve(ArtCollection source, ArtCollectionToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }
}