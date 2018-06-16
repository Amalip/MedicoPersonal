using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MedicoPersonal.Models
{
    public class HistorialMedico
    {
        public int IdPaciente { get; set; }
        public string Descripcion { get; set; }
        public string Fecha { get; set; }
        public string NombreHospital { get; set; }
        public bool Estatus { get; set; }
    }
}