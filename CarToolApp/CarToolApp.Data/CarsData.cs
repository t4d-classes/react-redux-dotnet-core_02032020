using AutoMapper;
using CarToolApp.Core;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CarData = CarToolApp.Data.Car;
using CarModel = CarToolApp.Model.Car;

namespace CarToolApp.Data
{
  public class CarsData: ICarsData
  {
    private CarToolContext _context;
    private IMapper _mapper;

    public CarsData(CarToolContext context)
    {
      _context = context;

      var mapperConfig = new MapperConfiguration(config =>
      {
         config.CreateMap<CarData, CarModel>().ReverseMap();
      });

      _mapper = mapperConfig.CreateMapper();
    }

    public async Task<IEnumerable<CarModel>> All()
    {
      return await _context.Cars.Select(
        carData => _mapper.Map<CarData, CarModel>(carData)
      ).ToListAsync();
    }

    public async Task<CarModel> Append(CarModel car)
    {
      var carData = _mapper.Map<CarModel, CarData>(car);

      _context.Cars.Add(carData);
      await _context.SaveChangesAsync();

      return _mapper.Map<CarData, CarModel>(carData);
    }

  }
}
