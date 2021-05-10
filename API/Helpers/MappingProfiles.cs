using API.Dtos;
using AutoMapper;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Address = Core.Entities.Identity.Address;
using Core.Entities.OrderAggregate;

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

            CreateMap<AddressDto, Core.Entities.OrderAggregate.Address>();

            CreateMap<Order, OrderToReturnDto>()
                .ForMember(d =>
                    d.DeliveryMethod, o
                    => o.MapFrom(s => s.DeliveryMethod.ShortName))
                .ForMember(d =>
                    d.ShippingPrice, o
                    => o.MapFrom(s => s.DeliveryMethod.Price));


            CreateMap<OrderItem, OrderItemDto>()
                .ForMember(d =>
                    d.ProductId, o =>
                    o.MapFrom(s
                        => s.ItemOrdered.ProductItemId))
                .ForMember(d =>
                    d.ProductName, o =>
                    o.MapFrom(s
                        => s.ItemOrdered.ProductName))
                .ForMember(d =>
                    d.PictureUrl, o =>
                    o.MapFrom(s
                        => s.ItemOrdered.PictureUrl))
                .ForMember(d
                    => d.PictureUrl, o =>
                    o.MapFrom<OrderItemUrlResolver>());
        }

    }
}