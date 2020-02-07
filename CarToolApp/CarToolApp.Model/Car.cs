using System;
using System.Collections.Generic;
using System.Text;

namespace CarToolApp.Model
{
  public class Car
  {
    public long Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public decimal Price { get; set; }
  }
}
