﻿using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace CarToolApp.Data
{
  [Table("Car")]
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
