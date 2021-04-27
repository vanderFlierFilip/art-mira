using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly ArtMiraDbContext _context;
        public BuggyController(ArtMiraDbContext context)
        {
            _context = context;
        }
        [HttpGet("testauth")]
        [Authorize]
        public ActionResult<string> GetSecretText()
        {
            return "secret stuff";
        }

        [HttpGet("notfound")]
        public ActionResult GetNotFoundRequest()
        {
            var thing = _context.ArtClasses.Find(44);
            var thing1 = _context.ArtCollections.Find(446);
            var thing2 = _context.Artworks.Find(4445);


            // TODO: Make a class that contains these fields and methods 
            // instead of this mumbo jumbo...         

            if (thing == null || thing1 == null || thing2 == null)
            {
                return NotFound(new ApiResponse(404));
            }
            return Ok();
        }
        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var thing = _context.ArtClasses.Find(44);
            var thing1 = _context.ArtCollections.Find(446);
            var thing2 = _context.Artworks.Find(4445);
            var thingToReturn = thing.ToString();
            var thingToReturn1 = thing.ToString();
            var thingToReturn2 = thing.ToString();

            return Ok();

        }
        [HttpGet("badrequest")]
        public ActionResult GetBadRequest(int id)
        {
            return BadRequest(new ApiResponse(400));
        }
        [HttpGet("badrequest/{id}")]
        public ActionResult GetNotFoundRequest(int id)
        {
            return Ok();
        }
    }
}