using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CarToolApp.Data
{
  public class CarToolContext: DbContext
  {

    public CarToolContext(DbContextOptions<CarToolContext> options) :
       base(options)
    { }

    public DbSet<Car> Cars { get; set; }
  }
}
