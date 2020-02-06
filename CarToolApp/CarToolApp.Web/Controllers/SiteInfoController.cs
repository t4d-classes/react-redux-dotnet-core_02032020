using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using CarToolApp.Web.Services;
using SiteInfoModel = CarToolApp.Model.SiteInfo;

namespace CarToolApp.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteInfoController : ControllerBase
    {
        private SiteInfo _siteInfo;

        public SiteInfoController(SiteInfo siteInfo)
        {
            _siteInfo = siteInfo;
        }

        [HttpGet]
        public SiteInfoModel GetSiteInfo()
        {
            return _siteInfo.GetSiteInfo();
        }
    }
}