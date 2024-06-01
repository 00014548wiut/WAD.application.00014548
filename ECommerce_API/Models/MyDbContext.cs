using Microsoft.EntityFrameworkCore;

namespace ECommerce_API.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }
        public DbSet<Users> users { get; set; }
        public DbSet<Products> products { get; set; }
    }
}
