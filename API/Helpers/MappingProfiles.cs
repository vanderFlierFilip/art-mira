using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.Identity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Artwork, ArtworkToReturnDto>()
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ArtworkUrlResolver>());

            CreateMap<ArtCollection, ArtCollectionToReturnDto>()
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ArtCollectionUrlResolver>());


            CreateMap<ArtClass, ArtClassDto>()
                .ForMember(d => d.PictureUrl, o => o.MapFrom<ArtClassUrlResolver>());

            CreateMap<Address, AddressDto>().ReverseMap();
            CreateMap<CustomerBasketDto, CustomerBasket>();
            CreateMap<BasketItemDto, BasketItem>();
        }

    }
}