using API.Dtos;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Core.Entities;

namespace API.Helpers
{
    public class ArtClassUrlResolver : IValueResolver<ArtClass, ArtClassDto, string>
    {
        private readonly IConfiguration _config;
        public ArtClassUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(ArtClass source, ArtClassDto destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.PictureUrl))
            {
                return _config["ApiUrl"] + source.PictureUrl;
            }
            return null;
        }
    }
}