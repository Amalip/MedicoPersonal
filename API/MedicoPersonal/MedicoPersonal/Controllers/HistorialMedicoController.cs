using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MedicoPersonal.Controllers
{
    [EnableCors("*", "*", "*")]
    [RoutePrefix("api/v1/historial")]

    public class HistorialMedicoController : ApiController
    {
        //[HttpGet]
        //[Route("obtener/{id}")]
        //public HttpResponseMessage ObtenerHistorialPorId(int id)
        //{
            
        //}
    }
}