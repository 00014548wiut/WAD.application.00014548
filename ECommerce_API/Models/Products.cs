using System.ComponentModel.DataAnnotations;

namespace ECommerce_API.Models
{
    public class Products
    {
        [Key]
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public int IsActive { get; set; }
    }
}
