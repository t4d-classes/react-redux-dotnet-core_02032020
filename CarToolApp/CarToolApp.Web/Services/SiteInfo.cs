using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using SiteInfoModel = CarToolApp.Model.SiteInfo;

namespace CarToolApp.Web.Services
{
  public class SiteInfo
  {
    private IConfiguration _configuration;

    public SiteInfo(IConfiguration configuration)
    { 
      _configuration = configuration;
    }

    public SiteInfoModel GetSiteInfo()
    {
      return new SiteInfoModel
      {
        SiteName = _configuration["SiteName"],
      };
    }
  }
}
