namespace Core.Entities.OrderAggregate
{
    public class OrderItem : BaseEntity
    {
        public OrderItem(ProductItemOrdered itemOrdered, decimal price)
        {
            ItemOrdered = itemOrdered;
            Price = price;
        }

        public OrderItem()
        {
        }

        public ProductItemOrdered ItemOrdered { get; set; }
        public decimal Price { get; set; }
    }
}