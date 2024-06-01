using ECommerce_API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Transactions;

namespace ECommerce_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly MyDbContext _context;
        public UsersController(MyDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login([FromBody] Users user)
        {
            if (user != null)
            {
                var objuser = _context.users.Where(x => x.Email == user.Email && x.Password == user.Password).FirstOrDefault();
                if (objuser != null)
                {                   
                    return Ok(new { User = objuser });
                }
                else
                    return new NoContentResult();
            }
            return new NoContentResult();
        }

        [HttpPost]
        [Route("Registration")]
        public IActionResult Registration([FromBody] Users user)
        {
            if (user != null)
            {
                var objuser = _context.users.Where(x => x.Email == user.Email).FirstOrDefault();
                if (objuser != null)
                {
                    return BadRequest("User already exists with same Email address");
                }
                else
                {
                    using (var scope = new TransactionScope())
                    {
                        _context.users.Add(user);
                        _context.SaveChanges();
                        scope.Complete();
                        return new OkObjectResult(user);
                    }
                }
            }
            return new NoContentResult();
            
        }

    }
}
