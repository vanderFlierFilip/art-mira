using API.Dtos;
using AutoMapper;
using Core.Entities;
using Microsoft.Extensions.Configuration;

namespace API.Helpers
{
    public class ArtworkUrlResolver : IValueResolver<Artwork, ArtworkToReturnDto, string>
    {
        private readonly IConfiguration _config;
        public ArtworkUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Artwork source, ArtworkToReturnDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }
}