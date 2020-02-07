using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

using CarModel = CarToolApp.Model.Car;

namespace CarToolApp.Core
{
  public interface ICarsData
  {
    Task<IEnumerable<CarModel>> All();
    Task<CarModel> Append(CarModel car);
    Task<CarModel> Delete(long carId);
  }
}
