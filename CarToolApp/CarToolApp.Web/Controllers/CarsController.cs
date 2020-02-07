using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarToolApp.Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using CarToolApp.Model;

namespace CarToolApp.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private ICarsData _carsData;

        public CarsController(ICarsData carsData)
        {
          _carsData = carsData;
        }

        // GET: api/Cars
        [HttpGet]
        public async Task<IEnumerable<Car>> Get()
        {
            return await _carsData.All();
        }

        // GET: api/Cars/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cars
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Cars/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
